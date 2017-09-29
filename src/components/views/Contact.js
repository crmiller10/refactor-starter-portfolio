import React, { Component } from 'react';

class Contact extends Component {

  render(){
    return(
      <div>
        <h1>Contact</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="mb-4">
              <h5 className="mb-3">Contact Details</h5>
              <ul>
                <li>3481 Melrose Place<br></br>Beverly Hills, CA 90210</li>
                <li className="mt-2">Phone: (123) 456-7890</li>
                <li className="mt-2">Email: name@example.com</li>
              </ul>
            </div>
            <form>
              <h5 className="mb-3">Get in touch</h5>
              <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Full Name"></input>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="email" placeholder="Email Address"></input>
              </div>
              <div className="form-group">
                <textarea rows="6" col="100" type="text" className="form-control" id="message" placeholder="Your message..."></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
