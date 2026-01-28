---
name: Firecrawl Scraper
description: Scrape websites and extract clean markdown content using Firecrawl.
---

# Firecrawl Scraper Skill

This skill allows you to scrape websites and extract clean content formatted as Markdown, suitable for LLM processing. It handles dynamic content, caching, and error handling.

## Capabilities

- **Scrape Single URL**: Extract content from a specific web page.
- **Crawl Website**: Crawl a website (bfs/dfs) to extract multiple pages (Configurable depth).
- **Search & Scrape**: Search Google via Firecrawl and scrape top results.

## Usage

### 1. Setup
Ensure your `.env` file has the Firecrawl API Key:
```
FIRECRAWL_API_KEY=fc_...
```

### 2. Standard Operating Procedure (Directive)
Follow the directive in `directives/scrape_website.md` for detailed instructions on usage.

### 3. Execution Tools
The primary script is located at: `execution/scrape_url.py`

#### Example Command
```bash
python3 execution/scrape_url.py --url "https://example.com" --mode "scrape"
```

## Troubleshooting
- **401 Unauthorized**: Check your API Key in `.env`.
- **429 Rate Limit**: Wait and retry. Firecrawl has rate limits.
- **Empty Output**: The site might block scrapers or have no text content.
