import { BellFilled } from '@ant-design/icons'
import { Card, Image, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'

import React from 'react'
import { TextPost } from './TextPost'

const { Title, Text } = Typography

export const Post = (props) => {
  console.log(props)
  return (
    <>
      <Card
        className='card'
        hoverable
        style={{
          height: props.height ? props.height : 180,
          width: props.width ? props.width : 'auto',
          margin: props.margin ? props.margin : 0,
        }}
        cover={
          <img
            alt='example'
            width={props.width ? props.width : 200}
            height={props.height ? props.height : 180}
            src='https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg'
          />
        }
      >
        <div className='post-card__bell' style={{ color: 'white' }}>
          <span className='bell'>
            <BellFilled style={{ color: 'white' }} />
          </span>
          <span className='bell__count'>
            <Text style={{ color: 'white' }} className='bell__count__text'>
              92
            </Text>
          </span>
        </div>
        <Title className='post-card-title' level={4} style={{ color: 'white' }}>
          Ant Design Ant Design Ant Design
        </Title>
      </Card>
    </>
  )
}
