Konstruktor blog task

        The purpose of this application is to demonstrate my understanding of React by developing a simple Blog
        application, with 3 entities:
            Posts
            Users
            Comments
        Under Posts, a list of post previews is displayed. A full post view can be opened by clicking on "Read more".
        Posts can be edited, by either clicking on the Edit button in the post previews list or on the Edit button on
        the full post screen.

        There are two logins (I would never use such passwords for a real-world application, they are for testing
        purposes):

        Email: konstruktor.user@gmail.com Password: secretpassword
        Email: kalman.figler@gmail.com Password: qwe123qwe

        One of the posts can be edited by logging in with my email account, the other can be edited by logging in the
        other account (i.e.: by respective "authors"). Post lead, content and tags are the editable parts of a post. The
        lead and content will be validated against being empty. Tags can be empty.

        By clicking Log In in the upper-right corner, a login screen (modal) appears, in which user credentials (email
        and password) should be entered.


        Libraries
            react-bootstrap - Reasoning behind choice: Some familiarity with bootstrap vanilla library, popularity contest
            vs other commonly used libs that I used: https://www.npmtrends.com/react-bootstrap-vs-material-ui-vs-antdUI libs comparison
            react-router - I know it as the de facto library to handle routing in a React application
            redux, react-redux - It was stated in the task description to use it. The only alternative I ever took a look
            at was MobX. The other alternative I have heard of is Flux.
            formik - I use formik to be able to edit the post entity. Redux-forms was pretty popular, but right now it is
            not event recommended by its developer. React-final-forms is the new library of the developer, however Formik
            is mentioned by the official react documentation as well. Popularity contest: https://reactjs.org/docs/forms.html
            redux-thunk - To make it possible that action creators can return functions within which asyncronous
            operations can be made
            immer - To handle state changes immutably. Seemed much less of an overhead to use compared to ImmutableJS

        Where the application could be improved
            Guarding routes such as editing
            Better error handling
            Better handling of loading state
            Better data-fetching in components
            Proper user names instead of emails
