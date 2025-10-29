# Playwright Page Object Model Project

This project demonstrates automated testing using Playwright with the Page Object Model (POM) design pattern.

## Project Structure

```
├── pom/                    # Page Object Model classes
│   ├── GoogleMaps.js      # Google Maps page object
│   ├── LoginPage.js       # Login page object
│   └── RegisterPage.js    # Register page object
├── tests/                 # Test specifications
│   ├── googlemaps.spec.js # Google Maps tests
│   ├── login.spec.js      # Login tests
│   └── register.spec.js   # Register tests
├── playwright.config.js   # Playwright configuration
└── package.json          # Project dependencies
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

Run specific test file:
```bash
npx playwright test tests/login.spec.js
```

## View Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Features

- **Page Object Model**: Clean separation of test logic and page interactions
- **Multiple Test Scenarios**: Login, Registration, and Google Maps functionality
- **Playwright Configuration**: Optimized settings for reliable test execution
- **HTML Reports**: Detailed test execution reports with screenshots and traces