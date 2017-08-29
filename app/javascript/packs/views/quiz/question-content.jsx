/* eslint react/no-danger: 0 */

import React from 'react'
import PropTypes from 'prop-types'

const QuestionContent = ({ page, content }) => (
  <div className="form-group">
    <div className="col-sm-1 control-label quiz-header">
      Q{page}.
    </div>
    <div className="col-sm-11 quiz-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
)

QuestionContent.propTypes = {
  page: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
}

export default QuestionContent
