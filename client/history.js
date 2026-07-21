import {createHashHistory, createMemoryHistory} from 'history'

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHashHistory()

export default history
