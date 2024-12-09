# Documentation of RewardPay Coding Challenge Submitted By John Baishya

## Overview
This repository contains the solution submitted by John Baishya for the coding challenge provided by RewadPay. The project is a Node.js application written in TypeScript, following ES6 coding standards.
The primary functionality of this project is to calculate various account metrics using data from the data.json file, which is located in the root directory of the project.

In this document, I will explain the necessary steps to set it up and run it locally and the structure of the project.

## Procedure to setup the project in local machine
- Ensure you have Node.js installed (I used version v18.20.1). You can check your Node.js version by running:
  node -v 
- then clone this project to your local machine
- after that cd .. inside the project
- then execute the command "npm install" to install the required libraries to run the project.
- and finally to run the project execute command "npm run start" or "npm start"
- for running the project in dev mode. run the command "npm run dev"
- for running all the tests. run the command "npm test" or "npm run test"
  

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

