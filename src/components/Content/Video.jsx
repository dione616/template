import { Card, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

const Video = (props) => {
  return (
    <div className='video'>
      <Card
        className='card'
        hoverable
        style={{
          height: 190,
          width: 350,
        }}
        cover={
          <img
            alt='example'
            width='350'
            height='190'
            src='https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg'
          />
        }
      >
        <div className='post-card__bell' style={{ color: 'white' }}>
          <span className='bell'></span>
          <span className='bell__count'>
            <Text style={{ color: 'white' }} className='bell__count__text'>
              92
            </Text>
          </span>
        </div>
        <Title className='post-card-title' level={4} style={{ color: 'white' }}>
          {props.title}
        </Title>
      </Card>
    </div>
  )
}

export default Video
