# Neo Blocker

A website blocker for minimalist and focusers. Made as a chrome extension

## Contributor

1. Zexi Zhang: Responsible for all component implementations and chrome API invokations.
2. Luke: Give useful suggestions to Zexi.

## Tech Stack

1. **React:** Dashboard page UI framework
2. **SCSS:** Used as replacement for CSS, more reusable and cleaner

## Main Idea

Use React to build dashboard for the extension. In dashboard page, users can block websites or whitelist websites given URL. These URLs and extra info would be stored in chrome.storage. Whenever the user tries to open a new webpage, it would check if the url is blocked by user. If yes, the extension would close the tab and update counter in chrome.storage.

## Advantage

1. Light weight, all UI components are written in pure react and css, no UI framework is used
2. Clear, all UI components have a purpose
