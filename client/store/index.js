import {createStore} from 'redux'
import storePieces from './store'

const store = createStore(storePieces)

export default store
export * from './store'
