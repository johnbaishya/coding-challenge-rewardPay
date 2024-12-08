# Documentation of RewardPay Coding Challenge Submitted By John Baishya

## Overview
This repository contains the solution submitted by John Baishya for the coding challenge provided by RewadPay. The project is a Node.js application written in TypeScript, following ES6 coding standards.
The primary functionality of this project is to calculate various account metrics using data from the data.json file, which is located in the root directory of the project.

In this document, I will explain the structure of the project and provide the necessary steps to set it up and run it locally.

## Project Structure
- src
 - libs
    - accountMetricCalculation.ts
  - services
    - accountMetricServices.ts
  - tests
    - accountMetricCalculation.test.ts
    - accountMetricServices.test.ts
    - formatUtils.test.ts
  - types
    - account.ts
    - index.ts
    - mainData.ts
  - utils
    - formatUtils.ts
  - app.ts
- data.json
- index.ts
- package.json
- tsconfig.json

### src
TThe src directory contains all the source code for the project. It is organized into the following subdirectories and files:

#### libs
This directory contains the core business logic and calculations related to the project, such as account metrics computation.

#### services
This directory handles the project-specific services. It doesn't perform complex calculations directly; instead, it depends on functions from the libs directory to process data and provide final outputs. The functions in this directory call the core logic from libs and pass the processed results to app.ts.

#### tests
The tests directory includes unit tests written to ensure the correctness of the functions within the project

#### utils
This directory contains utility functions that perform repetitive tasks, such as formatting numbers into currency figures or converting numbers into percentages.

#### app.ts 
This file is the entry point of the project's main functionality, where the core tasks of the project are executed.

### data.json
This file contains various account data provided for the project. It is used as input for performing the account metrics calculations.

### index.ts
This file serves as the entry point for the project. It imports the runProject function from app.ts and executes it.

### package.json
This file contains the Node.js configuration for the project, including dependencies, scripts, and project metadata.

### tsconfig.json
This file contains the TypeScript configuration for the project.

## Procedure to setup the project in local machine
- Ensure you have Node.js installed (I used version v18.20.1). You can check your Node.js version by running:
  node -v 
- then clone this project to your local machine
- after that cd .. inside the project
- then execute the command "npm install" to install the required libraries to run the project.
- and finally to run the project execute command "npm run start" or "npm start"
- for running the project in dev mode. run the command "npm run dev" or "npm dev"
- for running all the tests. run the command "npm test" or "npm run test"
  


# RewardPay Coding Challenge

## Overview

This repo contains the instructions and the data you need to complete the _RewardPay coding challenge_.  This challenge is not intended to be complex, but it is an opportunity for you to showcase your understanding and applying of good development practices.

You are encouraged to treat this as a real-life project.  This typically means:

- Use version control effectively
- Include some basic documentation
- Include some unit tests
- Adhere to a naming convention

Please use JavaScript of TypeScript to complete this challenge.

## The Challenge

You are tasked with developing an application that performs the following tasks in sequence:

- Read and parse an external data file `data.json` (located in this repo)
- Using this data, calculate and print the values of 5 common accounting metrics:
  1. Revenue
  2. Expenses
  3. Gross Profit Margin
  4. Net Profit Margin
  5. Working Capital Ratio
- Commit your changes, and upload all your work to a feature branch of your choice.

## Instructions

- Begin by _forking_ the current repository to your own `github.com` account
- Clone the repo locally
- Write your code, _commit often_
- Once you are satisfied with the output, push your changes to your `github.com` account
- Share the link

## Calculations

Use the formulas below to calculate your values:

### Revenue

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `revenue`

### Expenses

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `expense`

### Gross Profit Margin

This is calculated in two steps: first by adding all the `total_value` fields where the `account_type` is set to `sales` and the `value_type` is set to `debit`; then dividing that by the `revenue` value calculated earlier to generate a percentage value.

### Net Profit Margin

This metric is calculated by subtracting the `expenses` value from the `revenue` value and dividing the remainder by `revenue` to calculate a percentage.

### Working Capital Ratio

This is calculated dividing the `assets` by the `liabilities` creating a percentage value where `assets` are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `debit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`
- subtracting the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `credit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`

and liabilities are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `credit`, and the `account_type` is one of `current` or `current_accounts_payable`
- subtracting the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `debit`, and the `account_type` is one `current` or `current_accounts_payable`

## Formatting

All currency figures must be formatted as follows:
- The value is prefixed with a `$` sign
- A comma is used to separate every 3 digits in the thousands, millions, billions, and trillions
- Cents are removed

All percentage values must be formatted to one decimal digit and be prefixed with a `%` sign.  Don't forget to multiply by 100 each time you're tasked with calculating a percentage value.

## Example

Below is what a typical output should look like.  Please note this is *not* the output of the challenge but a mere example.

```
$ ./myChallenge
Revenue: $519,169
Expenses: $411,664
Gross Profit Margin: 22%
Net Profit Margin: 21%
Working Capital Ratio: 95%
```

# Dependencies

If your program requires a special way to compile or a specific version of a toolset, please be sure to include that in your running instructions.

__Thank you and good luck!__
