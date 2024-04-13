# Getting Started with create vite react-ts

This project was bootstrapped with Vite.
clone the project.

## Available Scripts

In the project directory, you can run:

### `yarn`

After cloning the project you should use this command in the root directory of project to install dependencies and create node_module directory.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Testing

In this application we have two parts

1. forms
2. carts to show data

We have two form with different data. If we submit each one of forms, we will see the form data in a cart as serialized JSON.

This state management system stores data as list of key-value object that value is implemented as a generic object.

In this application, the page is divided to different parts and component to show the accessibility of data.

This state management system has a hook named "useSharedSimpleState" that returns to property:

1. data:
   to retrieve data
2. storeDate({key, value}):
   to save data that takes key and value as argument.
