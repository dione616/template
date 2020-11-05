import React from 'react'
import { Post } from '../Post/Post'
import { TopicsTitle } from './TopicsTitle'

const popular = [
  {
    id: 1,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 55,
  },
  {
    id: 2,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 32,
  },
  {
    id: 3,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 65,
  },
  {
    id: 4,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 51,
  },
  {
    id: 5,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 29,
  },
  {
    id: 6,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 83,
  },
  {
    id: 7,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 83,
  },
  {
    id: 8,
    image: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg',
    title: 'Disease Monographs',
    count: 83,
  },
]

const MostPopular = () => {
  const mapPopular = popular.map((post) => {
    return <Post className='popular-post' margin={'10px'} key={post.id} post={post} width={330} height={280} />
  })
  return (
    <div>
      <TopicsTitle title='MostPopular' link={true} />
      <div className='most-popular'>{mapPopular}</div>
    </div>
  )
}

export default MostPopular
