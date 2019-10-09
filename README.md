# Contract Reader

A simple contract reader statically rendered using GatsbyJS.
Paragraphs are lazy loaded to not disrupt the user's reading.

---

## Description

The individual contract pages are rendered by Gatsby using the mock data supplied within the `'data'` directory.

A separate page will be generated for each contract and will be available via `'/contracts/{contract_id}'`

The paragraphs are lazy-loaded using a mock API which grabs all paragraphs from the json file then returns the required data.

There is a component attached to the bottom of the page, which, when visible tells the page to get more paragraphs. This then allows more paragraphs to be fetched as the user scrolls the page. (See [VisibilityChecker.jsx](/src/components/VisibilityChecker.jsx))

Some basic styling has been added and the Bulma CSS library has been added.

## Demo

😎 https://thoughtrivertest.netlify.com/

## Requirements

For development, you will only need Node.js and a node package manager such as Yarn.

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build

## TODO

- Check height of page and load required paragraphs to fill page
