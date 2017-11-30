import React from 'react';

export default class QuestionContent extends React.Component{
    render(){
        return (
            <div>
                <div className="form-group">
                  <label><h5>Enter Question </h5> </label>
                  <textarea className="form-control" rows="8" id="comment" ref="QuestionContent" placeholder="what is the scitefic name of mango."></textarea>
                </div>
            </div>
        );
    }
}
