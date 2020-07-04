import React from 'react'
import { Router } from '@reach/router'

import './App.css'
import { MainPage } from './pages/main'
import { HomePage } from './pages/main/home'
import { SquarePage } from './pages/main/square'
import { NaviPage } from './pages/main/navi'
import { QAPage } from './pages/main/qa'
import { TreePage } from './pages/main/tree'
import { ProjectPage } from './pages/main/project'
import { MPPage } from './pages/main/mp'
import { ToolsPage } from './pages/main/tools'


export const App = () => {
  return (
    <div className="App">
      <Router>
        <MainPage path="/" >
          <HomePage path="/" />
          <SquarePage path="/square" />
          <NaviPage path="/navi" />
          <QAPage path="/qa" />
          <TreePage path="/tree" />
          <ProjectPage path="/project" />
          <MPPage path="/mp" />
          <ToolsPage path="/tools" />
        </MainPage>
      </Router>
    </div>
  )
}

