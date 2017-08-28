const commandStateChangedTo = (
  { commandId, currentCommands, nextCommands },
) => {
  if (
    !commandId ||
    !nextCommands[commandId] ||
    !currentCommands[commandId] ||
    currentCommands[commandId].state === nextCommands[commandId].state
  ) {
    return null
  }
  return nextCommands[commandId].state
}

export default commandStateChangedTo
