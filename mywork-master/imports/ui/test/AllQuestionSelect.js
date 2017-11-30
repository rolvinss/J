import React from 'react';

export default class AllQuestionSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: '',
      Question: [],
      QuestionMC: [
      {  Subject: '',
         Topic: '',
         Type: '',
         Language: '',
         Tag: '',
         Content: '',
         Option1: [{Content: '',Answer: false}],
         Option2: [{Content: '',Answer: false}],
         Option3: [{Content: '',Answer: false}],
         Option4: [{Content: '',Answer: false}],
         Option5: [{Content: '',Answer: false}],
         Explanation: '',
         Marks: '',
         NegativeMarks: '',
         DifficultyLevel: '',
      }
      ],
      QuestionTF: [
      {  Subject: '',
         Topic: '',
         Type: '',
         Language: '',
         Tag: '',
         Content: '',
         Option1: [{Content: '',Answer: false}],
         Option2: [{Content: '',Answer: false}],
         Explanation: '',
         Marks: '',
         NegativeMarks: '',
         DifficultyLevel: '',
      }
      ],
      QuestionMR: [
      {  Subject: '',
         Topic: '',
         Type: '',
         Language: '',
         Tag: '',
         Content: '',
         Option1: [{Content: '',Answer: false}],
         Option2: [{Content: '',Answer: false}],
         Option3: [{Content: '',Answer: false}],
         Option4: [{Content: '',Answer: false}],
         Option5: [{Content: '',Answer: false}],
         Explanation: '',
         Marks: '',
         NegativeMarks: '',
         DifficultyLevel: '',
      }
      ],
      QuestionFB: [
      {  Subject: '',
         Topic: '',
         Type: '',
         Language: '',
         Tag: '',
         Content: '',
         Answer: '',
         Explanation: '',
         Marks: '',
         NegativeMarks: '',
         DifficultyLevel: '',
      }
      ],
    }
      }
  onSubmitQuestionMR(e){
    e.preventDefault();
  let   Subject = this.refs.QuestionSubject.value.trim();
  let   Topic = this.refs.QuestionTopic.value.trim();
  let   Type = this.refs.QuestionType.value.trim();
  let   Language = this.refs.QuestionLanguage.value.trim();
  let   Tag = this.refs.QuestionTag.value.trim();

  let   Content = this.refs.QuestionContent.value.trim();
  let   CheckboxTextInput01 = this.refs.CheckboxTextInput01.checked;
  let   CheckboxTextInput02 = this.refs.CheckboxTextInput02.checked;
  let   CheckboxTextInput03 = this.refs.CheckboxTextInput03.checked;
  let   CheckboxTextInput04 = this.refs.CheckboxTextInput04.checked;
  let   CheckboxTextInput05 = this.refs.CheckboxTextInput05.checked;
  let   CheckboxTextInputValue01 = this.refs.CheckboxTextInputValue01.value.trim();
  let   CheckboxTextInputValue02 = this.refs.CheckboxTextInputValue02.value.trim();
  let   CheckboxTextInputValue03 = this.refs.CheckboxTextInputValue03.value.trim();
  let   CheckboxTextInputValue04 = this.refs.CheckboxTextInputValue04.value.trim();
  let   CheckboxTextInputValue05 = this.refs.CheckboxTextInputValue05.value.trim();
  let   Explanation = this.refs.QuestionExplanation.value.trim();
  let   Marks = this.refs.QuestionMarks.value.trim();
  let   NegativeMarks = this.refs.QuestionNegativeMarks.value.trim();
  let   QuestionLevel = this.refs.QuestionLevel.value.trim();

  this.setState({
    QuestionMR: [
    {  Subject: Subject,
       Topic: Topic,
       Type: Type,
       Language: Language,
       Tag: Tag,
       Content: Content,
       Option1: [{Content: CheckboxTextInputValue01, Answer: CheckboxTextInput01 }],
       Option2: [{Content: CheckboxTextInputValue02, Answer: CheckboxTextInput02 }],
       Option3: [{Content: CheckboxTextInputValue03, Answer: CheckboxTextInput03 }],
       Option4: [{Content: CheckboxTextInputValue04, Answer: CheckboxTextInput04 }],
       Option5: [{Content: CheckboxTextInputValue05, Answer: CheckboxTextInput05 }],
       Explanation: Explanation,
       Marks: Marks,
       NegativeMarks: NegativeMarks,
       DifficultyLevel: QuestionLevel,
    }
    ],
    },
    function(){
      console.log(this.state.QuestionMR);
    }
    );
  }
  onSubmitQuestionTF(e){
    e.preventDefault();
  let   Subject = this.refs.QuestionSubject.value.trim();
  let   Topic = this.refs.QuestionTopic.value.trim();
  let   Type = this.refs.QuestionType.value.trim();
  let   Language = this.refs.QuestionLanguage.value.trim();
  let   Tag = this.refs.QuestionTag.value.trim();

  let   Content = this.refs.QuestionContent.value.trim();
  let   RadioTextInput01 = this.refs.RadioTextInput01.checked;
  let   RadioTextInput02 = this.refs.RadioTextInput02.checked;
  let   RadioTextInputValue01 = this.refs.RadioTextInputValue01.value.trim();
  let   RadioTextInputValue02 = this.refs.RadioTextInputValue02.value.trim();
  let   Explanation = this.refs.QuestionExplanation.value.trim();
  let   Marks = this.refs.QuestionMarks.value.trim();
  let   NegativeMarks = this.refs.QuestionNegativeMarks.value.trim();
  let   QuestionLevel = this.refs.QuestionLevel.value.trim();

  this.setState({
    QuestionTF: [
    {  Subject: Subject,
       Topic: Topic,
       Type: Type,
       Language: Language,
       Tag: Tag,
       Content: Content,
       Option1: [{Content: RadioTextInputValue01, Answer: RadioTextInput01 }],
       Option2: [{Content: RadioTextInputValue02, Answer: RadioTextInput02 }],
       Explanation: Explanation,
       Marks: Marks,
       NegativeMarks: NegativeMarks,
       DifficultyLevel: QuestionLevel,
    }
    ],
    },
    function(){
      console.log(this.state.QuestionTF);
    }
    );
  }

  onSubmitQuestionMC(e){
    e.preventDefault();
  let   Subject = this.refs.QuestionSubject.value.trim();
  let   Topic = this.refs.QuestionTopic.value.trim();
  let   Type = this.refs.QuestionType.value.trim();
  let   Language = this.refs.QuestionLanguage.value.trim();
  let   Tag = this.refs.QuestionTag.value.trim();

  let   Content = this.refs.QuestionContent.value.trim();
  let   RadioTextInput01 = this.refs.RadioTextInput01.checked;
  let   RadioTextInput02 = this.refs.RadioTextInput02.checked;
  let   RadioTextInput03 = this.refs.RadioTextInput03.checked;
  let   RadioTextInput04 = this.refs.RadioTextInput04.checked;
  let   RadioTextInput05 = this.refs.RadioTextInput05.checked;
  let   RadioTextInputValue01 = this.refs.RadioTextInputValue01.value.trim();
  let   RadioTextInputValue02 = this.refs.RadioTextInputValue02.value.trim();
  let   RadioTextInputValue03 = this.refs.RadioTextInputValue03.value.trim();
  let   RadioTextInputValue04 = this.refs.RadioTextInputValue04.value.trim();
  let   RadioTextInputValue05 = this.refs.RadioTextInputValue05.value.trim();
  let   Explanation = this.refs.QuestionExplanation.value.trim();
  let   Marks = this.refs.QuestionMarks.value.trim();
  let   NegativeMarks = this.refs.QuestionNegativeMarks.value.trim();
  let   QuestionLevel = this.refs.QuestionLevel.value.trim();

  this.setState({
    QuestionMC: [
    {  Subject: Subject,
       Topic: Topic,
       Type: Type,
       Language: Language,
       Tag: Tag,
       Content: Content,
       Option1: [{Content: RadioTextInputValue01, Answer: RadioTextInput01 }],
       Option2: [{Content: RadioTextInputValue02, Answer: RadioTextInput02 }],
       Option3: [{Content: RadioTextInputValue03, Answer: RadioTextInput03 }],
       Option4: [{Content: RadioTextInputValue04, Answer: RadioTextInput04 }],
       Option5: [{Content: RadioTextInputValue05, Answer: RadioTextInput05 }],
       Explanation: Explanation,
       Marks: Marks,
       NegativeMarks: NegativeMarks,
       DifficultyLevel: QuestionLevel,
    }
    ],
    },
    function(){
      console.log(this.state.QuestionMC);
    }
    );
  }
  onSubmitQuestionFB(e){
    e.preventDefault();
  let   Subject = this.refs.QuestionSubject.value.trim();
  let   Topic = this.refs.QuestionTopic.value.trim();
  let   Type = this.refs.QuestionType.value.trim();
  let   Language = this.refs.QuestionLanguage.value.trim();
  let   Tag = this.refs.QuestionTag.value.trim();

  let   Content = this.refs.QuestionContent.value.trim();
  let   CorrectOption = this.refs.CorrectOption.value.trim();

  let   Explanation = this.refs.QuestionExplanation.value.trim();
  let   Marks = this.refs.QuestionMarks.value.trim();
  let   NegativeMarks = this.refs.QuestionNegativeMarks.value.trim();
  let   QuestionLevel = this.refs.QuestionLevel.value.trim();

  this.setState({
    QuestionMC: [
    {  Subject: Subject,
       Topic: Topic,
       Type: Type,
       Language: Language,
       Tag: Tag,
       Content: Content,
       Answer: CorrectOption,
       Explanation: Explanation,
       Marks: Marks,
       NegativeMarks: NegativeMarks,
       DifficultyLevel: QuestionLevel,
    }
    ],
    },
    function(){
      console.log(this.state.QuestionMC);
    }
    );
  }


  onSubmitQuestion(e){
    e.preventDefault();
    let QuestionSubject = this.refs.QuestionSubject.value.trim();
    let QuestionTopic = this.refs.QuestionTopic.value.trim();
    let QuestionType = this.refs.QuestionType.value.trim();
    let QuestionLanguage = this.refs.QuestionLanguage.value.trim();
    let QuestionTag = this.refs.QuestionTag.value.trim();


    Question = { QuestionSubject, QuestionTopic, QuestionType, QuestionLanguage, QuestionTag };
    this.setState({
        Question: Question
      },
      function(){
        console.log(this.state.Question.QuestionType);
      }
      );
  }

  renderQuestionType(){
    if(this.state.Question.QuestionType==='mc'){
      return (
          <div>
          <div className="form-group my-1 ml-1 pr-2">
            <label>
            <h5>Enter Question</h5>
            <h6>Question Type: Multiple Response</h6>
             </label>
            <textarea className="form-control" rows="8" id="comment" ref="QuestionContent" placeholder="what is the scientific name of mango."></textarea>
          </div>
          <div>
                <div className="input-group my-1 ml-1 pr-2">
                  <span className="input-group-addon">
                    <input
                    type="Radio"
                    aria-label="Radio button for following text input" name="RadioTextInput"
                    ref="RadioTextInput01"
                    value="option1" />
                  </span>
                   <span className="input-group-addon">Option 01</span>
                  <input type="text" className="form-control" ref="RadioTextInputValue01" placeholder="Magnifera Indica"/>
                </div>

                  <div className="input-group my-1 ml-1 pr-2">
                  <span className="input-group-addon">
                  <input
                  type="Radio"
                  aria-label="Radio button for following text input" name="RadioTextInput"
                  ref="RadioTextInput02"

                  value="option2" />
                  </span>
                 <span className="input-group-addon">Option 02</span>
                  <input type="text" className="form-control" ref="RadioTextInputValue02" placeholder="Bos Indicus" />
                </div>

                <div className="input-group my-1 ml-1 pr-2">
                <span className="input-group-addon">
                <input
                type="Radio"
                aria-label="Radio button for following text input" name="RadioTextInput"
                ref="RadioTextInput03"
                value="option3" />
                </span>
                 <span className="input-group-addon">Option 03</span>
                <input type="text" className="form-control"  ref="RadioTextInputValue03" placeholder="Homo Sapians"/>
               </div>

               <div className="input-group my-1 ml-1 pr-2">
               <span className="input-group-addon">
               <input
               type="Radio"
               aria-label="Radio button for following text input" name="RadioTextInput"
               ref="RadioTextInput04"
               value="option4" />
               </span>
                <span className="input-group-addon">Option 04</span>
               <input type="text" className="form-control" ref="RadioTextInputValue04"  placeholder="Fellies Domestica"/>
               </div>
               <div className="input-group my-1 ml-1 pr-2">
               <span className="input-group-addon">
               <input
               type="Radio"
               aria-label="Radio button for following text input" name="RadioTextInput"
               ref="RadioTextInput05"
               value="option5" />
               </span>
                <span className="input-group-addon">Option 05</span>
               <input type="text" className="form-control" ref="RadioTextInputValue05" placeholder="None of these" />
               </div>
          </div>
          <div className=" my-2 ml-2 pr-2">
          <div className="form-group">
            <label>
              <h6>
                  Add Explanation or Answer for the Question :
              </h6>
            </label>
            <textarea className="form-control" rows="3" id="comment" placeholder="The scientific name of mango is Magnifera Indica" ref="QuestionExplanation" ></textarea>
          </div>

          <div className="form-group form-inline">
              <div className="col-3">
                  <div className="form-group">
                       <label>Right Marks</label>
                       <input type="number" className="form-control"  placeholder="Marks" min="1" ref="QuestionMarks" />
                  </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                     <label>Negative Marks</label>
                     <input type="number" className="form-control"  placeholder="Marks" min="0" default="0" ref="QuestionNegativeMarks"/>
                </div>
              </div>
              <div className="col-3">
                  <div className="form-group row">
                    <label>Difficulty Level &nbsp; </label>
                    <select className="form-control" ref="QuestionLevel">
                      <option value="1">Level 1</option>
                      <option value="2">Level 2</option>
                      <option value="3">Level 3</option>
                    </select>
                  </div>
              </div>
          </div>
          <div className="mx-auto text-center">
          <button className="btn btn-primary" onClick={this.onSubmitQuestionMC.bind(this)}>Submit Question</button>
          </div>
          </div>
          </div>
         );

    } else if(this.state.Question.QuestionType==='mr') {
      return (
        <div>
        <div className="form-group my-1 ml-1 pr-2">
          <label>
          <h5>Enter Question</h5>
          <h6>Question Type: Multiple Response</h6>
           </label>
          <textarea className="form-control" rows="8" id="comment" ref="QuestionContent" placeholder="what is the scientific name of mango."></textarea>
        </div>
        <div>
              <div className="input-group my-1 ml-1 pr-2">
                <span className="input-group-addon">
                  <input
                  type="checkbox"
                  aria-label="Checkbox button for following text input" name="CheckboxTextInput"
                  ref="CheckboxTextInput01"
                  value="option1" />
                </span>
                 <span className="input-group-addon">Option 01</span>
                <input type="text" className="form-control" ref="CheckboxTextInputValue01" placeholder="Magnifera Indica"/>
              </div>

                <div className="input-group my-1 ml-1 pr-2">
                <span className="input-group-addon">
                <input
                type="checkbox"
                aria-label="Checkbox button for following text input" name="CheckboxTextInput"
                ref="CheckboxTextInput02"

                value="option2" />
                </span>
               <span className="input-group-addon">Option 02</span>
                <input type="text" className="form-control" ref="CheckboxTextInputValue02" placeholder="Bos Indicus" />
              </div>

              <div className="input-group my-1 ml-1 pr-2">
              <span className="input-group-addon">
              <input
              type="checkbox"
              aria-label="Checkbox button for following text input" name="CheckboxTextInput"
              ref="CheckboxTextInput03"
              value="option3" />
              </span>
               <span className="input-group-addon">Option 03</span>
              <input type="text" className="form-control"  ref="CheckboxTextInputValue03" placeholder="Homo Sapians"/>
             </div>

             <div className="input-group my-1 ml-1 pr-2">
             <span className="input-group-addon">
             <input
             type="checkbox"
             aria-label="Checkbox button for following text input" name="CheckboxTextInput"
             ref="CheckboxTextInput04"
             value="option4" />
             </span>
              <span className="input-group-addon">Option 04</span>
             <input type="text" className="form-control" ref="CheckboxTextInputValue04"  placeholder="Fellies Domestica"/>
             </div>
             <div className="input-group my-1 ml-1 pr-2">
             <span className="input-group-addon">
             <input
             type="checkbox"
             aria-label="Checkbox button for following text input" name="CheckboxTextInput"
             ref="CheckboxTextInput05"
             value="option5" />
             </span>
              <span className="input-group-addon">Option 05</span>
             <input type="text" className="form-control" ref="CheckboxTextInputValue05" placeholder="None of these" />
             </div>
        </div>
        <div className=" my-2 ml-2 pr-2">
        <div className="form-group">
          <label>
            <h6>
                Add Explanation or Answer for the Question :
            </h6>
          </label>
          <textarea className="form-control" rows="3" id="comment" placeholder="The scientific name of mango is Magnifera Indica" ref="QuestionExplanation" ></textarea>
        </div>

        <div className="form-group form-inline">
            <div className="col-3">
                <div className="form-group">
                     <label>Right Marks</label>
                     <input type="number" className="form-control"  placeholder="Marks" min="1" ref="QuestionMarks" />
                </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                   <label>Negative Marks</label>
                   <input type="number" className="form-control"  placeholder="Marks" min="0" default="0" ref="QuestionNegativeMarks"/>
              </div>
            </div>
            <div className="col-3">
                <div className="form-group row">
                  <label>Difficulty Level &nbsp; </label>
                  <select className="form-control" ref="QuestionLevel">
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                  </select>
                </div>
            </div>
        </div>
        <div className="mx-auto text-center">
        <button className="btn btn-primary" onClick={this.onSubmitQuestionMR.bind(this)}>Submit Question</button>
        </div>
        </div>
        </div>
        );

    } else if(this.state.Question.QuestionType==='tf') {
      return (
        <div>
        <div className="form-group my-1 ml-1 pr-2">
          <label>
          <h5>Enter Question</h5>
          <h6>Question Type: True False Statement</h6>
           </label>
          <textarea className="form-control" rows="8" id="comment" ref="QuestionContent" placeholder="what is the scientific name of mango."></textarea>
        </div>
        <div className="input-group my-1 ml-1 pr-2">
        <span className="input-group-addon">
          <input
          type="radio"
          name="RadioTextInput"
          ref="RadioTextInput01"
          value="option1" />
        </span>
         <span className="input-group-addon">First Statement &nbsp; &nbsp;&nbsp;</span>
        <input type="text" className="form-control" ref="RadioTextInputValue01" placeholder="Magnifera Indica"/>
      </div>
        <div className="input-group my-1 ml-1 pr-2">
        <span className="input-group-addon">
        <input
        type="radio"
        aria-label="Radio button for following text input" name="RadioTextInput"
        ref="RadioTextInput02"
        value="option2" />
        </span>
       <span className="input-group-addon">Second Statement</span>
        <input type="text" className="form-control" ref="RadioTextInputValue02" placeholder="Bos Indicus" />
      </div>
      <div className=" my-2 ml-2 pr-2">
      <div className="form-group">
        <label>
          <h6>
              Add Explanation or Answer for the Question :
          </h6>
        </label>
        <textarea className="form-control" rows="3" id="comment" placeholder="The scientific name of mango is Magnifera Indica" ref="QuestionExplanation" ></textarea>
      </div>

      <div className="form-group form-inline">
          <div className="col-3">
              <div className="form-group">
                   <label>Right Marks</label>
                   <input type="number" className="form-control"  placeholder="Marks" min="1" ref="QuestionMarks" />
              </div>
          </div>
          <div className="col-3">
            <div className="form-group">
                 <label>Negative Marks</label>
                 <input type="number" className="form-control"  placeholder="Marks" min="0" default="0" ref="QuestionNegativeMarks"/>
            </div>
          </div>
          <div className="col-3">
              <div className="form-group row">
                <label>Difficulty Level &nbsp; </label>
                <select className="form-control" ref="QuestionLevel">
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                </select>
              </div>
          </div>
      </div>
      <div className="mx-auto text-center">
      <button className="btn btn-primary" onClick={this.onSubmitQuestionTF.bind(this)}>Submit Question</button>
      </div>
      </div>
        </div>);

    }
    else if(this.state.Question.QuestionType==='fb') {
      return (
        <div>
        <div className="form-group my-1 ml-1 pr-2">
          <label>
          <h5>Enter Question</h5>
          <h6>Question Type: Fill in the Blanks or Numeric value Question</h6>
           </label>
          <textarea className="form-control" rows="8" id="comment" ref="QuestionContent" placeholder="what is the scientific name of mango."></textarea>
        </div>
        <div className="form-group">
            <div className="col-md-6">
               <div className="input-group">
                       <span className="input-group-addon" id="basic-addon1">Correct Answer</span>
                       <input type="number" className="form-control" ref="CorrectOption" placeholder="Numeric Value" aria-describedby="basic-addon1" />
               </div>
            </div>
        </div>
        <div className=" my-2 ml-2 pr-2">
        <div className="form-group">
          <label>
            <h6>
                Add Explanation or Answer for the Question :
            </h6>
          </label>
          <textarea className="form-control" rows="3" id="comment" placeholder="The scientific name of mango is Magnifera Indica" ref="QuestionExplanation" ></textarea>
        </div>

        <div className="form-group form-inline">
            <div className="col-3">
                <div className="form-group">
                     <label>Right Marks</label>
                     <input type="number" className="form-control"  placeholder="Marks" min="1" ref="QuestionMarks" />
                </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                   <label>Negative Marks</label>
                   <input type="number" className="form-control"  placeholder="Marks" min="0" default="0" ref="QuestionNegativeMarks"/>
              </div>
            </div>
            <div className="col-3">
                <div className="form-group row">
                  <label>Difficulty Level &nbsp; </label>
                  <select className="form-control" ref="QuestionLevel">
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                  </select>
                </div>
            </div>
        </div>
        <div className="mx-auto text-center">
        <button className="btn btn-primary" onClick={this.onSubmitQuestionFB.bind(this)}>Submit Question</button>
        </div>
        </div>


        </div>
        );

    } else  {
      return (
        <div>
          <h5>Please Enter Question Type above</h5>
        </div>);
    }
  }

    render(){
        return (
            <div>
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Add Question Step 1/5
                    </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmitQuestion.bind(this)}>
                    <div className="container text-center ">
                      <hr/>
                        <div className="row form-inline">
                        <input type="text" className="form-control"  placeholder="Subject" ref="QuestionSubject" />
                        &nbsp;&nbsp;
                        <input type="text" className="form-control"  placeholder="Enter Topic" ref="QuestionTopic" />
                        &nbsp;&nbsp;
                          <select className="form-control" ref="QuestionType">
                                  <option value="mc">Multiple Choice</option>
                                  <option value="mr" >Mutliple Response</option>
                                  <option value="tf">True False</option>
                                  <option value="fb">Fill In The Blanks</option>
                          </select>
                          &nbsp;&nbsp;

                          <select className="form-control" ref="QuestionLanguage" >
                                  <option>English</option>
                                  <option>Hindi</option>
                          </select>
                          &nbsp;&nbsp;
                          <input type="text" className="form-control"  placeholder="Enter a Tag" ref="QuestionTag" />

                        </div>
                        <div className="text-center mt-2">
                        <button className="btn btn-success">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            Add Question</button>
                        </div>
                      <hr/>
                    </div>
                    </form>
                    <div>
                      {this.renderQuestionType()}
                    </div>
                    
                  </div>
                </div>
            </div>

        );

    }
}
