import { Image } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'

const TextPo = (props) => {
  return (
    <div className='simple-po fle ' style={{ paddingLeft: props.padding }}>
      {props.image && (
        <Image
          className='simple-post__image'
          src='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg'
        />
      )}
      <div className='simple-post__right end'>
        <div>
          <Text className='simple-post__title-top'>Case Report</Text>
        </div>

        <div>
          <Text className='simple-post__title-bot'>Oliai et al.</Text>
        </div>
        <div>
          <Text className='simple-post__hashtags'>#Surgery #Radiology</Text>
        </div>
        <div>
          <Text className='simple-post__desc' type='string'>
            Sustained Remission Achieved from Anti-CD19 CAR T Cell Therapy Despite Prior Treatment with Anti-CD19..
          </Text>
        </div>
        <div>
          <Text className='simple-post__info'>Oct 25 7 min to read Add to bookmarks</Text>
        </div>
      </div>
    </div>
  )
}

export default TextPo
