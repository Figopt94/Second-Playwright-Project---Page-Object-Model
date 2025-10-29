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
npm test
```

Run tests with UI mode (interactive):
```bash
npm run test:ui
```

Run tests with browser UI visible:
```bash
npm run test:headed
```

Run specific browser tests:
```bash
npm run test:chromium
npm run test:firefox  
npm run test:webkit
```

Run specific test file:
```bash
npx playwright test tests/login.spec.js
```

Debug tests:
```bash
npm run test:debug
```

Install browsers:
```bash
npm run install:browsers
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
- **GitHub Actions CI/CD**: Automated testing on push/pull requests with cross-platform support

## GitHub Actions

This project includes several modern GitHub Actions workflows (updated October 2025):

### 1. Main Playwright Tests (`playwright.yml`)
- Triggers on push/pull requests to main/master branch
- Uses Node.js 20 with npm caching for faster builds
- Runs all tests on Ubuntu with all browsers
- Uploads test reports with unique names and compression

### 2. Cross-Platform Tests (`cross-platform.yml`)
- Runs tests across Ubuntu, Windows, and macOS
- Tests each browser independently (Chromium, Firefox, WebKit)
- Uses `fail-fast: false` to continue testing other combinations if one fails
- Provides comprehensive compatibility testing

### 3. Nightly Tests (`nightly.yml`)
- Scheduled to run daily at 2 AM UTC
- Can be manually triggered via workflow_dispatch
- Runs with increased retry attempts for stability
- Creates test summaries in GitHub Actions interface

### 4. Security and Dependency Check (`security.yml`)
- Runs dependency review on pull requests
- Performs npm audit checks for vulnerabilities
- Scheduled weekly security scans
- Checks for outdated dependencies

### Latest Features (2025):
- **Node.js 20** for optimal performance
- **npm caching** for faster CI builds
- **Unique artifact names** to prevent conflicts
- **Compression** for smaller artifact storage
- **Enhanced security** with dependency reviews
- **Better error handling** with `!cancelled()` conditions
- **Job summaries** for better visibility

### Viewing CI Results
- Test reports are uploaded as artifacts in GitHub Actions
- Download artifacts from the Actions tab to view detailed HTML reports
- Failed tests include screenshots and traces for debugging