# Directive: Scrape Website with Firecrawl

## Objective
Scrape content from one or more URLs using the Firecrawl API to generate clean Markdown text for LLM consumption.

## Inputs
- **URL**: The target website URL (e.g., `https://example.com`)
- **Mode**: `scrape` (single page) or `crawl` (whole site/subpages) or `search` (search query)
- **Output Path**: (Optional) Specific path to save the markdown. Default is `.tmp/scraped_<timestamp>.md`.

## Tools & Scripts
- **Script**: `execution/scrape_url.py`
- **Environment**: Requires `FIRECRAWL_API_KEY` in `.env`

## Execution Steps

1. **Verification**:
   - Check if `FIRECRAWL_API_KEY` exists in `.env`.
   - If missing, ASK the user for the key.

2. **Run Scraper**:
   - Construct the command:
     ```bash
     python3 execution/scrape_url.py --url "<URL>" --mode "<MODE>"
     ```
   - For `crawl` mode, you can optionally request `--limit` (default 10 pages).

3. **Validation**:
   - Check the output status of the script.
   - It should output JSON with `status: success` and the file path.

4. **Result**:
   - Read the generated markdown file from the `.tmp/` folder.
   - Return a summary or the full content to the user as requested.

## Edge Cases
- **Invalid URL**: The script returns an error. Report this to the user.
- **Quota Exceeded**: Firecrawl returns 402/429. Inform user about API limits.
- **Content Security**: Some sites block bots. Firecrawl usually handles this, but failures may occur.
