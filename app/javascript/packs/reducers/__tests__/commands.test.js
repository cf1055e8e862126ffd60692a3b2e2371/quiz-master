import commandsReducer from '../commands'
import {
  startCommand,
  successCommand,
  failCommand,
} from '../../actions/command'

const getCommands = () => (
  {
    1: {
      name: 'hoge',
      state: 'REQUESTED',
    },
  }
)

describe('START_COMMAND', () => {
  it('should be REQUESTED status', () => {
    const commands = commandsReducer(
      getCommands(), startCommand(2, 'fuga', {}),
    )
    expect(commands).toMatchObject({
      1: {
        name: 'hoge',
        state: 'REQUESTED',
      },
      2: {
        name: 'fuga',
        state: 'REQUESTED',
      },
    })
  })
})

describe('SUCCESS_COMMAND', () => {
  it('should be SUCCEEDED status', () => {
    const commands = commandsReducer(
      getCommands(), successCommand(1, 'hoge'),
    )
    expect(commands).toMatchObject({
      1: {
        name: 'hoge',
        state: 'SUCCEEDED',
      },
    })
  })
})

describe('FAIL_COMMAND', () => {
  it('should be FAILED status', () => {
    const commands = commandsReducer(
      getCommands(), failCommand(1, 'hoge', 'test error'),
    )
    expect(commands).toMatchObject({
      1: {
        name: 'hoge',
        state: 'FAILED',
        error: 'test error',
      },
    })
  })
})
