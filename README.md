# Tempo Sticky Notes - React TS App

## Setup

### Requirements

- [NPM + Node](https://nodejs.org/en/download)
- [NVM](https://nodejs.org/en/download/package-manager/all#nvm)

### Run Locally

1. Clone the repo and navigate to its root
2. Run `nvm use`
3. Run `npm install`
4. Run `npm start`

## Documentation

You can find the following under the `/docs` folder:

- [Default Vite Readme](/docs/VITE-README.md)
- [Instructions from Tempo](/docs/INSTRUCTIONS.md)
- [Working Dev Notes for prioritization](/docs/DEV-NOTES.md)

## Progress

As you can see from building and running locally, I've managed to implement the drag-and-release to create multiple new sticky notes as well as drag-and-drop to move existing stickies on the page. Unfortunately with kids home (their last week before school starts) and a mid-day appointment, I was only able to get this far within roughly 4-5 hours.

During my limited time, I chose to focus on the app structure, including folders and data inheritence (via Context), accurate typing (see the `/src/types.ts` file), and extracting interactions into custom hooks. This did not leave time for the full feature completion, but I wanted to offer a range of aspects for the team to review. Architecturally, the app aims to retain a single source of truth within the context while using the Board and Sticky components to update the context via each's custom hook(s). This keeps components focused on rendering view logic, rather than bogging them down with interactions, state updates, and business logic.

Given more time or a smaller scope, the app would include keyboard handling (as mouse dragging is not keyboard friendly), unit testing (likely via Jest + React Testing Library), and a toolbar/menu approach for specifying the colour and other options while creating each new sticky.

Thank you!

Stephen Belyea.
