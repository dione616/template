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
            </div>
            <Avatar username='Anna'></Avatar>
          </div>
        </Header>
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
        <Footer className=' footer'>
          <>
            <div className='left'>Impressum | Datenschutz | Nutzungsbedingungen | AGB</div>
            <div className='right'>© Medizinische Medien Informations GmbH</div>
          </>
        </Footer>
      </Wrapper>
    </Layout>
  )
}

export default App
