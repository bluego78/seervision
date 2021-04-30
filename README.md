# Getting Started with the app

The app is totally working, it calls a node.js service to get/set data of the todo list, you can find the [service code here](https://github.com/bluego78/seervision-backend-node).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), you just have to clone the repository on your local folder and then run:

### `npm install`
### `npm start`

## IMPORTANT: to avoid CORS Blocking the async calls to the service, please open the app in your broser disabling CORS.
Example for Chrome on Windows launch from START->RUN this command: 
chrome.exe --disable-web-security --disable-gpu --user-data-dir=C:\tmp

# To test the app

Please run:
### `npm test`

# What will you find in the app

The folders structure:

- public (where you can find the index.html file)
- src (the main directory, where you can find every component)
    
    Let's go deeply into src folder:
    
    - components (all the react components are here)
    - stores (here is the REDUX store, the reducer and the actions)
    - helpers (I use to put here files with common functionalities, fetchers, tools, etc..)
    - interfaces (here are all the Interfaces I've implemented to give a type to the objects)
    - scss (yes the scss are here)
    - tests (some test i wrote)
    
- .env file (contains some environment variables: in this case only the URL of the node service)
- .tsconfig.json (configuration for typescript)
- other files: .gitignore, package.json package-lock.json

# Some notes about the development process

 - I choose to use REDUX to manage the state between components, but i wuold use the useState hook too, I've chosen REDUX justo to show you some skills.

 - I used bootstrap  only for the icons and I've wrote all the other SCSS.

# Hope you'll enjoy, let me know!
