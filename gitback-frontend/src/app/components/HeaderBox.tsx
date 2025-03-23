import React from 'react'

const HeaderBox = ({ type = 'title', title, subtext, user }) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-xl sm:text-3xl lg:text-5xl font-semibold text-gray-900'>
        {title}
        {type === 'greeting' && (
          <span className='text-blue-600 text-2xl sm:text-4xl lg:text-5xl'>
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className='text-sm sm:text-base text-gray-600'>{subtext}</p>
    </div>
  )
}

export default HeaderBox
