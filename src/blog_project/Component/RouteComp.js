import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Pages from './Pages'
import CardDetail from './CardDetail'
import ErrorPage from './ErrorPage'

const RouteComp = () => {
  return (
    <>
    <Routes>
        <Route  path='/'           element={<Home/>}/>
        <Route  path='/bollywood'  element={<Pages category={'bollywood'}/>}/>
        <Route  path='/technology' element={<Pages category={'technology'}/>}/>
        <Route  path='/hollywood'  element={<Pages category={'hollywood'}/>}/>
        <Route  path='/fitness'    element={<Pages category={'fitness'}/>}/>
        <Route  path='/food'       element={<Pages category={'food'}/>}/>
        <Route  path='/:genre/:id' element={<CardDetail/>}/>
        <Route  path='/*'          element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default RouteComp