import React from 'react'

export const PopUp = ({ popupdisplay, popupFn }) => {
  return (
    <div className={popupdisplay}>
      <a
        className='close' href='#'
        onClick={(e) => popupFn('hide')}
      ><b>&times;</b>
      </a>
      <div
        className='ml-form-embed'
        data-account='1308892:t0g9u5n8v8'
        data-form='1094822:b7x6u1'
      />

    </div>)
}
