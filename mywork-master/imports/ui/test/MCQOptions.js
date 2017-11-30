import React from 'react';


export default class MCQOptions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: '',
      selectedOption: '',
      selectedValue: '',
    }
      }


  change(e){
    let RadioTextInput01= this.refs.RadioTextInput01.checked;
    let RadioTextInput02= this.refs.RadioTextInput02.checked;
    let RadioTextInput03= this.refs.RadioTextInput03.checked;
    let RadioTextInput04= this.refs.RadioTextInput04.checked;
    let RadioTextInput05= this.refs.RadioTextInput05.checked;

    let RadioTextInputValue01 = this.refs.RadioTextInputValue01.value.trim();
    let RadioTextInputValue02 = this.refs.RadioTextInputValue02.value.trim();
    let RadioTextInputValue03 = this.refs.RadioTextInputValue03.value.trim();
    let RadioTextInputValue04 = this.refs.RadioTextInputValue04.value.trim();
    let RadioTextInputValue05 = this.refs.RadioTextInputValue05.value.trim();



    let Options = {RadioTextInput01, RadioTextInput02, RadioTextInput03, RadioTextInput04, RadioTextInput05, RadioTextInputValue01,  RadioTextInputValue02, RadioTextInputValue03, RadioTextInputValue04, RadioTextInputValue05};

    this.props.changed(Options);


    /*const val = e.target.value;
    if( val==="option1" ) {
      this.setState({
        selectedOption: val,
        selectedValue: this.refs.RadioTextInputValue01.value.trim(),
        },function(){
          console.log(this.state.selectedOption);
          console.log(this.state.selectedValue);
           } )
    } else if( val==="option2" ) {
      this.setState({
        selectedOption: val,
        selectedValue: this.refs.RadioTextInputValue02.value.trim(),
        },function(){
          console.log(this.state.selectedOption);
          console.log(this.state.selectedValue);
           } );
    } else if( val==="option3" ) {
      this.setState({
        selectedOption: val,
        selectedValue: this.refs.RadioTextInputValue03.value.trim(),
        },function(){
          console.log(this.state.selectedOption);
          console.log(this.state.selectedValue);
           } );
    }   else if( val==="option4" ) {
      this.setState({
        selectedOption: val,
        selectedValue: this.refs.RadioTextInputValue04.value.trim(),
        },function(){
          console.log(this.state.selectedOption);
          console.log(this.state.selectedValue);
           } );
    }  else if( val==="option5" ) {
      this.setState({
        selectedOption: val,
        selectedValue: this.refs.RadioTextInputValue05.value.trim(),
        },function(){
          console.log(this.state.selectedOption);
          console.log(this.state.selectedValue);
           } );
    } else{
      console.log('dasdas')

    }
    console.log(props.Question.QuestionSubject);*/

  }
   render(){
     return (
       <div>
               <div className="input-group my-1 ml-1 pr-2">
               <span className="input-group-addon">
                 <input
                 type="radio"
                 aria-label="Radio button for following text input" name="RadioTextInput"
                 ref="RadioTextInput01"
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
               ref="RadioTextInput02"
               onChange={this.change.bind(this)}
               value="option2" />
               </span>
              <span className="input-group-addon">Option 02</span>
               <input type="text" className="form-control" ref="RadioTextInputValue02" placeholder="Bos Indicus" />
             </div>
             <div className="input-group my-1 ml-1 pr-2">
             <span className="input-group-addon">
             <input
             type="radio"
             aria-label="Radio button for following text input" name="RadioTextInput"
             ref="RadioTextInput03"
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
            ref="RadioTextInput04"
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
            ref="RadioTextInput05"
            onChange={this.change.bind(this)}
            value="option5" />
            </span>
             <span className="input-group-addon">Option 05</span>
            <input type="text" className="form-control" ref="RadioTextInputValue05" placeholder="None of these" />
            </div>
       </div>
      );
   }

    };
