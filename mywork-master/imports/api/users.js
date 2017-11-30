import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Users = new Mongo.Collection('Users');
export const Logg = new Mongo.Collection('Logg');
export const Qbank = new Mongo.Collection('Qbank');
export const Seed = new Mongo.Collection('Seed');
export const Uact = new Mongo.Collection('Uact');
export const Exam = new Mongo.Collection('Exam');

Meteor.methods({
  'EditProfile.Insert': function(Edit) {
    const  { UserFullName, UserNickName, UserGender, UserDOB } = Edit;
    Users.remove({userId: this.userId});
    Users.insert({
      UserFullName,
      UserNickName,
      UserGender,
      UserDOB,
      userId: this.userId,
    });
    console.log('UserFullName inserted', UserFullName);
  }
});

Meteor.methods({
  'CreateLog.Insert': function(LogCreate) {
    
    const { LogTitle, LogId, LogSubject,LogTargetExam, LogSubjectTopic, LogType, LogTeacherName, LogTeacherDesgination, LogTeacherExp, LogTeacherDescription, LogMinMock, LogMinVideo, LogDescription, LogTarget, LogPrice } = LogCreate;

    Logg.insert({
      LogTitle,
      LogId,
      LogSubject,
      LogTargetExam,
      LogSubjectTopic,
      LogType,
      LogTeacherName,
      LogTeacherDesgination,
      LogTeacherExp,
      LogTeacherDescription,
      LogMinMock,
      LogMinVideo,
      LogDescription,
      LogTarget,
      LogPrice,
      userId: this.userId,
    });
    console.log('Logttiele  inserted', LogTitle);
  }
});
