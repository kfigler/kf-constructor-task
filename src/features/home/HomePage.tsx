import React from 'react';

export default function HomePage() {
  return (
    <div style={{ margin: 'auto', width: '50%' }}>
      <h1>Konstruktor Online Blog Task</h1>
      <p>
        The purpose of this application is to demonstrate my React knowledge by developing a simple Blog application,
        with 3 entities:
      </p>
      <ul>
        <li>Posts</li>
        <li>Users</li>
        <li>Comments</li>
      </ul>
      <p>...</p>
      <p>Libraries</p>
      <ul>
        <li>
          react-bootstrap - Reasoning behind choice: Some familiarity with bootstrap vanilla library, popularity contest
          vs other commonly used libs that I used:
          <a href="https://www.npmtrends.com/react-bootstrap-vs-material-ui-vs-antd"> NPM trends UI libs comparison</a>
        </li>
        <li>react-router - I know it as the de facto library to handle routing in a React application</li>
        <li>
          redux, react-redux - It was stated in the task description to use it. The only alternative I ever took a look
          at was MobX. The other alternative I have heard of is Flux.
        </li>
      </ul>
    </div>
  );
}
