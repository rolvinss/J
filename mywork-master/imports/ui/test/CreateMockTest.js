import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {CSVLink, CSVDownload} from 'react-csv';


export default class CreateMockTest extends React.Component{

constructor(props){
  super(props);
  this.state = {
    error: '',
    PartFirst: true,
    PartSecond: false,
    PartThird: false,
    PartFourth: false,
    TotalSection: 0,
    TestConfigPartOne: [
    {
    TestName: '',
    TotalTime: '',
    TotalQuestion: '',
    TotalMarks: '',
    TestLevel: '',
    TestLanguage: '',
    CommonInstructions: '',
  }],
    TestConfigPartTwo: [
    {
      ShuffleQWithinSubject: false,
      GroupQWithinSection: false,
      ShuffleOption: false,
      MandatoryAttemptAllQ: false,
      MoveBackForward: true,
      ShowMarks: true ,
      MultiLanguage: false,
      TimeBound: true,
      SectionwiseTime: false,
      QuestionwiseTime: false,
      ShowMessageAfterTest: true,
      FeedbackMessagePass: '',
      FeedbackMessageFail: '',
      MessageOnSubmit: '',
      PassingPercent: true,
      PassingPercentValue: '',
      GenerateRank: true,
      DuplicateRank: true,
      SkipRank: false,
      TestTakerReport: true,
    }],

    Section1: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],

    Section2: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section3: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section4: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section5: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],

    Section6: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section7: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section8: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section9: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],
    Section10: [
    {
      SectionName: '',
      TotalQInSection: 0,
      TotalTSection: 0,
      StartTimeSection: 0,
      EndTimeSection: 0,
    }
    ],



  }
  /*ending of all states above*/

}
/*ending of constructor functions above*/


PartFirst(){
  if(this.state.PartFirst){
    return (
      <div className="container">
      <h5 className="mt-1">Part 1</h5>
        <hr/>
          <div className="row form-inline my-2">
          <input type="text" className="form-control ml-1"  placeholder="Test Name" ref="TestName"   required
                data-fv-notempty-message="Test Name is Required"/>
          &nbsp;&nbsp;
          <input type="number" className="form-control" min="10" placeholder="Total Test Time in Mins" ref="TotalTime" />
          &nbsp;&nbsp;
          <input type="number" className="form-control" min="10" placeholder="Total No Of Questions" ref="TotalQuestion" />
          &nbsp;&nbsp;
          <input type="number" className="form-control" min="10" placeholder="Total Marks for Test" ref="TotalMarks" />
          &nbsp;&nbsp;
          </div>
        <div className="row">
                  <div className="col-6">
                    <label>Difficulty Level</label>
                    <select className="form-control" ref="TestLevel">
                            <option value="">Level 1</option>
                            <option value="mr" >Level 2</option>
                            <option value="tf">Level 3</option>
                    </select>
                  </div>
                  <div className="col-6">
                  <label>Test Language</label>
                  <select className="form-control" ref="TestLanguage">
                          <option value="english">English</option>
                          <option value="hindi" >Hindi</option>
                  </select>
                  </div>
          </div>
          <div className="row my-2 mx-2">
                <textarea className="form-control" rows="8" id="comment" ref="CommonInstructions" placeholder="Common Instructions for the Mock Test Provided"></textarea>
          </div>
          <div className="text-center mt-2">
          <button className="btn btn-success" onClick={this.AfterPartOneTest.bind(this)}>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp; Next</button>
          </div>
        <hr/>
      </div>
      );
  }
}
/*ending of PartFirst function*/

AfterPartOneTest(e) {
  e.preventDefault();
  let TestName = this.refs.TestName.value.trim();
  let TotalTime = this.refs.TotalTime.value.trim();
  let TotalQuestion = this.refs.TotalQuestion.value.trim();
  let TotalMarks = this.refs.TotalMarks.value.trim();
  let TestLevel = this.refs.TestLevel.value.trim();
  let TestLanguage = this.refs.TestLanguage.value.trim();
  let CommonInstructions = this.refs.CommonInstructions.value.trim();

  this.setState({
    TestConfigPartOne: [
    {
    TestName: TestName,
    TotalTime: TotalTime,
    TotalQuestion: TotalQuestion,
    TotalMarks: TotalMarks,
    TestLevel: TestLevel,
    TestLanguage: TestLanguage,
    CommonInstructions: CommonInstructions}
    ],
    PartSecond: true,
    },
    function() {
      console.log(this.state.TestConfigPartOne);
      });

    }
