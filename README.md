# Workout Buddy

Welcome to Workout Buddy, a personal workout management application built using the MERN stack. This application allows users to manage their workouts by providing functionalities such as login, signup, adding, and deleting workouts. Each user can only see the workouts they have added, ensuring a personalized workout experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Login:** Users can log in to their accounts to access their personalized workout plans.
- **Signup:** New users can create an account to start managing their workouts.
- **Logout:** Users can log out of their accounts securely.
- **Add Workout:** Users can add new workouts to their personal workout list.
- **Delete Workout:** Users can delete workouts from their personal workout list.
- **Personalized Workouts:** Each user can only see the workouts they have added.

## Technologies Used

- **MongoDB:** Database to store user information and workouts.
- **Express.js:** Server framework for handling API requests.
- **React.js:** Frontend library for building user interfaces.
- **Node.js:** Backend runtime environment for executing JavaScript code.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adityap340/WorkoutBuddy.git
   cd WorkoutBuddy
   ```

2. **Install server dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the server:**
   ```bash
   cd backend
   npm start
   ```

6. **Start the client:**
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

1. **Sign Up:**
   - Go to the signup page.
   - Fill in your details and create an account.

2. **Log In:**
   - Go to the login page.
   - Enter your credentials to log in.

3. **Add Workout:**
   - After logging in, you can add new workouts and view any existing workouts you have previously added.
   - Fill in the workout details and submit.

5. **Delete Workout:**
   - In the "Home" page, select the workout you want to delete and confirm.

6. **Log Out:**
   - Click on the logout button to securely log out of your account.


If you have any questions or feedback, please feel free to reach out.