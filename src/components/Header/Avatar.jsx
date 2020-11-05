import React from 'react'
import { Typography, Image } from 'antd'

const { Text, Title } = Typography

export const Avatar = (props) => {
  return (
    <div className='avatar'>
      <Image width={30} src={`avatar`} />
      <Text>{props.username}</Text>
    </div>
  )
}
