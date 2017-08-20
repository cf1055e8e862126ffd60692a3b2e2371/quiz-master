import {
  START_COMMAND,
  SUCCESS_COMMAND,
  FAIL_COMMAND,
} from '../actions/command'
import COMMAND_STATE from '../consts/command-state'

/**
 * It returns properties of each commands.
 * For example:
 * 
 * ```
 * {
 *    [commandId1]: {
 *      name: COMMAND_GET_QUESTIONS
 *      state: 'FAILED',
 *      error: 'hogehoge'
 *    },
 *    [commandId2]: {
 *      name: COMMAND_ADD_QUESTION
 *      state: 'REQUESTED',
 *    }
 * }
 * ```
 */
const command = (state = {}, { type, commandId, name, error }) => {
  const assignNewCommand = (assignParams) => {
    const newCommand = {
      [commandId]: Object.assign({ name }, assignParams),
    }
    return Object.assign({}, state, newCommand)
  }
  switch (type) {
    case START_COMMAND:
      return assignNewCommand({ state: COMMAND_STATE.REQUESTED })
    case SUCCESS_COMMAND:
      return assignNewCommand({ state: COMMAND_STATE.SUCCEEDED })
    case FAIL_COMMAND:
      return assignNewCommand({ state: COMMAND_STATE.FAILED, error })
    default:
      return state
  }
}

export default command
