import { Col, Row } from 'antd'
import React from 'react'
import { TextPost } from '../Post/TextPost'
import { TopicsTitle } from './TopicsTitle'
import Video from './Video'

const AdditionalInfo = () => {
  return (
    <div>
      <Row>
        <Col xs={24} md={9}>
          <TopicsTitle title='Expters' link={true} />
          <TextPost image='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg' />
          <TextPost image='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg' />
          <TextPost image='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg' />
        </Col>
        <Col xs={24} md={9}>
          <TopicsTitle title='Case Reports' link={true} />
          <TextPost />
          <TextPost />
          <TextPost />
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
