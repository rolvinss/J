import React from 'react';

import './../../assets/css/LogStyle.css';

export default class Log extends React.Component{

    render(){
        return (
            <div>
                <div className="container">
                    <div className="col-md-4 col-lg-4 col-xs-12 col-sm-6 ">
                    <table class="table">
                        <tbody>
                                 <tr>                                    
                                    <td rowSpan="5">
                                    <div className="LogPic">
                                    <span><i className="fa fa-list-alt fa-5x" aria-hidden="true"></i></span>
                                    </div>
                                    </td>
                                    <td > <div className="LogTitle">NEET 2018 Mock Test</div></td>                                    
                                </tr>
                                <tr>
                                    <td><div className="LogDes">Mock test for Neet 2018 </div></td>
                                </tr>  
                                <tr>
                                    <td><div className="LogInst"> Acadlog India Pvt Ltd</div></td>
                                </tr>    
                                    
                                <tr>
                                    <td>    
                                            <div className="LogRating">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                </tr>                                    
                        </tbody>
                    </table>



                        <div className="row LogBox">
                            <div className="LogPic col-md-1 col-lg-1 col-xs-4 col-sm-2">
                            <span><i className="fa fa-list-alt fa-5x" aria-hidden="true"></i></span>
                            </div>
                            <div className="LogContent">
                                <div className="LogTitle">NEET 2018 Mock Test</div>
                                <div className="clearfix"></div>
                                <div className="LogDes">Mock test for Neet 2018 </div>
                                <div className="clearfix"></div>
                                
                                <div className="LogInst"> Acadlog India Pvt Ltd</div>
                                <div className="clearfix"></div>
                                
                                <div className="LogRating">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half" aria-hidden="true"></i>
                                </div>
                                <div className="LogPrice"></div>  
                            </div>
                        </div>
                        <div className="row pull-right">    
                            <button className="btn btn-danger">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    Add to Cart
                            </button>    <span>&nbsp;</span>                        
                            <button className="btn btn-primary">
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                         
            </div>
        );

    }
}
