import React from 'react';

import CardTotalTest from './CardTotalTest';
import CardTotalQuestion from './CardTotalQuestion';

export default class TestDashboard extends React.Component{

  render(){
    return(
      <div>
      <div className="card">
        <div className="card-header">
          <h4>
            Mock Test and Question Bank Dashboard
          </h4>
        </div>
        <div className="card-body">
        <div className="row">
              <div className="col-6">
              <CardTotalTest />
              </div>
              <div className="col-6">
              <CardTotalQuestion />
              </div>
        </div>
        </div>
      </div>
      </div>

    );

  }
}
