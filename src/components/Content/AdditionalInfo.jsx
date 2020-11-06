import { Col, Row } from 'antd'
import React from 'react'
import { TextPost } from '../Post/TextPost'
import TextPo from './TextPo'
import { TopicsTitle } from './TopicsTitle'
import Video from './Video'

const AdditionalInfo = () => {
  return (
    <div>
      <Row>
        <Col xs={24} md={9}>
          <TopicsTitle title='Expters' link={true} />
          <TextPo image={true} />
          <TextPo image={true} />
          <TextPo image={true} />
        </Col>
        <Col xs={24} md={9}>
          <TopicsTitle title='Case Reports' link={true} />
          <TextPo />
          <TextPo />
          <TextPo />
        </Col>
        <Col xs={24} md={6}>
          <TopicsTitle title='INterVIEWs' link={true} />
          <Video title='Sustained Remission' />
          <Video title='Sustained Remission ' />
          <Video title='Sustained Remission' />
        </Col>
      </Row>
    </div>
  )
}

export default AdditionalInfo
