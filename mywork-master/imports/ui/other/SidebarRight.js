import React from 'react';


export default class SidebarRight extends React.Component{
    render(){
        return (
            <div>
                {/* middleRight RecentActivity starting */}
                    <div className="card ml-1 mb-1 ">
                      <ul className="list-group" style={{height: 200}}>
                        <li className="list-group-item list-group-item-action">
                          <h6>
                            <i className="fa fa-globe" aria-hidden="true" />&nbsp;
                            Recent Activities
                          </h6>
                        </li>
                        <li className="list-group-item list-group-item-action p-auto" style={{height: 200}} href="#">
                          This Feature is cooming soon
                        </li>
                      </ul>
                    </div>  {/* middleLeft recent Activity ending */}
                    {/* OnlineChat starting */}
                    <div className="card m-1 ">
                      <ul className="list-group" style={{height: 400}}>
                        <li className="list-group-item list-group-item-action">
                          <h5>
                            <i className="fa fa-comment" aria-hidden="true" />&nbsp;
                            Online Followers
                          </h5>
                        </li>
                        <li className="list-group-item list-group-item-action p-auto" style={{height: 400}} href="#">
                          This Feature is cooming soon
                        </li>
                      </ul>
                    </div>
                    {/* onlinechat ending */}
            </div>

        );

    }
}
