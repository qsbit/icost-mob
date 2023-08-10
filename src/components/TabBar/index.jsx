import React, { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import styles from './index.module.scss'

const NavBar = (props) => {
  const { showTabBar = false } = props;

  const [activeKey, setActiveKey] = useState('/');

  const navigate = useNavigate();

  const tabs = [
    {
      key: '/',
      title: '账单',
      icon: <AppOutline />,
    },
    {
      key: '/data',
      title: '统计',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/user',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  const changeTabBar = (path) => {
    setActiveKey(path);
    navigate(path);
    console.log(path);
  }

  return (
    <>
      {showTabBar &&
        <TabBar
          className={styles.tabBar}
          activeKey={activeKey}
          onChange={(key) => changeTabBar(key)}
        >
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      }
    </>
  )
}
export default NavBar
