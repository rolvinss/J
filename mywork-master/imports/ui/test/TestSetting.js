import React from 'react';

export default class TestSetting extends React.Component{
    render(){
        return (
            <div>
            <div className="container">
           <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Arrangement & Grouping(Random Question)</a>
                  </h4>
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
                              <th rowspan="2" style="width: 60px;">Grouping</th>
                              <td>Shuffle Questions within subject</td>
                              <td><input type="radio" name="radioyesno1">Yes</td>
                              <td><input type="radio" name="radioyesno1">No</td>
                            </tr>
                            <tr>
                              <td>Group Questions subjectwise</td>
                              <td><input type="radio" name="radioyesno2">Yes</td>
                              <td><input type="radio" name="radioyesno2">No</td>
                            </tr>
                            <tr>
                              <th>Shuffling</th>
                              <td>Optionwise Shuffling</td>
                              <td><input type="radio" name="radioyesno3">Yes</td>
                              <td><input type="radio" name="radioyesno3">No</td>
                            </tr>
                          </tbody>
                        </table>
                  </div> <!--panel-body of the arrangemet  grouping panel end here  -->

                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Test Options</a>
                  </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse">
                  <div className="panel-body">
                      <table className="table">
                          <thead>
                            <tr>
                              <th>Set the required fields for a candidate appering in the test</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="checkbox">
                                  <label><input type="checkbox" value="">Mandatory to attempt all questions</label>
                                </div>
                              </td>
                              <td>
                                  <div className="checkbox">
                                      <label><input type="checkbox" value="">Allow user to move back and forward</label>
                                    </div>
                              </td>
                            </tr>
                            <tr>
                                <td>
                                  <div className="checkbox">
                                    <label><input type="checkbox" value="">Show Marks/points for test</label>
                                  </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value="">Design multiple language test</label>
                                      </div>
                                </td>
                              </tr>
                              <tr>
                                  <td>
                                    <div className="checkbox">
                                      <label><input type="checkbox" value="">Apply Partial Marking</label>
                                    </div>
                                  </td>
                                  <td>
                                      <!-- <div className="checkbox">
                                          <label><input type="checkbox" value="">Allow user to move back and forward</label>
                                        </div> -->
                                  </td>
                                </tr>
                          </tbody>
                        </table>
                  </div>
                </div>
              </div><!--panel-body of the test options end here  -->
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Time Setting</a>
                  </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse">
                  <div className="panel-body">
                      <table className="table">
                          <thead>
                            <tr>
                              <th>Amend the clock settings foe a test</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Time Bound</th>
                              <td>The candidate has to finifh the test in betwwen the allocated time frame</td>
                              <td><input type="radio" name="timeboundradiobutton">Yes</td>
                              <td><input type="radio" name="timeboundradiobutton">No</td>
                            </tr>
                            <tr>
                                <th scope="row">Clock Format</th>
                                <td>Select the clock format</td>
                                <td><input type="radio" name="clockformatradiobutton">hh:mm</td>
                                <td><input type="radio" name="clockformatradiobutton">mm:ss</td>
                            </tr>
                            <tr>
                                <th scope="row">Section Wise time </th>
                                <td>If required you can allocate the time to each section</td>
                                <td><input type="radio" name="sectionwisetimeradiobutton">Yes</td>
                                <td><input type="radio" name="sectionwisetimeradiobutton">No</td>
                            </tr>
                            <tr>
                                <th scope="row">Question Wise time </th>
                                <td>Automize time for all questions in a test</td>
                                <td><input type="radio" name="questionwisetimeradiobutton">Yes</td>
                                <td><input type="radio" name="questionwisetimeradiobutton">No</td>
                            </tr>
                          </tbody>
                        </table>
                  </div>

              </div>
            </div> <!-- time bound panels end here -->
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">End Test Setting</a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body">
                        <table className="table">
                            <thead>

                                <th >Amend the final phase changes to the test that inclueds result,score,message. etc </th>

                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row" rowspan="3"><br> <br> <br>Custom Message</th>
                                <td>Show Message</td>
                                <td><div className="pull-right"><input type="radio" name="custommessageradiobutton">Yes</div></td>
                                <td><div className="pull-right"><input type="radio" name="custommessageradiobutton">No</div></td>
                              </tr>
                              <tr>
                                  <td>Feedback for pass</td>
                                  <td colspan="2"><textarea name="" id="" cols="50" rows="3"></textarea></td>
                              </tr>
                              <tr>
                                  <td>Feedback for Fail</td>
                                  <td colspan="2"><textarea name="" id="" cols="50" rows="3"></textarea></td>
                              </tr>
                              <tr>
                                  <th scope="row">Message On submit Test </th>
                                  <td colspan="3"><textarea name="" id="" cols="50" rows="3"></textarea></td>

                              </tr>
                              <tr>
                                  <th scope="row">Pass/ Fail Marks (%)</th>
                                  <td>Define the passing percentage to the candidates</td>
                                  <td><div className="pull-right"><input type="radio" name="passradiobutton">Yes</div></td>
                                  <td><div className="pull-right"><input type="radio" name="passradiobutton">No</div></td>
                                </tr>
                            </tbody>
                          </table>
                    </div>
                </div>

            </div>          <!-- panel-body of end test timing panel end here -->
            <!-- panel body for generate rank starts here -->
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Generate Rank</a>
                  </h4>
                </div>
                <div id="collapse5" className="panel-collapse collapse">
                  <div className="panel-body">
                      <table className="table">
                          <thead>
                              <th >To produce tge position of the candidates appearing in a test</th>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Generate Rank</th>
                              <td>Calculate the ranks using automated or manual variations</td>
                              <td><div className="pull-right"><input type="radio" name="generaterankradiobutton">Automatic</div></td>
                              <td><div className="pull-right"><input type="radio" name="generaterankradiobutton">Manual</div></td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="2">Rank</th>
                                <td>Allow duplicate rank</td>
                                <td><div className="pull-right"><input type="radio" name="duplicaterankradiobutton">Yes</div></td>
                                <td><div className="pull-right"><input type="radio" name="duplicaterankradiobutton">No</div></td>
                              </tr>
                            <tr>
                                <td>Skip rank after a duplicate </td>
                                <td><div className="pull-right"><input type="radio" name="duplicaterankskipradiobutton">Yes</div></td>
                                <td><div className="pull-right"><input type="radio" name="duplicaterankskipradiobutton">No</div></td>
                              </tr>

                          </tbody>
                        </table>
                  </div>
              </div>

          </div>          <!-- panel-body of generate rank timing panel end here -->
          <!-- panel body of candidates reports setting starts here -->
          <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Candidate Reports Setting</a>
                </h4>
              </div>
              <div id="collapse6" className="panel-collapse collapse">
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <th >Share reports with candidate as per your sybsequent selection</th>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Test Taker Report</th>
                            <td>Show Reports</td>
                            <td><div className="pull-right"><input type="radio" name="ShowReportradiobutton">Yes</div></td>
                            <td><div className="pull-right"><input type="radio" name="ShowReportradiobutton">No</div></td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>

        </div> <!-- panel body of candidates reports setting ends here -->

     </div>

        </div>  <!--div.conatiner of test settings ends  -->


            </div>
        );

    }
}
