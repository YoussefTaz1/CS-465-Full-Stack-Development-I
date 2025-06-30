# CS-465-Full-Stack-Development-I
TAZI-travlr getaways

-Journal: Portfolio-

-	Architecture
  
   In my full stack project, I used two different types of frontend development: one with Express using Handlebars for server-side rendering, and another with Angular as a single-page application (SPA) for the admin side. The Express HTML pages were great for showing dynamic content on the public-facing side, but the Angular SPA made the admin experience much more interactive without needing to reload the page. I liked how Angular organizes everything into components, and it helped me keep my code clean and modular.
For the backend, I used a NoSQL MongoDB database. I think this was the right choice because it stores data in a JSON-like format, which worked well with the trip data I was handling. It also made it easier to connect to my Node.js backend using Mongoose.

-	Functionality
  
   JSON was a key part of this project. Even though it is different from JavaScript (JSON is just a data format), it helped my frontend and backend talk to each other. For example, when I submitted a new trip in the Angular form, that data was sent to the backend as JSON, then saved to the database.
I also refactored my code at different stages. One example was creating reusable components in Angular, like the trip card component. This saved me time and made the app easier to update. Using services for the data also helped separate logic from the UI, which made things more organized and efficient.

-	Testing
  
   To test the backend API endpoints, I used Postman a lot. I tested GET, POST, and PUT requests, especially once I added security. After logging in, I had to include the JWT in the Authorization header when testing protected endpoints like adding or editing trips. I also used the browser developer tools to check how the Angular forms were working and to track errors in real time. I learned how important it is to test with and without authentication to make sure everything behaves as expected.

-	Reflection
  
   This course helped me a lot in building confidence as a full stack developer. I feel like I have gained real-world experience by going through every stage of development, from setting up the environment to building the front and back ends, creating a SPA, and securing the app. I have developed skills in JavaScript, Express, MongoDB, Angular, and RESTful APIs. Now I feel more prepared to apply for software engineering jobs and show employers that I can build and secure a full stack web application from scratch.
