Django Rest Framework + React = ❤ (FRONTEND)

As the internet becomes bigger and applications become more complex, the "simple" front end we all know and love is slowly dying. It still works well for certain types of websites, but the user (and the developers) are getting more and more accustomed to a more complex, but more extendable, way of building things.

The purpose of this project is to build a React front end that interfaces with a Django Rest Framework back end running on the same machine.

The GhostPost Machine™ is a website where people can anonymously post Boasts or Roasts of whatever they want. Like Twitter, there is a character limit: 280 characters. We are deliberately not dealing with logins, as that is outside the scope of the project (and beyond our time constraints).

 

Your Task
Build a front end Single Page Application (SPA) using React (Links to an external site.)Links to an external site..

Front End:

Homepage that displays boasts and roasts
buttons to filter the content by either boasts or roasts
upvote and downvote buttons for each boast and roast
ability to sort content based on number of votes
page to submit a boast or a roast
Note: Try to make your React app as simple as possible. We don't need `react-redux` or `react-router` to accomplish our task. Once you get the basic functionality, feel free to extend it if you so desire. The focus of this assessment is not the frontend. We just need one to display the data.

Resources:

Basic DRF + React tutorials

https://fractalideas.com/blog/making-react-and-django-play-well-together-single-page-app-model/ (Links to an external site.)Links to an external site. 
https://wsvincent.com/django-rest-framework-react-tutorial/ (Links to an external site.)Links to an external site.
  Note: You will not need to worry about the CSRF tokens we use with standard Django.

React Tools

https://github.com/facebook/create-react-app (Links to an external site.)Links to an external site.
https://raygun.com/blog/react-debugging-guide/ (Links to an external site.)Links to an external site.
 

Extra credit (3 points):

Add a DELETE method that works for both boasts and roasts. "Wait, how will we delete if it's anonymous?", I hear you ask. When a boast or a roast is created, it should have a random 6 character string associated with it (so that it's hard to guess). If that string is sent in a URL with the DELETE method to the boast or roast endpoints, then it should delete the object. For example, if boast 2 has the "magic string" of "abcdef", then you would use a GET call on localhost:8000/api/posts/2 and a DELETE call against localhost:8000/api/posts/abcdef.
When the object is created, the magic string should be passed back to the front end and given to the user; something like "If you want to delete your post, click this link!". One option to look into is using window.alert() (Links to an external site.)Links to an external site.


REACT DEFAULT SCRIPTS:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
