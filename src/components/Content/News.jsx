import React from 'react'
import { TopicsTitle } from './TopicsTitle'
import { Col, Row } from 'antd'
import { TextPost } from '../Post/TextPost'
import TextPo from './TextPo'

const News = () => {
  return (
    <>
      <TopicsTitle title='News' link={true} />
      <div className='col3'>
        <div className='categories_item'>
          <TextPo />
        </div>
        <div className='categories_item'>
          <TextPo />
        </div>
        <div className='categories_item'>
          <TextPo />
        </div>
        <div className='categories_item'>
          <TextPo />
        </div>
        <div className='categories_item'>
          <TextPo />
        </div>
        <div className='categories_item'>
          <TextPo />
        </div>
      </div>
    </>
  )
}

export default News
