/* eslint no-plusplus: "off" */

let commandId = 0
const getCommandId = () => (++commandId)

export default getCommandId
