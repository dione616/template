import React from 'react'
import { Button, DatePicker, version, Col, Image, Row, Layout, Typography, Input, Divider, Calendar, Tag } from 'antd'
/* import 'antd/dist/antd.css' */
/* import './index.css' */
import Icon, { BellOutlined, FastBackwardOutlined } from '@ant-design/icons'
import { LogoSection, Avatar } from './components/Header'
import { Main } from './components/Content'
import { Wrapper } from './components/Wrapper'
import Topics from './components/Content/Topics'
import FavouriteIcon from './components/Content/FavouriteIcon'
import MostPopular from './components/Content/MostPopular'
import AdditionalInfo from './components/Content/AdditionalInfo'
import News from './components/Content/News'
import MainContent from './components/Content/Content'

const { Text, Title } = Typography
const { Content, Header, Footer } = Layout

const App = () => {
  return (
    <Layout className='app'>
      <Wrapper>
        <Header className='header'>
          <div className='wrapper'>
            <LogoSection title='medwiz' />
            <div className='header-search'>
              <Input className='input' style={{ width: ' 100%' }} />
              <BellOutlined />
              <BellOutlined />
              <Avatar username='Anna'></Avatar>
            </div>
          </div>
        </Header>
        <MainContent />
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default App
