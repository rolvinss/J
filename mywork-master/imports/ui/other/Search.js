import React from 'react';

export default class Search extends React.Component{
    render(){
        return (
            <div>
                <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <div id="imaginary_container"> 
                                    <div className="input-group stylish-input-group">
                                        <input type="text" className="form-control"  placeholder="Search" />
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                    <i className="fa fa-search" aria-hidden="true"></i>                                                        
                                            </button>  
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>          
        );
                    
    }
}

