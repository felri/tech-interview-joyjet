import actions from 'src/redux/favorites/types';

export default (state = { list: [] }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.SET_FAVORITE:
      newState.list.push(action.payload)
      return newState
    case actions.REMOVE_FAVORITE:
      const newList = newState.list.splice(action.payload, 1)
      newState.list = newList
      return newState
    default:
      return state
  }
}