import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <div>
                     {/* footer starting */}
      <footer className="footer bg-faded  small">
          <div className="container">
            <ul className="nav justify-content-center">
              <li className="nav-item mx-auto mt-1">
                <i className="fa fa-pencil-square-o fa-2x" />
              </li>
            </ul>
            <ul className="nav  justify-content-center">
                <li className="nav-item mt-1">
                  <span>Acadlog Private Limited © 2017 &nbsp;</span>
                </li>
                <li className="nav-item mt-1">
                  <a>All Rights Reserved</a>
                </li>
                <li className="nav-item mx-auto" />
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Developers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Press Release</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Terms</a>
                </li>
            </ul>
        </div>
    </footer>
    {/* footer ending */}
            </div>

        );
    }
}
