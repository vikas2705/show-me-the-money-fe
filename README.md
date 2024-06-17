Dear team,

Thanks a lot for giving me this opportunity to take up the challenge and be a part of this process.
Please find some information below to help you understand what are the features that I have developed, how have I designed the project and why have I made certain choices.

For easy walkthrough, I will divide the points in these major categories.

-   Functional specifications
-   Non Functional specifications
-   Code Structure
-   Tech choices
-   Unit tests
-   Further Improvements which could be done later

Apart from developing the features, I have also paid attention to :-

-   Best practices and clean code (used TSLint, Prettier)
-   Standard files and folder structure
-   Using Typescript
-   Code readability and maintainability
-   Decent UI/UX and styling
-   Error handling

# How to run the code locally?

-   Please take a clone of the main branch of this repo on your local system
-   Run 'npm install' in your terminal
-   Run 'npm run dev' to start the server
-   The app should start running on localhost:3000 by default

The app is also deployed at https://main--show-me-the-money-vikas.netlify.app/

# Functional details (that I have implemented)

-   [x] Created a simple single-page application using the json coming from Xero service
-   [x] Created a UI to show the balance sheet as per the received json

# Non Functional specifications (that I have implemented)

-   Tested on different browsers(Chrome, Safari, Firefox, Edge) and OS (Mac, Windows) to ensure it is working fine
-   Performance : Tried to improve performance of the application from multiple aspects to ensure unnecessary re-rendering is not done
-   Used TypeScript to define component props and function types
-   Use of functional components and React Hooks
-   Clean code: Tried to write a clean and indented code (which follows Prettier code formatting)

# Code Structure

Inside the src folder, created a folders for all the common code that could be shared and reused across multiple components:-

-   common folder has separate folders for all assets, components, constants, services etc.
-   any component folder to have a separate sub-folder for tests of the associated components
-   any component folder to have a css file for its styling

# Tech choices

-   Used ReactJS to complete the problem statement. Main advantage: the component based architecture in React is amazing to create a large scale single page application.
-   Used TypeScript to ensure the components are predicatable, robust and error proof
-   Used functional components
-   Used Axios library to make API calls over JS fetch function as Axios has multiple advantages of intercepting and aborting calls over fetch.
-   Used plain css currently but in scalable applications, i would rather prefer using TailwindCSS for styling with react: Tailwind is an amazing CSS library which is easy to customize, highly adapting and results a tiny CSS build file which only consists of the CSS that we are actually using rather than the complete styles.


# Unit tests

Due to time constraints, I could not write unit test cases. However, below are some cases which I would test in the application

-   Mock the data list API to get valid mock data
-   Check that the route of the application is / by default
-   Check that the route of the application changes on clicking on different pages in the side navigation
-   Check that each navigation opens the correct page
-   Check that without selecting range filter, it is showing all data
-   Check that after selecting both start date and end date, it is showing correct Total clicks
-   Check that after selecting both start date and end date, it is showing correct Total Impressions
-   Check that after selecting both start date and end date, it is showing correct Line Chart


# Error handling

-   Wrapped any network call posibility within Try/catch blocks
-   We could also add an Error Boundary Component to make sure that the App never breaks in case (shows blank page) of errors/bugs and users have a good user experience

# Security

-   Currently no user input in being displayed on screen. Going forward, if we have to would sanitise all user input to avoid XSS attacks


# Further Improvements/Changes which could be done later
-   Improve device responsiveness for mobile phones and tablet devices
-   Improve security using authentication/authorization

## Final words

I had a good experience working on this assessment. The steps were well-documented that made them pretty much self-explanatory. Even though the problem statement looked simple initially, the beauty of it was that it was very open-ended to parse the JSON response from server and then take time to understand how can it be implemented. This gives developers the opportunity to show their own creativity and skills and create and amazing product.

Also, I sincerely appreciate your patience throughout the process.
Looking forward to the feedback.
