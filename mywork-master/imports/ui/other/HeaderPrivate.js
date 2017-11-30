import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class HeaderPrivate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: ''
        };
    }

    onLogout(e){
        e.preventDefault();
        Accounts.logout();
    }

    render(){
            return (
                <div>
                              {/* headerPublic code starting*/}
                        <nav className="navbar navbar-light navbar-toggleable-md bg-faded fixed-top">
                            <div className="container">
                            <button className="navbar-toggler navbar-toggler-right" type="button" name="button" data-toggle="collapse" data-target="#navbarNav3">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <a className="navbar-brand" >
                                <i className="fa fa-pencil-square-o fa-2x"><span className="logo "> acadlog </span></i>
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNav3">
                                <ul className="nav justify-content-start ml-3 mr-auto">
                                <li className="nav-item">
                                    <div className="input-group mr-auto">
                                    <input type="text" placeholder="Search for..." className="form-control" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search" aria-hidden="true" />
                                        </button>
                                    </span>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNav3">
                                <ul className="nav justify-content-end ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link btn btn-secondary" >
                                    <i className="fa fa-graduation-cap" aria-hidden="true" />
                                    <sup>
                                        <span className="badge badge-default badge-pill ">10</span>
                                    </sup>
                                    Karma
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-secondary" >
                                    <i className="fa fa-home" aria-hidden="true" />
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-secondary" >
                                    <i className="fa fa-bell" aria-hidden="true" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle btn btn-secondary"  id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-cog" aria-hidden="true" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown02">
                                    <a className="dropdown-item" > <i className="fa fa-ellipsis-h  fa-rotate-90" aria-hidden="true" /> Edit Profile</a>
                                    <a className="dropdown-item" > <i className="fa fa-desktop" aria-hidden="true" /> &nbsp;Edit Log</a>
                                    <a className="dropdown-item" > <i className="fa fa-phone" aria-hidden="true" />&nbsp; Customer Care</a>
                                    </div>
                                </li>
                                <li className="nav-item">

                                    <button className="nav-link btn btn-secondary"  onClick={this.onLogout.bind(this)}>
                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                    Logout
                                    </button>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
      {/* headerPublic code ending */}

                </div>
            );

        }
    }
