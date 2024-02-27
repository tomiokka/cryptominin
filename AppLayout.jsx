import { Layout, Spin } from 'antd'
import React, { useContext } from 'react'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
import AppContent from './AppContent'
import cryptoContext from '../../context/crypto-context'

const AppLayout = () => {
   const {loading} = useContext(cryptoContext)

   if (loading) {
    return <Spin fullscreen></Spin>;
  }
  return (
    <Layout>
    <AppHeader />
    <Layout>
      <AppSider/>
      <AppContent/>
    </Layout>
  </Layout>
  )
}

export default AppLayout