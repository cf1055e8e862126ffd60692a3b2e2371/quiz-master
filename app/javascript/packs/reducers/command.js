import {
  START_COMMAND,
  SUCCESS_COMMAND,
  FAIL_COMMAND,
  STATE,
} from '../actions/command'

/**
 * It returns properties of each commands, for example:
 * 
 * ```
 * {
 *    COMMAND_GET_QUESTIONS: {
 *      state: 'FAILED',
 *      error: 'hogehoge'
 *    },
 *    COMMAND_ADD_QUESTION: {
 *      state: 'REQUESTED',
 *    }
 * }
 * ```
 */
const command = (state = {}, action) => {
  const assignAction = params => (
    Object.assign({}, state, {
      [action.name]: params,
    })
  )
  switch (action.type) {
    case START_COMMAND:
      return assignAction({ state: STATE.REQUESTED })
    case SUCCESS_COMMAND:
      return assignAction({ state: STATE.SUCCEEDED })
    case FAIL_COMMAND:
      return assignAction({ state: STATE.FAILED, error: action.error })
    default:
      return state
  }
}

export default command
