import actions from 'src/redux/favorites/types';

export const setFavorite = favorite => {
  dispatch({
    type: actions.SET_FAVORITE,
    payload: favorite
  })
}

export const removeFavorite = index => {
  dispatch({
    type: actions.REMOVE_FAVORITE,
    payload: index
  })
}