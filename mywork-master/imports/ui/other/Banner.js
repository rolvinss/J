import React from 'react';


export default class Banner extends React.Component{
    render(){
        return (
            <div>
                         {/* banner starting */}
                  <div className="container-fluid mr-auto float-left">
                  <div className="jumbotron">
                    <h2 className="text-center">Search For Classroom,Log or Mock Tests</h2>
                    <div className="input-group input-group-md">
                      <input type="text" placeholder="Search for..." className="form-control" />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button"><i className="fa fa-search fa-2x " /></button>
                      </span>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-center">
                      <div className="card col-3 mr-1">
                        <div className="card-block">
                          <h6 className="card-title">IBPS ClassRoom</h6>
                          <p className="card-subtitle">Bansal Classess</p>
                          <p className="card-text"> We provide all mock test for IBPS examintion</p>
                          <a href="#" className="btn btn-outline-primary btn-sm">Join</a>
                        </div>
                      </div>
                      <div className="card col-3 mr-1">
                        <div className="card-block">
                          <h6 className="card-title">IIT JEE </h6>
                          <p className="card-subtitle">Allen Coaching Insitittes</p>
                          <p className="card-text">  We provide all mock test for IBPS examintion</p>
                          <a href="#" className="btn btn-outline-primary btn-sm">Join</a>
                        </div>
                      </div><div className="card col-3">
                        <div className="card-block">
                          <h6 className="card-title">Doubt ClassRoom For JEE</h6>
                          <p className="card-subtitle">Punjabi Classes</p>
                          <p className="card-text">We provide all mock test for IBPS examintion</p>
                          <a href="#" className="btn btn-outline-primary btn-sm">Join</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    {/* banner Ending */}
            </div>
        );

    }
}
