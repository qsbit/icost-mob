import React, { useState, useEffect } from 'react';
import TabBar from '@/components/TabBar'

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import routes from '@/router'
import './App.css'

function App() {
  // 拿到 location 实例  =>  获取当前路径
  const { pathname } = useLocation()

  // 定义需要展示的路径
  const needNav = ['/', '/data', '/user'];

  // 判断是否需要展示底部导航栏
  const [showTabBar, setShowTabBar] = useState(false);

  useEffect(() => {
    setShowTabBar(needNav?.includes(pathname))
  }, [pathname])

  return (
    <>
      <Routes>
        {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
      </Routes>
      <TabBar showTabBar={showTabBar} />
    </>
  )
}

export default App
