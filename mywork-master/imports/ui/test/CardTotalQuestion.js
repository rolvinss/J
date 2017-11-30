import React from 'react';
import { NavLink,Link } from 'react-router-dom';


export default class CardTotalQuestion extends React.Component{
    render(){
        return (
          <div className="card mt-2">
            <div className="card-body my-2 text-center">
              <h5 >
               <i className="fa fa-list-alt fa-2x" aria-hidden="true"></i>
               &nbsp; Total Questions
               </h5>
               <div className="">
               <p>10</p>
               </div>

               <Link to="/createquestion" >
               <button type="submit" className="btn btn-primary my-3">
                <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;Add Question
                </button>
                </Link>
            </div>
          </div>
        );
    }
}
