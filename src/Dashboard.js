import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Dashboard.css';
// import './App.css';

const Home = () => {
  return (
    <div className="app">
      {/* <h2>This is home</h2> */}
      <Sidebar />, <Feed />, <Widgets />
    </div>
  )
}

export default Home