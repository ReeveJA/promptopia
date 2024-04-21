import React from 'react'

const Feed = ({isUserLoggedIn}) => {
  return (
    <div>
      {isUserLoggedIn ? (
        <div className='feed head-center'>
          <p className='desc'>Here's the latest!</p>
        </div>
      ) : (
        <div className='feed text-center'>
          <p className='desc'>Sign-in to view the latest</p>
        </div>
      )}
    </div>
  )
}

export default Feed
