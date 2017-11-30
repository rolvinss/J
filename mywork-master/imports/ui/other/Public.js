import React from 'react';


import Banner from './Banner';
import HeaderPublic from './HeaderPublic';
import Footer from './Footer';
import SignupForm from './SignupForm';


export default class Public extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <div className="container-fluid">
                            <HeaderPublic/>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Banner/>
                        </div>
                        <div className="col-4">
                            <SignupForm/>
                        </div>
                    </div>
                </div>

            </div>

        );

    }
}
