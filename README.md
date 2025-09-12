# Surge Automation Framework

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
4. [Running Tests](#running-tests)
5. [Test Structure](#test-structure)
6. [Helpers](#helpers)
7. [Utils](#utils)
8. [Pages](#pages)
9. [Data Files](#data-files)
10. [Configuration](#configuration)
11. [Makefile](#makefile)
12. [Scripts](#scripts)

## Introduction

The Surge Automation Framework is built using Playwright for end-to-end testing. It includes tests for user registration, group creation, and validation of various functionalities across different user hubs (Admin, Expert, and User).

## Project Structure

```
.gitignore
data/
	# Contains JSON files for credentials and payloads
helpers/
	# Contains helper classes and scripts
Makefile
package.json
pages/
	# Contains page object classes for different hubs
playwright-report/
	# Contains test reports
playwright.config.ts
pnpm-lock.yaml
test-results/
	# Contains test result files
tests/
	# Contains test specification files
```

## Setup and Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```

## Running Tests

To run the tests, use the following command:

```sh
pnpm test
```

To generate and upload the test report, use the following command:

```sh
make report
```

## Test Structure

The `tests/` folder contains test spec files for different functionalities.

## Helpers

The `helpers/` folder contains helper classes and scripts to support the tests.

## Utils

The `utils/` folder contains utility classes supports for logs etc.

## Pages

The Page Object Model (POM) is used to create an abstraction layer for the UI elements. This helps in reducing code duplication and improves test maintenance. Each page class contains methods to interact with the page elements and perform actions.

## Data Files

The `data/` folder contains test data stored in the form of JSON files and others.

## Configuration

### `playwright.config.ts`

Contains the Playwright configuration, including test directory, parallel execution settings, and reporter configuration.

## Makefile

The `Makefile` contains targets for running tests and generating reports:

- **`test`**: Runs the tests.
- **`report`**: Uploads the test report to S3 and sends an email notification.

## Scripts

### `helpers/send_email_ses.sh`

A script to send emails using AWS SES.

### `helpers/upload_to_s3.sh`

A script to upload test reports to an S3 bucket.

## Conclusion

This documentation provides an overview of the Surge Automation Framework, including its structure, setup, and usage. For more detailed information, refer to the individual files and their contents.
