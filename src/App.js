import React, {Component } from 'react'
import Navbar from './Components/Navbar'
import Logo from './Components/Logo'
import NewsComponent from './Components/NewsComponent'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='#007FFF'
        progress={this.state.progress}
      />
      <Logo/>
       <Navbar/>
        <Routes>
        <Route  exact path="/" element={<NewsComponent setProgress={this.setProgress}  apikey={this.apikey} country="in" key="home" category="general"/>}/>
        <Route  exact path="/business"  element={<NewsComponent setProgress={this.setProgress}  apikey={this.apikey} country="in" category="business" key="business"/>} />
        <Route  exact path="/science"  element={<NewsComponent setProgress={this.setProgress} key="science"  apikey={this.apikey} country="in"category="science" />} />
        <Route  exact path="/sports"  element={<NewsComponent setProgress={this.setProgress} key="sports"  apikey={this.apikey} country="in" category="sports"  />} />
        <Route  exact path="/health"  element={<NewsComponent setProgress={this.setProgress}  key="health" apikey={this.apikey} country="in" category="health" />} />
        <Route  exact path="/technology"  element={<NewsComponent setProgress={this.setProgress}  key="technology"  apikey={this.apikey} country="in" category="technology"/>} />
        <Route  exact path="/entertainment"  element={<NewsComponent setProgress={this.setProgress} key="entertainment"  apikey={this.apikey} country="in" category="entertainment"/>} />
        </Routes>
       </Router>
        </>
    )
  }
}

