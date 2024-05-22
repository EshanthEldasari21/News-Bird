import React, { Component } from 'react'
import { Link } from 'react-router-dom'


 export class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
         loading: false
        }
    }
    
  render() {
    return (
        <>
       
        {this.state.loading || <div className='footer bg-dark'>
        <center>
        <h4 className=' bird py-3'><img className="im" src="bird-2-128.png" alt="" width={20}
        height={20}
        /> <i>News Bird</i> </h4>
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
        </>
    )
  }
}

export default Footer
