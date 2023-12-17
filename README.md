# Group 5
## Members
Tiffanie Ku, Joseph Hauter, Kevin Feng, Alvin Chan

## Summary of the Project 
"Woof Woof" is a dogsitter website where users can look for a dogsitter to hire or become on themselves. Users will be able to view a list of job listings, but when they log in, they can view their dashboard and create posts that show up in the job listings.

## Completed Work
The website has the following features completed: 
- functioning server, database, and app
- homepage
- navbar
- jobs listing page: displays posts each containing a title, location, description, image, and username of the poster. 
- login page + functioning login and user authentication 
- signup page
- dashboard: features the user's username and email. 
- create post page
- sign out

## Uncompleted Work
None.
However, there are many more features we would like to add in the future such as editing user's bio in dashboard, adding a comment section and "like" button for the posts in the job listings, communication between users, etc. 

## Reference and Research
- https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57 
- https://dev.to/salarc123/mern-stack-authentication-tutorial-part-2-the-frontend-gen 
- https://www.youtube.com/watch?v=jfZyqZycjmA&t=12s 

General websites: 
- Stack Overflow
- W3Schools

# Getting Started with Create React App
## Configuring the Database
This application uses MongoDB to store data. You need to provide your own MongoDB connection string to connect to your database.

This project uses environment variables to keep sensitive information like connection strings secure. Follow these steps to add your own environment variables:

1. In the `server` directory, create a new file and name it `.env`.
2. Open the `.env` file in a text editor.
3. Replace `YOUR_CONNECTION_STRING` with your connection string to your database

Here's an example of what your `.env` file might look like:

```plaintext
DB_URI=YOUR_CONNECTION_STRING

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
