import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class CreateLog extends React.Component{
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

onSubmit(e){
  e.preventDefault();
  const LogTitle = this.refs.LogTitle.value.trim();
  const LogId = this.refs.LogId.value.trim();
  const LogSubject = this.refs.LogSubject.value.trim();
  const LogTargetExam = this.refs.LogTargetExam.value.trim();
  const LogSubjectTopic = this.refs.LogSubjectTopic.value.trim();
  const LogType = this.refs.LogType.value.trim();
  const LogTeacherName = this.refs.LogTeacherName.value.trim();
  const LogTeacherDesgination = this.refs.LogTeacherDesgination.value.trim();
  const LogTeacherExp = this.refs.LogTeacherExp.value.trim();
  const LogTeacherDescription = this.refs.LogTeacherDescription.value.trim();
  const LogMinMock = this.refs.LogMinMock.value.trim();
  const LogMinVideo = this.refs.LogMinVideo.value.trim();
  const LogDescription = this.refs.LogDescription.value.trim();
  const LogTarget = this.refs.LogTarget.value.trim();
  const LogPrice = this.refs.LogPrice.value.trim();

  LogCreate = { LogTitle, LogId, LogSubject,LogTargetExam, LogSubjectTopic, LogType, LogTeacherName, LogTeacherDesgination, LogTeacherExp, LogTeacherDescription, LogMinMock, LogMinVideo, LogDescription, LogTarget, LogPrice };


Meteor.call('CreateLog.Insert', LogCreate, (error) => {
   if (error) {
     this.setState({ error: 'Something Went Wrong Please Check the the form below or contact care' });
   } else {
     this.setState({ error: '' });

     this.refs.LogTitle.value = '';
     this.refs.LogId.value = '';
     this.refs.LogSubject.value = '';
     this.refs.LogTargetExam.value = '';
     this.refs.LogSubjectTopic.value = '';
     this.refs.LogType.value = '';
     this.refs.LogTeacherName.value = '';
     this.refs.LogTeacherDesgination.value = '';
     this.refs.LogTeacherExp.value = '';
     this.refs.LogTeacherDescription.value = '';
     this.refs.LogMinMock.value = '';
     this.refs.LogMinVideo.value = '';
     this.refs.LogDescription.value = '';
     this.refs.LogTarget.value = '';
     this.refs.LogPrice.value = '';
   }
 });
}

  render(){
    return (
      <div>
      <div className="card ml-1 mb-1 ">
      <div className="card-header">
              <h4>
                <i className="fa fa-address-card" aria-hidden="true" />&nbsp;
                Create Log/Virtual Class
              </h4>
      </div>
      <div className="card-block">
      <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-row form-inline my-1">
                     <div className="form-group col-6">
                       <input type="text" className="form-control w-100"  ref="LogTitle" placeholder="Title(Ex: NEET 2018 Mock Test) " />
                     </div>
                     <div className="form-group col-6">
                       <input type="text" className="form-control w-100"  ref="LogId" placeholder="LogId" />
                     </div>
                 </div>
                 <div className="form-row form-inline my-1">
                      <div className="form-group col-6">
                        <input type="text" className="form-control w-100"  ref="LogSubject" placeholder="Subject" />
                      </div>
                      <div className="form-group col-6">
                        <input type="text" className="form-control w-100"  ref="LogTargetExam" placeholder="Target Exam" />
                      </div>
                </div>
                  <div className="form-row form-inline my-1">
                    <div className="form-group col-12">
                        <input type="text" className="form-control w-100"  ref="LogSubjectTopic" placeholder="Topics Covered" />
                    </div>
                  </div>
                 <div className="form-row my-1">
                   <div className="form-group col-12 w-100">
                      <div className="form-group">
                           <label >Log/Virtual Class Type</label>
                           <select multiple class="form-control" ref="LogType" >
                             <option>Video Lecture</option>
                             <option>Practice Test / Mock Test</option>
                             <option>Doubt Clearance Section</option>
                             <option>Discussion Form</option>
                           </select>
                     </div>
                   </div>
                 </div>
                 <hr/>
                 <div className="form-row my-1">
                      <label>About The Teacher</label>
                      <div className="form-group col-6">
                        <input type="text" className="form-control w-100"  ref="LogTeacherName" placeholder="Full Name " />
                      </div>
                  <div className="form-row form-inline">
                        <div className="form-group col-6 my-1">
                        <input type="text" className="form-control" ref="LogTeacherExp" placeholder="Desgination" ref="LogTeacherDesgination" />
                        </div>
                        <div className="form-group col-6 my-1" >
                        <input type="number" className="form-control" ref="LogTeacherExp" placeholder="Exp in Months" />
                        </div>
                    </div>
                      <div className="form-group col-12 my-1">
                        <textarea type="text" className="form-control" placeholder="Description about the Teacher's dealing this Log / Virtual Class" ref="LogTeacherDescription" />
                      </div>
                  </div>
                 <div className="form-group col-12 my-1">
                     <div className="form-group col-12">
                     <input type="number" className="form-control" ref="LogTeacherExp" placeholder="Minimun No of Mock Tests or Practice Test" ref="LogMinMock" />
                     </div>
                     <div className="form-group col-12">
                     <input type="number" className="form-control"  placeholder="Minimun No of Video Lecture" ref="LogMinVideo" />
                     </div>
                 </div>
                 <div className="form-group col-12 my-1">
                   <textarea type="text" className="form-control" id="ShortBio" placeholder="Full Desscrition for the Log or Virtual Classroom" ref="LogDescription" />
                 </div>
                 <div className="form-group col-12 my-1">
                   <textarea type="text" className="form-control"  placeholder="Target Student Description(Ex: 12th going Students or Students preparing for GATE  )" ref="LogTarget" />
                 </div>
                 <div className="form-group col-6">
                 <label>Price</label>
                 <input type="number" className="form-control" placeholder="Price" ref="LogPrice" />
                 </div>
                 <div className="d-flex flex-row justify-content-center">
                 <button type="submit" className="btn btn-danger my-3"> <i className="fa fa-floppy-o" aria-hidden="true"></i> &nbsp; Create</button>
                 </div>
        </form>
        </div>
      </div>
      </div>
    );
  }
}
