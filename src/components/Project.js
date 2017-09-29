import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Starbar from './Starbar/Starbar';

class Project extends Component {

// handleButtonClick(){
//   window.location.href = this.props.github
// }

  render(){
     let cardMargin = {
      marginBottom: "60px",
    }

    return(
      <div className="col-sm-6">
        <div className="card" style={cardMargin}>
          <Link className="" to={"/projects/"+this.props.id}>
            <img className="card-img-top img-fluid" src={this.props.image} alt="" />
          </Link>
          <div className="card-body">
            <h4 className="card-title"><Link className="" to={"/projects/"+this.props.id}>{this.props.title}</Link></h4>
            <p className="card-text text-muted">{this.props.description}</p>
          </div>
          <div className="card-footer clearfix">
            <div className="float-left">
              <Starbar />
            </div>
            {/*<button className="btn btn-success float-right" onClick={() => this.handleButtonClick()}>View Project</button>*/}
            <Link className="btn btn-success float-right" to={"/projects/"+this.props.id}>View Project</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

