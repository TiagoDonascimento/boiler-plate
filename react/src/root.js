import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Profile from './components/Profile';
import MyStories from './components/MyStories';
import NewStory from './components/NewStory';
import PageTransition from 'react-router-page-transition';
import StoryListContainer from  './containers/StoryListContainer';




class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={MyStories} />
          <Route path="/MyStories" component={MyStories}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/NewStory" component={NewStory}/>
          <Route path="/this"/>
          <Route path="/StoryListContainer" component={StoryListContainer}/>

        </Route>
      </Router>
    )
  }
}

export default Root;