import actions from 'src/redux/favorites/types';

export default (state = { list: [] }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.TOOGLE_FAVORITE:
      const index = newState.list.findIndex(
        (f) => f.item.title === action.payload.item.title && f.category === action.payload.category
      );
      if (index !== -1) newState.list.splice(index, 1)
      else newState.list.push(action.payload)
      return newState
    default:
      return state
  }
}