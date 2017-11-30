import React from 'react';
import { Link, Route } from 'react-router-dom';


import { MainMenu } from './menus';
import HeaderPrivate from './HeaderPrivate';
import SidebarRight from './SidebarRight';
import DashboardLog from './DashboardLog';
import EditProfile from './EditProfile';
import CreateLog from './CreateLog';


import TestDashboard from './../test/TestDashboard';
import AllQuestionSelect from './../test/AllQuestionSelect';
import CreateMockTest from './../test/CreateMockTest';



const PageTemplate = ({children}) =>
      <div>
         <div className="container-fluid">
              <HeaderPrivate/>
          </div>
          <div className="container-fluid row">
              <div className="col-3">
                  <MainMenu />
              </div>
              <div className="col-6">
                  {children}
              </div>
              <div className="col-3">
                  <SidebarRight/>
              </div>
          </div>
      </div>

const PageTemplateTest = ({children}) =>
      <div>
         <div className="container-fluid">
              <HeaderPrivate/>
          </div>
          <div className="container-fluid row">
              <div className="col-3">
                  <MainMenu />
              </div>
              <div className="col-9">
                  {children}
              </div>
          </div>
      </div>

export const TestDashboard1 = () =>
      <PageTemplateTest>
          <TestDashboard/>
      </PageTemplateTest>

export const CreateQuestion = () =>
      <PageTemplateTest>
          <AllQuestionSelect />
      </PageTemplateTest>

export const CreateTest = () =>
      <PageTemplateTest>
          <CreateMockTest />
      </PageTemplateTest>



export const EditProfile1 = () =>
    <PageTemplate>
      <EditProfile />
    </PageTemplate>

export const CreateLog1 = () =>
    <PageTemplate>
      <CreateLog />
    </PageTemplate>

export const Home = () =>
    <PageTemplate>
      <DashboardLog />
    </PageTemplate>
