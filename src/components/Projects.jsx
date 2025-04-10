import React from "react";
import projects from "./Data/projects.js";

const Projects = () => {
  return (
    
      <div className="container projects " id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex   justify-content-center align-content-center">
          {projects.map((data) => (
            
              <div
                key={data.id}
                className="my-4  col-sm-1  col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark   text-light"
                  style={{
                    
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(19, 182, 241, 0.495)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    
  );
};

export default Projects;