import React from 'react'
import { Routes , Route, Outlet } from 'react-router-dom'
import Home from './Home'
import Pages from './Pages'
import CardDetail from './CardDetail'
import ErrorPage from './ErrorPage'
import HeadNavbar from './HeadNavbar'
import PageFooter from './PageFooter'

const RouteComp = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<><HeadNavbar/><Outlet/><PageFooter/></>}>
            <Route  index              element={<Home/>}/>
            <Route  path='/bollywood'  element={<Pages category={'bollywood'}/>}/>
            <Route  path='/technology' element={<Pages category={'technology'}/>}/>
            <Route  path='/hollywood'  element={<Pages category={'hollywood'}/>}/>
            <Route  path='/fitness'    element={<Pages category={'fitness'}/>}/>
            <Route  path='/food'       element={<Pages category={'food'}/>}/>
        </Route>
        <Route  path='/:genre/:id' element={<CardDetail/>}/>
        <Route  path='/*'          element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default RouteComp