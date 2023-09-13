import React, { Suspense, lazy } from 'react'
import { Routes , Route, Outlet } from 'react-router-dom'
import HeadNavbar from './HeadNavbar'
import PageFooter from './PageFooter'
import ErrorPage from './ErrorPage'
// import Home from './Home'
// import Pages from './Pages'
// import CardDetail from './CardDetail'
const Home = lazy(()=>import('./Home'))
const Pages = lazy(()=>import('./Pages'))
const CardDetail = lazy(()=>import('./CardDetail'))

const RouteComp = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<><HeadNavbar/><Outlet/><PageFooter/></>}>
            <Route  index              element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                 <Home/>
                                               </Suspense>}/>
            <Route  path='/bollywood'  element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                 <Pages category={'bollywood'}/>
                                               </Suspense>}/>
            <Route  path='/technology' element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                 <Pages category={'technology'}/>
                                               </Suspense>}/>
            <Route  path='/hollywood'  element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                 <Pages category={'hollywood'}/>
                                               </Suspense>}/>
            <Route  path='/fitness'    element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                 <Pages category={'fitness'}/>
                                               </Suspense>}/>
            <Route  path='/food'       element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                  <Pages category={'food'}/>
                                                </Suspense>}/>
        </Route>
        <Route  path='/:genre/:id'     element={<Suspense fallback={<div><h1>Loading ...</h1></div>}>
                                                   <CardDetail/>
                                               </Suspense>}/>
        <Route  path='/*'              element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default RouteComp