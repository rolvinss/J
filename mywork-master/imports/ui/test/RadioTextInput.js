import React from 'react';

const RadioTextInput = () => {
  return (
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
    <div className="mx-auto">
    <button className="btn btn-primary">ghf</button>
    </div>
    </div>
  );

}
export default RadioTextInput;
