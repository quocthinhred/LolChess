import React from 'react'
import Lazyload from 'react-lazyload'

function LazyLoadImage({ src }) {
  return (
      <Lazyload throttle={1000}>
        <img src={src} />
      </Lazyload>
  )
}

export default LazyLoadImage;