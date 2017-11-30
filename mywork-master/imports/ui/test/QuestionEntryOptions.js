import React from 'react';

export default class QuestionEntryOptions extends React.Component{
    render(){
        return (
            <div>
                <div className="container text-center col-md-2">
                  <hr>
                      <div className="form-group">
                          <label for="exampleInputEmail1"> Select Subject</label>
                                <select className="form-control" >
                                      <option>Select Subject</option>
                                      <option>Physics</option>
                                      <option>Chemistry</option>
                                      <option>Maths</option>
                              </select>
                             <br>
                             <label for="exampleInputEmail1"> Select Topic</label>
                             <select className="form-control" >
                                   <option>Select Subject</option>
                                   <option>Topic 2</option>
                                   <option>Topic 3</option>
                                   <option>Topic 4</option>
                           </select>
                            <br>
                              <label for="exampleInputEmail1"> Select Question Type</label>
                              <select className="form-control" >
                                  <option>Question Type</option>
                                  <option>Type 1</option>
                                  <option>Type 2</option>
                                  <option>Type 3</option>
                              </select>
                            <br>
                                <label for="exampleInputEmail1">Select Language</label>
                                  <select className="form-control" >
                                      <option>English</option>
                                      <option>Hindi</option>
                                  </select>
                              <br>

                              <input type="text" className="form-control col-sm-1 col-md-1" placeholder="Enter a Tag(s).">
                              <br> <br>
                              <br> <br>
                              <div className="container-fluid">
                                    <div className="input-group">
                                        <input type="text" className="form-control"     placeholder="Search for...">
                                          <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">Add Tag</button>
                                        </span>
                                    </div>
                              </div>

                              <button className="btn btn-danger">Submit</button>
                      </div>
                  <hr>
                </div>
            </div>
        );

    }
}
