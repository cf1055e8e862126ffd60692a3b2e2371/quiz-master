import React from 'react'
import FormatBlockButton from './format-block-button'

const onClickBold = () => {
  document.execCommand('bold')
}

const onClickItalic = () => {
  document.execCommand('italic')
}

const execForeColor = (rgbArray) => {
  document.execCommand('foreColor', false, `rgb(${rgbArray.join(',')})`)
}

const ContentInputToolbar = () => (
  <div className="btn-toolbar manage-content-toolbar">
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-default manage-bold-button"
        onClick={onClickBold}
      >B</button>
      <button
        type="button"
        className="btn btn-default manage-italic-button"
        onClick={onClickItalic}
      >I</button>
    </div>
    <div className="btn-group">
      <FormatBlockButton tagName="h1" />
      <FormatBlockButton tagName="h2" />
      <FormatBlockButton tagName="h3" />
      <FormatBlockButton tagName="h4" />
      <FormatBlockButton tagName="h5" />
    </div>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-default"
        style={{ color: '#FF0000' }}
        onClick={() => { execForeColor([255, 0, 0]) }}
      >A</button>
    </div>
  </div>
)

export default ContentInputToolbar
