# auto-categorize-docs

Create a document library that automatically categorizes documents by each page into categories of BOL(Bill of Lading), POD)Proof of Delivery), Carrier Invoice, Rate Confirmation, and Notice of Assignment. It should also answer if the POD is signed. There is a toggle to use ChatGPT as well. It should monitor an upload folder that automatically parses the information and decides what  kind of document it is. After its been categorized the documents are individually labeled and placed into the document library all organized by the Pro #. This document database can be then searched if need be. 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/auto-categorize-docs.git
cd auto-categorize-docs
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
