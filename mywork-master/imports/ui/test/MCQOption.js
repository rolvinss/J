import React from 'react';

const MCQOption = ( props ) => {
    return (
        <div>
                <div className="input-group my-1 ml-1 pr-2">
                <span className="input-group-addon">
                  <input
                  type="radio"
                  aria-label="Radio button for following text input" name="RadioTextInput"
                  ref="RadioTextInput"
                  onChange={this.change.bind(this)}
                  value="option1" />
                </span>
                 <span className="input-group-addon">Option 01</span>
                <input type="text" className="form-control" ref="RadioTextInputValue01" placeholder="Magnifera Indica"/>
              </div>

                <div className="input-group my-1 ml-1 pr-2">
                <span className="input-group-addon">
                <input
                type="radio"
                aria-label="Radio button for following text input" name="RadioTextInput"
                ref="RadioTextInput"
                onChange={this.change.bind(this)}
                value="option2" />
                </span>
               <span className="input-group-addon">Option 02</span>
                <input type="text" className="form-control" ref="RadioTextInputValue02" placeholder="Bos Indicus" />
              </div>

              <div className="input-group my-1 ml-1 pr-2">
              <span className="input-group-addon">n
              <input
              type="radio"
              aria-label="Radio button for following text input" name="RadioTextInput"
              ref="RadioTextInput"
              onChange={this.change.bind(this)}
              value="option3" />
              </span>
               <span className="input-group-addon">Option 03</span>
              <input type="text" className="form-control"  ref="RadioTextInputValue03" placeholder="Homo Sapians"/>
             </div>

             <div className="input-group my-1 ml-1 pr-2">
             <span className="input-group-addon">
             <input
             type="radio"
             aria-label="Radio button for following text input" name="RadioTextInput"
             ref="RadioTextInput"
             onChange={this.change.bind(this)}
             value="option4" />
             </span>
              <span className="input-group-addon">Option 04</span>
             <input type="text" className="form-control" ref="RadioTextInputValue04"  placeholder="Fellies Domestica"/>
             </div>

             <div className="input-group my-1 ml-1 pr-2">
             <span className="input-group-addon">
             <input
             type="radio"
             aria-label="Radio button for following text input" name="RadioTextInput"
             ref="RadioTextInput"
             onChange={this.change.bind(this)}
             value="option5" />
             </span>
              <span className="input-group-addon">Option 05</span>
             <input type="text" className="form-control" ref="RadioTextInputValue05" placeholder="None of these" />
             </div>
        </div>

    )
};

export default MCQOption;
