import commandStateChangedTo from '../command-state-changed-to'

const CURRENT_COMMANDS = {
  1: {
    name: 'hoge',
    state: 'REQUESTED',
  },
  2: {
    name: 'fuga',
    state: 'REQUESTED',
  },
  3: {
    name: 'piyo',
    state: 'FINISHED',
  },
}

const NEXT_COMMANDS = {
  1: {
    name: 'hoge',
    state: 'SUCCEEDED',
  },
  2: {
    name: 'fuga',
    state: 'REQUESTED',
  },
  4: {
    name: 'piyo',
    state: 'REQUESTED',
  },
}

describe('when commandId is not defined', () => {
  it('return null', () => {
    expect(
      commandStateChangedTo({
        currentCommands: CURRENT_COMMANDS, nextCommands: NEXT_COMMANDS
      })
    ).toBe(null)
  })
})

describe('when commandId is not found on currentCommands', () => {
  it('return null', () => {
    expect(
      commandStateChangedTo({
        commandId: 4,
        currentCommands: CURRENT_COMMANDS,
        nextCommands: NEXT_COMMANDS,
      })
    ).toBe(null)
  })
})

describe('when commandId is not found on nextCommands', () => {
  it('return null', () => {
    expect(
      commandStateChangedTo({
        commandId: 3,
        currentCommands: CURRENT_COMMANDS,
        nextCommands: NEXT_COMMANDS,
      })
    ).toBe(null)
  })
})

describe('when command state is not changed', () => {
  it('return null', () => {
    expect(
      commandStateChangedTo({
        commandId: 2,
        currentCommands: CURRENT_COMMANDS,
        nextCommands: NEXT_COMMANDS,
      })
    ).toBe(null)
  })
})

describe('when command state is changed', () => {
  it('return changed state', () => {
    expect(
      commandStateChangedTo({
        commandId: 1,
        currentCommands: CURRENT_COMMANDS,
        nextCommands: NEXT_COMMANDS,
      })
    ).toBe('SUCCEEDED')
  })
})
