# Blog CMS

A CMS-style blog site for developers to publish articles, blog posts, and their thoughts and opinions.

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [License](#license)

## Description
Blog CMS is a content management system for creating and managing blog posts. It allows developers to sign up, log in, create, update, and delete posts, as well as leave comments on other users' posts. The application follows the MVC architecture and uses Handlebars.js for templating, Sequelize for ORM, and Express.js for server-side logic.

## User Story
As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

## Acceptance Criteria
- When visiting the site for the first time, the homepage includes existing blog posts, navigation links for the homepage and dashboard, and the option to log in.
- Clicking on the homepage option takes the user to the homepage.
- Clicking on other navigation links prompts the user to sign up or sign in.
- Signing up prompts the user to create a username and password, saves the user credentials, and logs them into the site.
- Signing in prompts the user to enter their username and password.
- When signed in, navigation links for the homepage, dashboard, and the option to log out are displayed.
- The homepage displays existing blog posts with the post title and date created.
- Clicking on an existing blog post displays the post title, contents, post creator’s username, and date created, and provides an option to leave a comment.
- Entering a comment and clicking the submit button saves the comment and updates the post to display the comment, the comment creator’s username, and the date created.
- The dashboard displays any blog posts created by the user and provides an option to add a new blog post.
- Adding a new blog post prompts the user to enter a title and contents, saves the post, and updates the dashboard.
- Clicking on an existing post in the dashboard allows the user to delete or update the post and updates the dashboard.
- Clicking on the logout option signs the user out of the site.
- The user is prompted to log in again after being idle on the site for a set time.

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- Sequelize
- MySQL
- JavaScript
- HTML
- CSS

## Installation
To install and run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/TristinRohr/blog-cms.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blog-cms
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your database credentials and session secret:
    ```
    DB_NAME='your-database-name'
    DB_USER='your-database-username'
    DB_PASSWORD='your-database-password'
    DB_HOST='your-database-host'
    DB_DIALECT='mysql'
    SECRET='your-session-secret'
    ```

5. Create the database and seed it with initial data:
    ```bash
    npm run seed
    ```

6. Start the server:
    ```bash
    npm start
    ```

7. Open your browser and navigate to `http://localhost:3001` to view the application.

## Usage
- Visit the deployed application: [Blog CMS on Render](https://blog-cms-bp6e.onrender.com/)
- Explore the homepage, sign up, log in, create posts, and leave comments.

## Links
- **Deployed Application:** [Blog CMS on Render](https://blog-cms-bp6e.onrender.com/)
- **GitHub Repository:** [TristinRohr/blog-cms](https://github.com/TristinRohr/blog-cms)

## License
This project is licensed under the MIT License.