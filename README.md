# React Simple Search App

This is a simple auto-search feature inspired by Mac Cosmetics.

## Installing dependencies - Server Side

First, we'll need to install dependencies for the `/server` directory:

1. Go to the `server` directory. `cd server`
2. `npm install` to install all necessary dependencies.

## Installing dependencies - Client Side

Then you'll neeed to install `/client` directory dependencies:

1. Go to `/client` directory. `cd .. && cd client`
2. `yarn` to install all necessary dependencies.

## Starting the application

You'll notice that inside the `/server` dependencies, there is a package called [Concurrently](https://www.npmjs.com/package/concurrently). This package is useful for CORS applications, since it provides a unique terminal where you can run your server and client side simultaneously, having visibility from both sides of the application at one. That is why we needed to install both dependencies before starting. Now we have that:

1. If you're not already, go to the `/server` directory and run `npm run dev`. This will trigger the concurrently module and setup a terminal with both front and back applications running.

## About the stack

This project was developed by using Node.js, React.js and Styled Components.

- The server side uses [Morgan](https://www.npmjs.com/package/morgan), which is a HTTP request logger middleware that simplifies the process of logging requests to the application. This package is optional to install, but I believe it very helpful.

- I've been using Styled Components for a while now and the more I do, the more I like it. Being able to create styled components directly instead of using SASS or even CSS over HTML tags filled with classes and ids is cleaner and more effective. It also helps debugging styles better, make UI structures faster, focusing more on the outcome than the process itself, and the scoping mindset that it provides follows React's arquitecture directly.

- Given the size of this application I did not use any managing state library such as Redux or Context API. I decided to stick with `useState` hook in a functional component approach.

## Use cases

As a user, I want to:

- Be able to type in a product in the search bar and get a list of products according to my search.
- See the details and description of a specific product.

## To-do list

- Add more tests mocking the data.
- Add i18n to handle texts and possible translations.
