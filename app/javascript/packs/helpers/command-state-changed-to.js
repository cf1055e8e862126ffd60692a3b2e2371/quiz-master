const commandStateChangedTo = (
  { commandId, currentCommand, nextCommand },
) => {
  if (
    !commandId ||
    !nextCommand[commandId] ||
    !currentCommand[commandId] ||
    currentCommand[commandId].state === nextCommand[commandId].state
  ) {
    return null
  }
  return nextCommand[commandId].state
}

export default commandStateChangedTo
