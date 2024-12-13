# Genezio-based RAG (Retrieval-Augmented Generation) using OpenAI

## Deploy your own instance:

# Deploying this example

1. Follow this flow to import this repo:

[![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/bogdanripa/openai-rag&env_vars=OPENAI_API_KEY,SEARCH_URL)


2. Add the "OPENAI_API_KEY" env var.

This should be a valid OpenAI API Key

3. Add the "SEARCH_URL" env var with the URL you want to crawl

The program will crawl all pages linked to this URL that are sub-pages (their respective URL starts with the SEARCH_URL). 

Here are some examples of such URLs:
- https://genezio.com/docs/
- https://reactnative.dev/docs/next/getting-started

## Usage

Go to your public-facing URL (the one generated by genezio).

The 1st time you go there, it will start crawling your domain. If you see it getting stuck (might hapen when you reach genezio's function timeout), you can manually restart the crawling.

Once the crawling is done, the page will startr indexing the pages. IN LLM jargom, this is called generating embeddings, or creating a vector database.

Once this step is done, you can enter your search queries and start seeing how the LLM responds your informatin from the pages it crawled.

The code is written so that it instructs the LLM to only give answers related to the domain you are crawling, but this is not a guarantee.

When running in the cloud, the response from OpenAI will come streamed all the way to the client's browser
