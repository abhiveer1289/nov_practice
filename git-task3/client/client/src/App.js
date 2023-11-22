import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import StatisticalPieChart from './StatisticalPieChart'
import './elearn2.css'
import CardComponent from './YourComponent'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          {/* <Route path='/' exact Component={Login}></Route> */}
          <Route path='/' exact Component={CardComponent}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

