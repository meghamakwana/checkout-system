
## Checkout System

This project is a simple checkout system implemented in Node.js using TypeScript. It allows scanning of items and calculates the total price based on flexible pricing rules. The project includes unit tests to ensure the correctness of the implementation.

## Features

- Scan items in any order.

- Flexible pricing rules, including:

    3 for 2 deal on Apple TVs

    Bulk discount on Super iPads when more than 4 are purchased.

- Supports future updates to pricing rules with minimal changes.

## Project Structure
```bash
  checkout-system/
├── src/
│   ├── Checkout.ts         # Checkout logic implementation
│   ├── PricingRules.ts     # Pricing rules definitions
│   ├── index.ts            # Entry point for the application
│   └── __tests__/          # Unit tests for the application
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration for testing
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
└── .gitignore              # Files to be ignore on git
```
## Getting Started

### Prerequisites

- Node.js installed

- npm (Node Package Manager)

## Installation

Clone the repository:
```bash
git clone https://github.com/meghamakwana/checkout-system.git
cd checkout-system
```

## Install dependencies:
```bash
npm install
```

## Build the project:
```bash
npm run build
```

## Run the application:
```bash
npm start
```

## Running Tests
Run the unit tests to ensure everything is working correctly:
```bash
npm test
```