# Movie-Directotry

## Overview

This project is a full-stack application with a **back-end** built using Django (Python) and a **front-end** built using React (JavaScript). It follows a 3-tier architecture with a clear separation of concerns, providing a scalable and maintainable codebase.

## Project Structure
project-root/
│
├── back-end/
│ ├── demo/
│ ├── tutorial/
│ ├── venv/ # Python virtual environment
│ ├── .gitignore
│ ├── db.sqlite3 # SQLite database (for local development)
│ └── manage.py # Django management script
│
├── front-end/
│ ├── node_modules/ # Node.js dependencies
│ ├── public/ # Public assets (HTML, images, etc.)
│ ├── src/ # React source code
│ ├── .gitignore
│ ├── package-lock.json # Lockfile for Node.js dependencies
│ └── package.json # Project manifest for Node.js
│
├── 3 Tier AWS Architecture.pdf # Deployment architecture diagram
└── README.md # Project documentation


## Prerequisites

- **Python 3.x** (for back-end)
- **Node.js & npm** (for front-end)
- **Django**: `pip install django` 
- **React**: Follow the instructions in `package.json` using `npm install`

## Setup Instructions

### Back-End

1. **Set up virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Run the server**:
    ```bash
    python3 manage.py runserver
    ```

4. **Access the backend** at `http://localhost:8000`

### Front-End

1. **Install dependencies**:
    ```bash
    cd front-end
    npm install
    ```

2. **Run the development server**:
    ```bash
    npm run start
    ```

3. **Access the frontend** at `http://localhost:3000`

## Deployment

The 3-tier AWS architecture of the application 
is also discussed along in the diagram   **3-tier AWS architecture**
