import { Image } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'

export const TextPost = (props) => {
  return (
    <div className='simple-post fle ' style={{ paddingLeft: props.padding }}>
      {props.image && <Image className='simple-post__image' src={props.image} />}
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
