import { Divider, Layout } from 'antd'
import React from 'react'
import AdditionalInfo from './AdditionalInfo'
import { Main } from './Main'
import MostPopular from './MostPopular'
import News from './News'
import Topics from './Topics'

const { Content } = Layout

const MainContent = () => {
  return (
    <Content>
      <Main />
      <Divider style={{ color: '#e6e6e6' }} />
      <Topics />
      <Divider style={{ color: '#e6e6e6' }} />
      <MostPopular />
      <Divider style={{ color: '#e6e6e6' }} />
      <AdditionalInfo />
      <Divider style={{ color: '#e6e6e6' }} />
      <News />
    </Content>
  )
}

export default MainContent
