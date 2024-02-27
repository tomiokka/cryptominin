import React, { useContext } from 'react'
import { Layout, Typography } from "antd";
import cryptoContext from '../../context/crypto-context';
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';

const contentStyle = {
    textAlign: "center",
    minHeight: "calc(100vh - 60px)",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#001529",
    padding: '1rem',
  };

const AppContent = () => {
 const {assets, crypto} = useContext(cryptoContext);
 const cryptoPriceMap = crypto.reduce((acc, c) => {
  acc[c.id] = c.price
  return acc
 }, {})
  return (
    <Layout.Content style={contentStyle}>
    <Typography.Title level={3} style={{textAlign: 'LEFT', color: '#fff'}}>Portfolio: {assets.map(asset => {
      return asset.amount * cryptoPriceMap[asset.id]
    }).reduce((acc, v) => acc += v, 0).toFixed(3)}$</Typography.Title>
    <PortfolioChart/>
    <AssetsTable/>
    </Layout.Content>
  )
}

export default AppContent