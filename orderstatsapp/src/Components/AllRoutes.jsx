import React from 'react'
import CourseApp from './CourseApp'
import HomeScreen from './HomeScreen'
import TransactionsApp from './TransactionsApp'
import WidgetOrderStats from './WidgetOrderStats'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />}></Route>  */}
        <Route path="/course" element={<CourseApp />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/transaction" element={<TransactionsApp />}></Route>
        <Route path="/widget" element={<WidgetOrderStats />}></Route> 
    </Routes>
  )
}

export default AllRoutes