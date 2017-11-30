import React from 'react';

export default class CardTotalTestSeries extends React.Component{
    render(){
        return (
          <div className="card mt-2">
            <div className="card-body my-2 text-center">
              <h5 >
               <i className="fa fa-list-alt fa-2x" aria-hidden="true"></i>
               &nbsp; Total Mock Tests
               </h5>
               <div className="">
               <p>10</p>
               </div>

              <div className="d-flex flex-row justify-content-center">
              <button type="submit" className="btn btn-primary my-3"> <i class="fa fa-plus" aria-hidden="true"></i> &nbsp; Add Question</button>
              </div>
            </div>
          </div>
        );

    }
}
