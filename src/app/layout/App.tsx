import React from 'react';
import './styles.css';
import HomePage from '../../features/home/HomePage';
import { Route } from 'react-router-dom';
import Posts from '../../features/blog/Posts';
import Navigationbar from '../../features/navigation/Navigationbar';
import Post from '../../features/blog/Post';

function App() {
  return (
    <>
      <Navigationbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
    </>
  );
}

export default App;
