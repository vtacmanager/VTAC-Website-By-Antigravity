import os
import argparse
import sys
import json
import time
from datetime import datetime
from dotenv import load_dotenv
from firecrawl import FirecrawlApp

# Load environment variables
load_dotenv()

def main():
    parser = argparse.ArgumentParser(description="Scrape websites using Firecrawl")
    parser.add_argument("--url", required=True, help="URL to scrape or search query")
    parser.add_argument("--mode", choices=["scrape", "crawl", "search"], default="scrape", help="Operation mode")
    parser.add_argument("--limit", type=int, default=5, help="Limit for crawl/search results")
    
    args = parser.parse_args()
    
    api_key = os.getenv("FIRECRAWL_API_KEY")
    if not api_key:
        print(json.dumps({"status": "error", "message": "Missing FIRECRAWL_API_KEY in .env"}))
        sys.exit(1)

    try:
        app = FirecrawlApp(api_key=api_key)
        
        result_data = None
        
        if args.mode == "scrape":
            # Scrape a single URL
            print(f"Scraping URL: {args.url}...", file=sys.stderr)
            # SDK v1/v2 update: use scrape() instead of scrape_url, and pass arguments directly
            scrape_result = app.scrape(args.url, formats=['markdown'])
            result_data = scrape_result
            
        elif args.mode == "crawl":
            # Crawl a website
            print(f"Crawling website: {args.url} (Limit: {args.limit})...", file=sys.stderr)
            # SDK v1/v2 update: use crawl() which handles polling, passes scrape_options
            result_data = app.crawl(
                args.url, 
                limit=args.limit, 
                scrape_options={'formats': ['markdown']}
            )
            # app.crawl returns the final result directly in recent implementation
            if not result_data:
                raise Exception("Crawl failed or returned no data.")

        elif args.mode == "search":
             # Initialize result_data to None for safety
             result_data = None
             print(f"Search not fully implemented in this script version, using scrape fallback if URL provided.", file=sys.stderr)
             result_data = app.scrape(args.url, formats=['markdown'])


        # Save Output
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        safe_name = "".join([c if c.isalnum() else "_" for c in args.url[-20:]])
        filename = f".tmp/firecrawl_{args.mode}_{safe_name}_{timestamp}.md"
        
        # Ensure .tmp exists
        os.makedirs(".tmp", exist_ok=True)
        
        # Format the output for the file
        content_to_save = ""
        
        if args.mode == 'scrape' and result_data:
            if isinstance(result_data, dict):
                content_to_save = result_data.get('markdown', '') or result_data.get('data', {}).get('markdown', '')
            else:
                 content_to_save = getattr(result_data, 'markdown', '')

        elif args.mode == 'crawl' and result_data:
            # Aggregate crawl results
            # The result structure from app.crawl() typically contains 'data' list
            if isinstance(result_data, dict):
                data_list = result_data.get('data', [])
            else:
                data_list = getattr(result_data, 'data', [])

            for item in data_list:
                # item might be a dict or object too
                if isinstance(item, dict):
                     item_url = item.get('metadata', {}).get('sourceURL', 'Unknown URL')
                     item_md = item.get('markdown', '')
                else:
                     # Assuming item is also an object if main result is object
                     item_md = getattr(item, 'markdown', '')
                     metadata = getattr(item, 'metadata', {})
                     if isinstance(metadata, dict):
                         item_url = metadata.get('sourceURL', 'Unknown URL')
                     else:
                         item_url = getattr(metadata, 'sourceURL', 'Unknown URL')
                
                content_to_save += f"\n\n--- Source: {item_url} ---\n\n{item_md}"

        with open(filename, 'w') as f:
            f.write(content_to_save)
            
        print(json.dumps({
            "status": "success",
            "mode": args.mode,
            "output_file": filename,
            "preview": content_to_save[:100] + "..."
        }))

    except Exception as e:
        print(json.dumps({"status": "error", "message": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    main()
