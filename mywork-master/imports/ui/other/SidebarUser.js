import React from 'react';


export default class SidebarUser extends React.Component{
    render(){
        return (
            <div>
            
      {/* sidebarleft starting */}
      <div className="card col-3">
        <img className="card-img-top mx-auto  rounded-circle border my-1" src="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/988575_944590195562916_3036503920706552996_n.jpg?oh=364c05075da0baaa385cabaa50162a20&oe=5A6F0A24" alt="Card image cap" style={{width: 150, height: 150}} />
        <div className="btn-group mx-auto mb-1">
          <a className="btn btn-secondary btn-sm">
            <i className="fa fa-users" aria-hidden="true" />
            33 Followers
          </a>
          <a className="btn btn-secondary btn-sm ">
            <i className="fa fa-star" aria-hidden="true" />
            3.5 Rating
          </a>
        </div>
        <div className="btn-group mx-auto mb-1">
          <a className="btn btn-secondary lg">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a className="btn btn-secondary ">
            <i className="fa fa-youtube" aria-hidden="true" />
          </a>
          <a className="btn btn-secondary">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a className="btn btn-secondary">
            <i className="fa fa-flag" aria-hidden="true" />
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title text-center"><a href="#">Jaswant Singh</a></h4>
        </div>
        <ul className="list-group  ">
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-desktop" aria-hidden="true" />&nbsp;
            Create Log(Virtual Class)
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-desktop" aria-hidden="true" />&nbsp;
            Create Mock Test
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-question fa-flip-vertical" aria-hidden="true" />&nbsp;
            Ask Doubt in Log
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-university" aria-hidden="true" />&nbsp;
            Add Question in Repo
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-book" aria-hidden="true" />&nbsp;
            Add Subject
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-bullhorn" aria-hidden="true" />&nbsp;
            Create Announcement
          </a>
        </ul>
        <br />
        <ul className="list-group  ">
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-ellipsis-h  fa-rotate-90" aria-hidden="true" />&nbsp;
            Edit Profile
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-desktop" aria-hidden="true" />&nbsp;
            Manage Log
          </a>
        </ul>
        <br />
        <ul className="list-group  ">
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-question" aria-hidden="true" />&nbsp;
            FAQ
          </a>
          <a className="list-group-item list-group-item-action" href="#">
            <i className="fa fa-phone" aria-hidden="true" />&nbsp;
            Customer Care
          </a>
        </ul>
      </div> {/* sidebarleft ending */}       
            </div>
                    
        );
                    
    }
}








    