/*ending of  AfterPartOneTest function above*/

AfterPartSecondTest(e){
  e.preventDefault();

  this.setState({
    PartThird: true,
    TestConfigPartTwo: [
    {
      ShuffleQWithinSubject: this.refs.ShuffleQWithinSubject.checked,
      GroupQWithinSection: this.refs.GroupQWithinSection.checked,
      ShuffleOption: this.refs.ShuffleOption.checked,
      MandatoryAttemptAllQ: this.refs.MandatoryAttemptAllQ.checked,
      MoveBackForward: this.refs.MoveBackForward.checked,
      ShowMarks: this.refs.ShowMarks.checked ,
      MultiLanguage: this.refs.MultiLanguage.checked,
      TimeBound: this.refs.TimeBound.checked,
      SectionwiseTime: this.refs.SectionwiseTime.checked,
      QuestionwiseTime: this.refs.QuestionwiseTime.checked,
      ShowMessageAfterTest: this.refs.ShowMessageAfterTest.checked,
      FeedbackMessagePass: this.refs.FeedbackMessagePass.value.trim(),
      FeedbackMessageFail: this.refs.FeedbackMessageFail.value.trim(),
      MessageOnSubmit: this.refs.MessageOnSubmit.value.trim(),
      PassingPercent: this.refs.PassingPercent.checked,
      PassingPercentValue: this.refs.PassingPercentValue.value.trim(),
      GenerateRank: this.refs.GenerateRank.checked,
      DuplicateRank: this.refs.DuplicateRank.checked,
      SkipRank: this.refs.SkipRank.checked,
      TestTakerReport: this.refs.TestTakerReport.checked,
    }],

    },
    function() {
      console.log(this.state.PartThird , 'part third');
      console.log(this.refs.SectionwiseTime.checked , 'this.refs.SectionwiseTime.value');
      console.log(this.state.TestConfigPartTwo , 'this.state.TestConfigPartTwo');
      console.log(this.state.TestConfigPartTwo.SectionwiseTime, 'this.state.TestConfigPartTwo.SectionwiseTime');
      });
}

/*ending of AfterPartSecondTest function above*/


