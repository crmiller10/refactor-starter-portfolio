import React, { Component } from 'react';

class Resume extends Component {

  render(){
    return(
      <div className="resume">
        <h1>Resume</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="section">
              <h2 id="experience">Experience</h2>

              <h5><strong>Ui / Ux Designer</strong>  - NetEngine - 2015</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

              <h5><strong>Web Designer</strong> - Mywork Australia - 2014</h5>
              <p>A deserunt neque tempore recusandae animi soluta quasi.  Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

              <h5><strong>Design Intern</strong> - MNET Mobile - 2014</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>

              <h5><strong>Camera Operator</strong> - M3 Media - 2013</h5>
              <p>Camera Operator at easterfest on the main stage of the eftv set.  Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>

              <h5><strong>Designer</strong> - Brisbane Lions AFL Club - 2011</h5>
              <p>Manipulating product images for the web store.  Omnis et enim aperiam inventore, similique necessitatibus neque non.  Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            </div>
            <div className="section">
              <h2>Education</h2>

              <h5><strong>Computer Science</strong> - 2014</h5>
              <p>Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.  Omnis et enim aperiam inventore, similique necessitatibus neque non.</p>

              <h5><strong>Certificate IV in IT</strong> - 2012 - 2013</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non. Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className="section">
              <h2>Skills</h2>
              <p>Sketch, Photoshop, Illustrator, CSS, HTML, SASS, InDesign, Premiere, After Effects.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
