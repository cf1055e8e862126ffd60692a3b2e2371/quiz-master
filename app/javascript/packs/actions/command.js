export const START_COMMAND = 'START_COMMAND'
export const SUCCESS_COMMAND = 'SUCCESS_COMMAND'
export const FAIL_COMMAND = 'FAIL_COMMAND'
export const COMMAND = {
  GET_QUESTIONS: 'COMMAND.GET_QUESTIONS',
}
export const STATE = {
  REQUESTED: 'REQUESTED',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
}

export const startCommand = (name, params) => ({
  type: START_COMMAND,
  name,
  params,
})

export const successCommand = name => ({
  type: SUCCESS_COMMAND,
  name,
})

export const failCommand = (name, error) => ({
  type: FAIL_COMMAND,
  name,
  error,
})