PartSecond(){
    if(this.state.PartSecond){
      return (
        <div>
        <div>
        <div className="container">
       <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5 className="mt-1">Part 2</h5>
              <h6 className="panel-title">
                <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Arrangement & Grouping(Random Question)</a>
              </h6>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">
                  <table className="table">
                      <thead>
                        <tr>
                          <tr>Shuffle and budle questions to create vivid sets with similar questions</tr>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="2">Grouping</th>
                          <td>Shuffle Questions within Subject or Section</td>
                          <td><input type="checkbox" name="radioyesno1" ref="ShuffleQWithinSubject"/>Yes</td>
                        </tr>
                        <tr>
                          <td>Group Questions Within Same Section or Subject</td>
                          <td><input type="checkbox" name="radioyesno2" ref="GroupQWithinSection"/>Yes</td>
                        </tr>
                        <tr>
                          <th>Shuffling</th>
                          <td>Optionwise Shuffling</td>
                          <td><input type="checkbox" name="radioyesno3" ref="ShuffleOption"/>Yes</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Test Options</a>
              </h6>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <div className="panel-body">
                  <table className="table">
                      <thead>
                        <tr>
                          <th>Set the required fields for a candidate appearing in the test</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="checkbox">
                              <label><input type="checkbox" ref="MandatoryAttemptAllQ" />Not Mandatory to attempt All Question</label>
                            </div>
                          </td>
                          <td>
                              <div className="checkbox">
                                  <label><input type="checkbox"  ref="MoveBackForward"/>Not Allow user to move back and forward</label>
                                </div>
                          </td>
                        </tr>
                        <tr>
                            <td>
                              <div className="checkbox">
                                <label><input type="checkbox"  ref="ShowMarks"/>Don't Show Marks/points for test</label>
                              </div>
                            </td>
                            <td>
                                <div className="checkbox">
                                    <label><input type="checkbox" ref="MultiLanguage"/>Design multiple language test</label>
                                  </div>
                            </td>
                          </tr>
                      </tbody>
                    </table>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Time Setting</a>
              </h6>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <div className="panel-body">
                  <table className="table">
                      <thead>
                        <tr>
                          <th>Amend the clock settings for a test</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Time Bound</th>
                          <td>The candidate may attempt(complete) the test after the allocated time frame</td>
                          <td><input type="checkbox" name="timeboundradiobutton" ref="TimeBound" />Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">Section Wise time </th>
                            <td>If required you can allocate the time to each section</td>
                            <td>
                            <input type="checkbox" name="timeboundradiobutton" ref="SectionwiseTime"/>Yes</td>

                        </tr>
                        <tr>
                            <th scope="row">Question Wise time </th>
                            <td>Automize time for all questions in a test</td>
                            <td><input type="checkbox" name="questionwisetimeradiobutton" ref="QuestionwiseTime"/>Yes</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
          </div>
        </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                <h6 className="panel-title">
                  <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse4">End Test Setting</a>
                </h6>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <th >Amend the final phase changes to the test that includes result,score,message. etc </th>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" rowspan="3"><br/> <br/> <br/>Custom Message</th>
                            <td>Show Message</td>
                            <td><div className="pull-right"><input type="checkbox" name="custommessageradiobutton" ref="ShowMessageAfterTest" checked={true}/>Yes</div></td>
                          </tr>
                          <tr>
                              <td>Feedback for pass</td>
                              <td colspan="2"><textarea cols="50" rows="3" ref="FeedbackMessagePass"></textarea></td>
                          </tr>
                          <tr>
                              <td>Feedback for Fail</td>
                              <td colspan="2"><textarea name="" id="" cols="50" rows="3" ref="FeedbackMessageFail"></textarea></td>
                          </tr>
                          <tr>
                              <th scope="row">Message On submit Test </th>
                              <td colspan="3"><textarea name="" id="" cols="50" rows="3" ref="MessageOnSubmit"></textarea></td>
                          </tr>
                          <tr>
                              <th scope="row">Pass/ Fail Marks (%)</th>
                              <td>Define the passing percentage to the candidates
                                <input ref="PassingPercentValue" type="number" placeholder="in  % "/>
                              </td>
                              <td><div className="pull-right"><input type="checkbox" name="passradiobutton" ref="PassingPercent" checked={true}/>Yes</div></td>
                            </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse5">Generate Rank</a>
              </h6>
            </div>
            <div id="collapse5" className="panel-collapse collapse">
              <div className="panel-body">
                  <table className="table">
                      <thead>
                          <th >To produce the position of the candidates appearing in a test</th>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Generate Rank</th>
                          <td>Calculate the ranks using automated or manual(Uncheck for Manual) variations</td>
                          <td><div className="pull-right"><input type="checkbox" name="generaterankradiobutton" ref="GenerateRank" checked="true" />Automatic</div></td>
                        </tr>
                        <tr>
                            <th scope="row" rowspan="2">Rank</th>
                            <td>Allow duplicate rank</td>
                            <td><div className="pull-right"><input type="checkbox" name="duplicaterankradiobutton" ref="DuplicateRank"/>Yes</div></td>

                          </tr>
                        <tr>
                            <td>Skip rank after a duplicate </td>
                            <td><div className="pull-right"><input type="checkbox" name="duplicaterankskipradiobutton" ref="SkipRank"/>Yes</div></td>
                          </tr>
                      </tbody>
                    </table>
              </div>
          </div>
      </div>
      <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a className="btn btn-secondary" data-toggle="collapse" data-parent="#accordion" href="#collapse6">Candidate Reports Setting</a>
            </h4>
          </div>
                  <div id="collapse6" className="panel-collapse collapse">
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <th >Share reports with candidate as per your subsquent selection</th>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Test Taker Report</th>
                                <td>Show Reports</td>
                                <td><div className="pull-right"><input type="checkbox" name="ShowReportradiobutton" ref="TestTakerReport" checked={true}/>Yes</div></td>

                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
            <div className="text-center ml-auto">
            <button className="btn btn-success" onClick={this.AfterPartSecondTest.bind(this)}>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>&nbsp; Next</button>
            </div>
         </div>
      </div>
    </div>
  </div>);
  }
}

