import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Loading from './components/Loading';
// import PropTypes from 'prop-types';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {

  pageSize=20;


  state={
    progress:0
  }

  setProgress= (progress)=>{

    this.setState({progress: progress})
  }
  render() {
    return (

        <Router>
      <div>

        <Navbar/>

        <LoadingBar

        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />


        <Routes>
        <Route path="/" element= {<News setProgress={this.setProgress} key="/" pageSize={this.pageSize}  country="us"  category="general"/>}/>  
        <Route path="/Sports" element= {<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize}  country="us"  category="sports"/>}/>
        <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize}  country="us"  category="entertainment"/>}/>
        <Route path="/Business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize}  country="us"  category="business"/>}/>
        <Route path="/General" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize}  country="us"  category="general"/>}/>
        <Route path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize}  country="us"  category="science"/>}/>
        <Route path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize}  country="us"  category="technology"/>}/>
        <Route path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize}  country="us"  category="health"/>}/>

      </Routes>


        
        

        


        
      </div>
      </Router>

    )
  }
}


