import React from 'react';

export default function HomePage() {
  return (
    <div style={{ margin: 'auto', width: '50%' }}>
      <h1>Konstruktor blog task</h1>
      <p>
        The purpose of this application is to demonstrate my understanding of React by developing a simple Blog
        application, with 3 entities:
      </p>
      <ul>
        <li>Posts</li>
        <li>Users</li>
        <li>Comments</li>
      </ul>
      <p>
        Under Posts, a list of post previews is displayed. A full post view can be opened by clicking on "Read more".
        Posts can be edited, by either clicking on the Edit button in the post previews list or on the Edit button on
        the full post screen.
        <br />
        There are two logins (I would never use such passwords for a real-world application, they are for testing
        purposes):
      </p>
      <ul>
        <li>Email: konstruktor.user@gmail.com Password: secretpassword</li>
        <li>Email: kalman.figler@gmail.com Password: qwe123qwe</li>
      </ul>
      <p>
        One of the posts can be edited by logging in with my email account, the other can be edited by logging in the
        other account (i.e.: by respective "authors"). Post lead, content and tags are the editable parts of a post. The
        lead and content will be validated against being empty. Tags can be empty.
      </p>
      <p>
        By clicking Log In in the upper-right corner, a login screen (modal) appears, in which user credentials (email
        and password) should be entered.
      </p>
      <p>
        <strong>Libraries</strong>
      </p>
      <ul>
        <li>
          react-bootstrap - Reasoning behind choice: Some familiarity with bootstrap vanilla library, popularity contest
          vs other commonly used libs that I used:{' '}
          <a href="https://www.npmtrends.com/react-bootstrap-vs-material-ui-vs-antd">UI libs comparison</a>
        </li>
        <li>react-router - I know it as the de facto library to handle routing in a React application</li>
        <li>
          redux, react-redux - It was stated in the task description to use it. The only alternative I ever took a look
          at was MobX. The other alternative I have heard of is Flux.
        </li>
        <li>
          formik - I use formik to be able to edit the post entity. Redux-forms was pretty popular, but right now it is
          not event recommended by its developer. React-final-forms is the new library of the developer, however Formik
          is mentioned by the official react documentation as well. Popularity contest:{' '}
          <a href="https://reactjs.org/docs/forms.html">Form libraries comparison</a>
        </li>
        <li>
          redux-thunk - To make it possible that action creators can return functions within which asyncronous
          operations can be made
        </li>
        <li>
          immer - To handle state changes immutably. Seemed much less of an overhead to use compared to ImmutableJS
        </li>
      </ul>
      <p>
        <strong>Where the application could be improved</strong>
      </p>
      <ul>
        <li>Guarding routes such as editing</li>
        <li>Better error handling</li>
        <li>Better handling of loading state</li>
        <li>Better data-fetching in components</li>
        <li>Proper user names instead of emails</li>
      </ul>
    </div>
  );
}
