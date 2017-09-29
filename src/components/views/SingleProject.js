import React, {Component} from 'react';
import data from '../../data/data';

class SingleProject extends Component {
  render(){

    const rp = this.props.match.params.id;

    return(
      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid" src={data[rp].image} alt=""/>
        </div>
        <div className="col-md-4">
          <h2 className="mb-3">{data[rp].title}</h2>
          <p>{data[rp].description}</p>
          <p className="">Date Completed: <b className="ml-1">{data[rp].dateCompleted}</b></p>
          <a className="btn btn-success btn-lg mt-3" target="_blank" href={data[rp].github}>View on GitHub</a>
        </div>
      </div>
    )
  }
}

export default SingleProject;
