## Coin Ticket Dashboard

This is a Coin Ticket Dashboard that fetches cryptocurrency data from an API and displays it in a paginated table format with basic navigation controls. Built with React and @tanstack/react-query, it displays live data on various cryptocurrencies and their prices, using react-loading-skeleton to indicate loading states.

## Features
Pagination: Allows users to navigate through multiple pages of data.
Dynamic Fetching: Uses @tanstack/react-query to fetch and cache data.
Responsive Design: Adjusts display for both desktop, tablets and mobile views.
Loading Skeleton: Shows loading placeholders while data fetches.

## Prerequisites
Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (version 18+)
- [yarn](https://yarn.io/)
- [Git](https://git-scm.com/)
In the project directory, you can run:

## Technologies
-React.js: Framework for server-rendered React applications.
-TypeScript: JavaScript with static typing.
-Tailwind: CSS pre-processor for styling.
-Tanstack Query: For fetching a list of coin prices.

## Testing

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests to ensure the reliability of UI components and data fetching logic.


## Getting Started

Follow these steps to set up and run the project on your local environment:

### Step 1: Clone the Repository

Clone the project repository and navigate to the project directory:

```terminal
git clone https://github.com/tolubishops0/norebase.git
cd norebase
```

### **Step 2: Install Dependencies**

Install the necessary project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### **Step 3: Start the Development Server**

Run the development server to start the application locally:

```bash
npm run start
# or
yarn run start
# or
pnpm start
```

### Running Tests

To run the tests, execute the following command:
```bash
npm test
# or
yarn test
# or
pnpm test

## Live Preview 
[Link](https://tolu-norebase.netlify.app/)