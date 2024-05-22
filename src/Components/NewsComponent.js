import NewsItems from "./NewsItems";
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

export default class NewsComponent extends Component {
  static defaultProps={
    country: 'in',
    pageSize:8,
    category:'general'
  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  captial =(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
    constructor(props){
      super(props);
      this.state={
       articles:[],
       loading: false,
       page:1
      }
      document.title=`${this.captial(this.props.category)} -News Bird`;
    }
    async updateNews(){
      this.props.setProgress(10);
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}`
      this.setState({loading: true})
      let Data= await fetch(url);
      this.props.setProgress(40);
      let parsedData=await Data.json()
      this.props.setProgress(75);
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,loading: false})
      this.props.setProgress(100);
    }
    async componentDidMount(){
      this.updateNews();
    }

 
  render() {
    const date= new Date()
    const fullDate= new Intl.DateTimeFormat("en-us",{
       dateStyle:"full"
   }) 
    return (
         <div className="newscomp">
          <pre className='one'><h6>{fullDate.format(date)}</h6>
         <h6>            | TODAY'S PAPER</h6>
         </pre>
          <h4 className=" latest mx-3 px-3 py-3 align-self-end" >Top <i className="news">Stories</i></h4>
          <br/>
          {this.state.loading && <Spinner/>}
          {this.state.loading ||<h5 className="cat">{this.captial(this.props.category)}</h5>}
        
        <center>
        <div className="row mx-3 ">
        {this.state.articles.map((e)=>{
            return <div className="col-md-4 my-3" key={e.url}>
            <NewsItems title={e.title?e.title:""} description={e.description?e.description.slice(0,100) + "..":"" } src= {e.urlToImage} url={e.url}/>
            </div>
        })} 
       
      </div>
      </center>
      <br/>
      <br/>
      
      {this.state.loading || <div className='footer bg-dark'>
        <center>
        <h4 className=' bird py-3'><a className="footerhome" href="/"><img className="im" src="bird-2-128.png" alt="" width={20}
        height={20}
        /> <i>News Bird</i></a></h4>
        </center>
        <div className='categories d-flex align-items-center justify-content-center'>
        <h6><Link className='li' to="/business">Business</Link></h6>
        <h6><Link className='li' to="/science">Science</Link></h6>
        <h6> <Link className='li' to="/sports">Sports</Link></h6>
        <h6><Link className='li' to="/health">Health</Link></h6>
        <h6><Link className='li' to="/tech">Tech</Link></h6>
        <h6><Link className='li' to="/health">Entertainment</Link></h6>
        </div>
        <br/>
        <center>
        <p className='copy'>Copyright © 2023 News Bird [P] Ltd. All Rights Reserved</p>
        </center>
        </div>}
      </div>
    )
  }
}


