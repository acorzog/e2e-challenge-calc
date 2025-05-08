# Calculator App with Playwright Tests

This is a JavaScript calculator app, with a full suite of end-to-end tests using Playwright

---
## Prerequisites

- **Node.js** (v22.14 or later) - Download from nodejs.org or use nvm
  `nvm install 22.14`
  `nvm use 22.14`

---

## Installation

### Clone the repository:

```bash
git clone https://github.com/acorzog/e2e-challenge-calc.git
```

---

### Install dependencies:

```bash
npm install
```

### Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the App

```bash
npm run dev
```

---

## Running Tests (Playwright)

Open a new terminal while the app is running

### Run all tests

```bash
npm run test
```

### UI mode (debug visually each test)

```bash
npm run test:open
```

### Headed mode (debug visually)

```bash
npm run test:headed
```

### Specific browsers

Chromium

```bash
npm run test:chrome
```

Firefox

```bash
npm run test:firefox
```

### HTML test report after running

This opens Playwright’s built-in HTML report.

```bash
npm run test:report
```
<br>

---

# Testing Results & Strategy

<br>
The application contains several intentionally inserted bugs (as confirmed). I’ve commented out some assertions to avoid overwhelming failures during execution, but I’ve left key failing validations in place to demonstrate that the tests correctly identify defects.

I’ve implemented two different test strategies, both using the Page Object Model, to showcase flexibility and good testing practices:

1. **Data-Driven Tests**  
   Used for features like `add`, `subtract`, `multiply`, `divide`, and `mixed-operations`. These tests validate consistent logic (e.g., arithmetic) using a tabular format of inputs and expected outputs. This makes it easy to expand or replace values without rewriting test logic.

2. **Explicit Step-by-Step Tests**  
   Applied to `clear`, `percent`, and `plus-minus` features. These tests involve more detailed behaviors, where each test case represents a meaningful variation or side effect. The step-by-step approach offers clarity for debugging and helps document expected workflows more precisely.
<br>
---
<br>
> Note: During development and documentation, I used AI tools such as ChatGPT to assist with test design strategies, and improving the clarity of explanations. (e.g, in this instructions file for easy reading and formatting). 
<br>
All test suggestions were reviewed and integrated based on my understanding of the challenge requirements. All implementation and architecture are based on my knowledge and expertise to implement tests for this app.
