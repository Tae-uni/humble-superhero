# Humble Superhero API

This project is an API that allows users to manage superheroes with a humility scores.

## Table of Contents
  - [👨‍💻 Assignment Requirements](#-assignment-requirements)
  - [🗂️ Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
  - [📑 API Documentation](#-api-documentation)
  - [🧪 Running Tests (Jest)](#-running-tests-jest)
  - [🤝 Team Collaboration](#-team-collaboration)
  - [⏳ If I Had More Time](#-if-i-had-more-time)

## 👨‍💻 Assignment Requirements

### 🌟 Core Features Implemented:
- **POST /superheroes** : Add a new superhero required(name, superpower, and humility score)
- **GET /superheroes** : Fetch the list of superheroes sorted by humility score(descending order).
- **In-memory storage** : Superheroes are temporarily stored in an array.

### ➕ Additional Enhancements:
- **Humility score validation** : Ensures values are between 1 and 10 using Zod.
- **Jest API Test**: Includes test cases for GET /superheroes using Jest. 
- **Duplicate name check** : Prevents adding superheroes with the same name.
- **Swagger API documentation** : For better clarity and easier to work with team.

For Full API details, please check:  **http://localhost:3000/api-docs**

## 🗂️ Project Structure

The project is divided into the two main parts:  
- **backend**: The Express.js server handling API logic.  
- **frontend** (Optional): If time allows, a React frontend to interact with the API.

## 🚀 Getting Started

Open two terminals  

### Backend Setup
```sh
cd backend
npm install
npm run dev
```
Runs the Express API on `http://localhost:3000`

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

Runs the React on `https://localhost:5173`  
***Make sure the backend is running.***

Now, open `http://localhost:5173` to see the app!

## 📑 API Documentation
Once the server is running, you can access the API docs:  

```sh  
http://localhost:3000/api-docs
```  

## 🧪 Running Tests (Jest)
Includes `Jest tests` to validate API.  
To run the test, running the server first,

```sh
  npm run dev
  npm test
```

The GET /superheroes endpoint is tested to ensure.

## 🤝 Team Collaboration
If this project expanded with a team,  

- Clear API Documentation: Maintain the Swagger documentation actively so all team members can easily work together.
- Pull Request based Code Reviews: Team members review code for readability, logic, performance, etc.
- Pair Programming: Regularly switch the codes to improve code quality and problem-solving speed.
- Commit Strategy: Git commit Convention for clear history like `git cz`.

### ⏳ If I Had More Time
I would consider adding those enhancements:

- Persistent Database: Instead of in-memory storage, using real database like **MongoDB** or **PostgreSQL**.
- CI/CD Integration: Setting up a GitHub Actions pipeline to automate on every push.
- Authentication: Implement JWT-based authentication to enhance security.
- Update & Delete function: Implement basic update and delete function.
- Sorting & Filtering: Extend the simple sorting to custom sorting or filtering options.
- Improve the React interface for better user experience.