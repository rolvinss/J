import React from 'react';
import { Link } from 'react-router-dom';

import HeaderPrivate from './HeaderPrivate';

export default class PageNotFound extends React.Component{
    render(){
        return (
            <div>
               <div className="container-fluid">
                <HeaderPrivate/>
                </div>
                <div className="container-fluid row justify-content-center">
                    <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                            <h3 className="display-3 text-center"> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>Page Not Found</h3>
                            <p className="lead text-center mx-auto">Something went wrong.Please retry after sometime.If the problem persist contact to <Link to="#">Customer Care</Link> </p>
                            </div>
                    </div>
                </div>
            </div>

        );

    }
}
