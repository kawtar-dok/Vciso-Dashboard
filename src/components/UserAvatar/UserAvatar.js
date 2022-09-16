import React from 'react'
import './UserAvatar.css'
import userAvatar from '../../assets/images/logo/userAvatar.png'
const UserAvatar = () => {
  return (
    <div className="UserAvatar">
      <img
          alt='..'
          className='UserAvatar__Img'
          src={userAvatar}
          />
    </div>
  )
}

export default UserAvatar
