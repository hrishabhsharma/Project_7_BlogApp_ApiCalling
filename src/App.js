import React, { Suspense, lazy } from 'react'

const LazyRoute = lazy(()=>import('./blog_project/Component/RouteComp'))

const App = () => {
  return (
    <>
    <Suspense fallback={<div><h1>Loading ...</h1></div>}>
      <LazyRoute/>
    </Suspense>
    </>
  )
}

export default App