/*above partsecond function ends*/


PartThird(){
  if(this.state.PartThird){
      return (
      <div>
            <h5 className="ml-2">Part 3</h5>
              <div class="d-flex flex-row  justify-content-start">
                <div class="p-4 item-hl">
                  <div class="form-group">
                     <div class="form-group">
                      <label>Number Of Sections in Mock Test </label>
                      <select class="form-control" ref="TotalSection" id="exampleFormControlSelect1">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                </div>
            </div>
            <br/>
            <div>
                <button className="btn btn-default justify-content-end" onClick= { () => {
                  this.setState({
                          TotalSection: this.refs.TotalSection.value.trim(),
                          },
                          function(){
                            console.log(this.state.TotalSection);
                            });
                      }
                    }> Submit</button>
            </div>
            {this.SectionwiseDescription()}
            <div className="d-flex flex-row justify-content-end">
            <button className= "btn btn-default" onClick={this.AfterPartThirdTest.bind(this)}>Download Sample Template</button>
            </div>
      </div>
      );
  }
}
/*above PartThird ends function*/

/*kutta*/
AfterPartThirdTest(e){
  e.preventDefault();
  let TotalSection = _.range(1,Number(this.state.TotalSection)+1);
  let a = Number(this.state.TotalSection)+2;
  for (var i = 1; i < a; i++) {
     let pp = "Section" + i;
      let p = _.toString(pp);
      let aa = this.refs.p.value.trim();
    this.setState({
       Section1: [...this.state.Section1,
       {
       SectionName: aa,
       /*TotalQInSection: this.refs.`TotalQInSection${i}`.value.trim(),
       TotalTSection: this.refs.`TotalTSection${i}`.value.trim(),
       StartTimeSection: this.refs.`StartTimeSection${i}`.value.trim(),
       EndTimeSection: this.refs.`EndTimeSection${i}`.value.trim(),*/
      }
      ],
      },
     function() {
      console.log(this.state.Section1);
        });

      }


}

SectionwiseDescription(){
  let TotalSection = _.range(1,Number(this.state.TotalSection)+1);
  if(this.state.TotalSection===0){
    return (<p>Add Number of Section in the test.</p>);
  } else {
    return TotalSection.map((section) => {
            return (
              <div key={section}>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-2">
                      <div className="form-group">
                        <label>Section {section} Name </label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Section Name"
                        ref={`Section${section}`}
                       />
                        <small className="form-text text-muted">Ex: Aptitude Section or Physics etc</small>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="form-group">
                        <label>Total Questions in Section {section}</label>
                        <input type="number" className="form-control" placeholder=""  ref={`TotalQInSection${section}`} />
                    </div>
                    </div>
                    <div className="p-2">
                      <div className="form-group">
                        <label>Total Time for Section {section} (if any)</label>
                        <input type="number" className="form-control" placeholder=""  ref={`TotalTSection${section}`} disabled={!this.refs.SectionwiseTime.checked}/>
                        <small className="form-text text-muted">Leave it Blank if no subjectwise time is not allocated</small>
                    </div>
                    </div>
                    <div className="p-2">
                      <div className="form-group">
                        <label>Activation time for Section {section} (if any) in minutes</label>
                         <div className="d-flex flex-nowrap">
                          <input type="number" className="form-control" placeholder="From" ref={`StartTimeSection${section}`} disabled={!this.refs.SectionwiseTime.checked} />
                          <input type="number" className="form-control" placeholder="To" ref={`EndTimeSection${section}Name`} disabled={!this.refs.SectionwiseTime.checked} />
                        </div>
                        <small className="form-text text-muted">Leave it Blank if no subjectwise time is not allocated</small>
                    </div>
                    </div>
                  </div>
             </div>
              );
              });
        }
}
/*above ending of SectionwiseDescription method*/




render(){
  return (
        <div>
          <div className="card">
            <div className="card-header">
              <h4>
                Create Mock Test Blue Print
              </h4>
            </div>
            <div className="card-body">
              {this.PartFirst()}
              {this.PartSecond()}
              {this.PartThird()}

            </div>
          </div>
        </div>
  );
}
}
