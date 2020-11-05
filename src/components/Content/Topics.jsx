import Icon, { CheckOutlined } from '@ant-design/icons'
import { Tag, Typography } from 'antd'
import React from 'react'
import SquareIcon from './SquareIcon'
import { TopicsTitle } from './TopicsTitle'

const { Text, Title } = Typography

const Topics = () => {
  return (
    <div>
      <TopicsTitle title='Topics to follow' />
      <Tag className='tags' color='default'>
        <Text>
          Pharmacy <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags selected'>
        <Text>
          Medicine and Law <CheckOutlined style={{ color: '#ffffff' }} />
        </Text>
      </Tag>
      <Tag className='tags selected'>
        <Text>
          Covid-19 <CheckOutlined style={{ color: '#ffffff' }} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <i className='fab fa-500px'></i>
        </Text>
      </Tag>
      <Tag className='tags' color='default'>
        <Text>
          Surgery <Icon component={SquareIcon} />
        </Text>
      </Tag>
    </div>
  )
}

export default Topics
