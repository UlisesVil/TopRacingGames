# Top Racing Games (MEAN stack project).

This fully Responsive application is available on the web, built-in Angular on the Frontend, and communicates with a Node JS REST API, deployed on Heroku on the backend, and the database comes from Mongo DB Atlas.

On the Main page, we use the Scroll to control the video forwards and backward.

This application uses the JSON Web Token library to manage user sessions, their data, and the encryption of their passwords to save them in the database.

The button to send data of the forms is not activated unless the data are complete and that the password field is the same as the confirmed password. It is the same when we create a new article for a game.

This application recognizes the difference between a user and an administrator. When logging in as an administrator, the ADD GAME option is activated, which will allow adding a new article.

The options edit and delete article will be activated for an administrator too.

If the delete option is selected, it will ask for confirmation.

When adding a new article, the upload image button will change to the name of the image selected to indicate that the image is ready.

When editing an article, if the user wants to change the image, the user will preview the current and the new one.

The users can Register and log in, which will allow them to make comments if they wish in any of the articles of this application. The user can also edit or delete comments he has made previously.

If the users want to comment in the game detail section and have not logged in, clicking on the comment section, a Modal will pop up to log in, and now the comment section is activated.

The comments are sorted, from the most recent order to the oldest.

If the users want to edit or delete one of their comments, they must log in to activate this function then clicking on edit will open a modal to do so, and if they want to delete it, it will ask for confirmation.

The Games section loads the articles (Projects) saved in the database and sent from the backend showing its image, title, and type of vehicle that uses the game.

When the user selects a game, it shows us the complete information related to it, extracted from the backend, and the comments that users made about this game showing them at the bottom of the page.

In the Gallery section, the BxSlider library will display images related to the game in this application.


