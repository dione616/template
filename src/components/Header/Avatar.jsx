import React from 'react'
import { Typography, Image } from 'antd'

const { Text, Title } = Typography

export const Avatar = (props) => {
  return (
    <div className='avatar'>
      <Image className='avatar__image' src={`https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg`} />
      <Text>{props.username}</Text>
    </div>
  )
}
