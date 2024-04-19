# User Management Dashboard

This is a simple web application developed with Next.js where users can view, add, edit, and delete user details from a mock backend API provided by JSONPlaceholder.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges and Improvements](#challenges-and-improvements)

## Introduction

This project is developed as a demonstration of a User Management Dashboard using Next.js. It interacts with the JSONPlaceholder API to fetch and manipulate user data.

## Requirements

### User Interface:
- Displayed a list of users with details such as ID, First Name, Last Name, Email, and Department.
- Provided buttons or links to "Add", "Edit", and "Delete" users.
- A form to input details of a new user or edit details of an existing user.

### Backend Interaction:
- Used the JSONPlaceholder API, specifically the '/users' endpoint.

### Functionality:
- View: Displed all users by fetching data from the '/users' endpoint.
- Add: Allowed adding a new user by posting to the '/users' endpoint.
- Edit: Allowed editing an existing user.
- Delete: Allowed users to be deleted by sending a delete request to the API.

### Error Handling:
- Handled scenarios where the API request might fail and show an error message to the user.

### Bonus :
- Implemented pagination or infinite scrolling for the user list.
- Added client-side validation for the user input form.
- Created the interface responsive.

## Technologies Used

- Next.js
- React
- Axios (for HTTP requests)
- Tailwind CSS (for styling)
- Typescript
- Javascript

## Installation

1. Clone the repository: https://github.com/kunalborkar2001/Tacnique-Assessment


2. Navigate into the project directory: cd /Tacnique-Assessment


3. Install dependencies: npm install


## Usage

1. Run the development server: npm run dev


2. Open your browser and visit http://localhost:3000 to view the application.

## Challenges and Improvements

During the development process, I faced challenges with handling and managing state in React components. However, through research and experimentation, I was able to overcome these challenges and implement the required functionality.

If given more time, some improvements I would make include:

- Enhancing the user interface to make it more user-friendly and visually appealing.
- Optimizing the application for better performance, especially when dealing with a large number of users.
- Adding unit tests to ensure the reliability and stability of the codebase.

  
