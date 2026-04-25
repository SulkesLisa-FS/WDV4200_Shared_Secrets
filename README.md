# DEMO PURPOSE ONLY

### Secure Application Development

Node Secrets Assignment: Scenario 2 - Shared secret all files on the repository <br>
April 25, 2026 <br>
This app is a **Code Secret Demo - Using Fake Secrets.**

# Scenario 2 — Shared Secret all files on the Repository

This repository demonstrates storing secrets in a **`.env` file that is
committed to the repository**.

This is better than hard-coding secrets in the code, but it is still **bad practice** because everyone who
clones the repo automatically gets the secrets.

The app loads the following secrets from `.env`:

- `NODE_ENV=development`
- `API_KEY=FAKE_SHARED_SECRET_IN_ENV_FILE`

The `.env` file is intentionally **not** listed in `.gitignore`, so it is
pushed to GitHub along with the rest of the files.

## How to run this application:

### Requirements

- Node.js latest

Once you cd into the application root directory follow these steps:

1.  Create the `.env` file for environment variables

    touch .env

2.  Add the environment variable and secret key

    # Shared secrets - for demo only
    NODE_ENV=development
    API_KEY=FAKE_SHARED_SECRET_IN_ENV_FILE

3.  Install Dependencies

        npm install

4.  Run the simple server application

        node app.js

5.  TEST In the browser

    `http://127.0.0.1:3000`  


<br>

## Outcomes:

1. The terminal should display the secret variables and their values.

```bash
    NODE_ENV: development
    API_KEY : FAKE_SHARED_SECRET_IN_ENV_FILE
```

2. The browser will display the secret variables and application files.

```browser

    Environment: development
    API Key    : FAKE_SHARED_SECRET_IN_ENV_FILE
    -----------------------------
    Files in directory:
    - .env
    - .git
    - .gitignore
    - README.md
    - app.js
    - node_modules
    - package-lock.json
    - package.json

```


