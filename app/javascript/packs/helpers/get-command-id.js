/* eslint no-plusplus: "off" */

let commandId = 0

// Get unique command id
const getCommandId = () => (++commandId)

export default getCommandId
