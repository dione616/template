import React from 'react'
import { Row, Col, Image, Typography, Divider } from 'antd'
import { TextPost } from '../Post/TextPost'
import { Post } from '../Post/Post'
import TextPo from './TextPo'

const { Text, Title } = Typography

export const Main = (props) => {
  return (
    <>
      <Row>
        <Col xs={24} md={12} xl={10}>
          <Post width={'100%'} height={'66%'} margin={'0px'} />
          <TextPo />
        </Col>
        <Col xs={24} md={12} xl={10}>
          <TextPo padding='40px' />
          <TextPo padding='40px' />
          <TextPo padding='40px' />
        </Col>
        <Col className='main-right' xs={24} md={12} xl={4}>
          <Post />
          <Post />
          <Post />
        </Col>
      </Row>
    </>
  )
}
