## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
6. [Instructions](#instructions)
6. [Playwright](#playwright-testing-results-and-strategy)

---

## Prerequisites

- **Node.js** (v22.14 or later) - Download from nodejs.org or use nvm
  `nvm install 22.14`
  `nvm use 22.14`

---

## Installation

1. **Clone** this repository (or download the source).
2. **Install dependencies**:

   `npm install`


---

## Running the App

1. **Serve** the app locally:

   `vite` or `npm run dev`
   
   It will compile and run the React app on **<http://localhost:5173/>** by default.

2. **Open** your browser at <http://localhost:5173/>.


---

## Instructions

1. Add a playwright testing suite to the project

2. Add some end-to-end tests in a way you believe is most efficient.

3. Creating a Page Object Model (POM) to assist your tests if you want to, this is not mandatory.

4. Avoid modifying the application’s source files directly, if possible.
5. Using any type of AI is permitted and encouraged

---

## Submitting Your Test

After completing the challenge, please follow these steps to submit your work for evaluation:

1. Create a new **private repository** on GitHub.
2. Add a new readme or edit this one with the instructions about how to run your tests
3. Add the following GitHub user as a collaborator so we can access and review your solution:
`gabrielbs`, `hugodom`

---

**Happy Testing!**

# Playwright Testing Results and Strategy

The application contains several intentionally inserted bugs (as confirmed). I’ve commented out some assertions to avoid overwhelming failures during execution, but I’ve left key failing validations in place to demonstrate that the tests correctly identify defects.
I’ve implemented two different test strategies, both using the Page Object Model, to showcase flexibility and good testing practices:

Data-Driven Tests
Used for features like add, subtract, multiply, divide, and mixed-operations. These tests validate consistent logic (e.g., arithmetic) using a tabular format of inputs and expected outputs. This makes it easy to expand or replace values without rewriting test logic.

Explicit Step-by-Step Tests
Applied to clear, percent, and plus-minus features. These tests involve more detailed behaviors, where each test case represents a meaningful variation or side effect. The step-by-step approach offers clarity for debugging and helps document expected workflows more precisely.


> Note: During development and documentation, I used AI tools such as ChatGPT to assist with test design strategies, and improving the clarity of explanations. (e.g, in this instructions file for easy reading and formatting).
All test suggestions were reviewed and integrated based on my understanding of the challenge requirements. All implementation and architecture are based on my knowledge and expertise to implement tests for this app.

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
