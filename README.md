# Singlish to Sinhala Translator – Playwright Test Automation

## Module
ITPM

## Student
Name: H.M.V.Bhanuka
IT Number: IT23842076

## Assignment Description
This project contains automated functional, negative, and UI test cases for the SwiftTranslator
(Singlish to Sinhala Translator) web application using Playwright.

## Technologies Used
- Playwright
- JavaScript
- Node.js

## Test Coverage
- Positive functional test cases
- Negative test cases (robustness validation)
- UI behavior test
- Input validation and edge cases

## ▶️ Running the Tests

### Run all tests (headless mode)
```bash
npx playwright test
```

### Run tests with browser UI visible
```bash
npx playwright test --headed
```

### Run tests in interactive UI mode
```bash
npx playwright test --ui
```

### Run specific test file
```bash
npx playwright test tests/translator.spec.js
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Viewing Test Reports

After test execution, generate and view the HTML report:

```bash
npx playwright show-report
```
