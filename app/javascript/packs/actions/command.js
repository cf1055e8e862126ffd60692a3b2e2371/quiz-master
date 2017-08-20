export const START_COMMAND = 'START_COMMAND'
export const SUCCESS_COMMAND = 'SUCCESS_COMMAND'
export const FAIL_COMMAND = 'FAIL_COMMAND'

export const startCommand = (commandId, name, params) => ({
  type: START_COMMAND,
  commandId,
  name,
  params,
})

export const successCommand = (commandId, name) => ({
  type: SUCCESS_COMMAND,
  commandId,
  name,
})

export const failCommand = (commandId, name, error) => ({
  type: FAIL_COMMAND,
  commandId,
  name,
  error,
})
