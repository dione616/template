import { Typography } from 'antd'
import React from 'react'

const { Text, Title } = Typography

export const TopicsTitle = (props) => {
  return (
    <Title>
      <Text className='topics-title'>{props.title}</Text>
      <Text className='topics-link'>{props.link ? 'See all' : null}</Text>
    </Title>
  )
}
