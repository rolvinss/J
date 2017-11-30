import React from 'react';

export default class AllTestType extends React.Component{
    render(){
        return (
            <div>
            <div className="container">
          <hr/>
            <div className="form-inline">
              <div className="pull-left">
                  <select className="form-control" >
                      <option>Subject</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Maths</option>
                    </select>
                    &nbsp;&nbsp;
                    <input type="text" className="form-control"  placeholder="Ex: Full_Length_Kinamatics"/>
                    &nbsp;&nbsp;
                   <button className="btn btn-primary">View </button>

              </div>
              <div className="pull-right">
                  <button className="btn btn-danger"> <i className="fa fa-plus" aria-hidden="true"></i>New Test</button>
               </div>
            </div>
            <div className="clearfix"></div>

          <hr/>
      </div>
                <div className="TableContent">
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

            </div>
        );

    }
}
