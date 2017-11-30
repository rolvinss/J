import React from 'react';

import AllQuestionSelect from './AllQuestionSelect';
import AllQuestionTable from './AllQuestionTable';

export default class QuestionDashboard extends React.Component{

  render(){
    return(
      <div>
        <AllQuestionSelect />
        <AllQuestionTable />
      </div>

    );
  }
}
