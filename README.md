# E-Commerce Checkout Automation with Cypress

This project automates the checkout process for an e-commerce website using Cypress. The tests include navigating to the website, filling out forms, selecting products, and verifying order placements.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/zaman2489/eCommarceCheckoutForOrder.git
    ```

2. Navigate to the project directory:

    ```sh
    cd eCommarceCheckoutForOrder
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```
4. Running Tests:

    ```sh
    npm run test
    npm run headTest
    npm run chromeTest
    npm run SmokeTest
    ```
5. Folder Structure:

    ```sh
   cypress
│
├── fixtures
│   └── dataFile.json
│
├── integration
│   └── examples
│       ├── orderConfirmation.js
│       ├── formSubmission.js
│       └── orderConfirmation.js
│
├── plugins
│   └── index.js
├── report
│   └── index.html
│
├── support
│   ├── commands.js
│   ├── setup.js
│   └── pageObject
│       ├── homePage.js
│       ├── productPage.js
│       └── checkoutPage.js
│
└── cypress.config.js

    ```
6. Jenkins Pipeline:

    ```sh
    pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }
    }
}

    ```

