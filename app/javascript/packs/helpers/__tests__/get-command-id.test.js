import getCommandId from '../get-command-id'

it('return different command ids', () => {
  const commandIds = [getCommandId(), getCommandId(), getCommandId()]
  expect(
    commandIds[0] !== commandIds[1] &&
    commandIds[0] !== commandIds[2] &&
    commandIds[1] !== commandIds[2]
  ).toBe(true)
})
