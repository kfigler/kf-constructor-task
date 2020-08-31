import React from 'react';
import './styles.css';
import HomePage from '../../features/home/HomePage';
import { Route, Switch } from 'react-router-dom';
import Posts from '../../features/blog/Posts';
import Navigationbar from '../../features/navigation/Navigationbar';
import Post from '../../features/blog/Post';
import PostForm from '../../features/blog/PostForm';
import ModalManager from '../common/modal/ModalManager';

function App() {
  return (
    <>
      <ModalManager />
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/edit/:id" component={PostForm} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </>
  );
}

export default App;
