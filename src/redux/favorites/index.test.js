import reducer from 'src/redux/favorites'
import actions from 'src/redux/favorites/types'

const ITEM = {
  "category": "Category 1",
  "item":
  {
    "title": "title 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula non placerat ullamcorper. Suspendisse suscipit mi eu commodo suscipit. Curabitur sit amet augue ac urna bibendum placerat vitae sed velit. Aenean eu rutrum augue. Quisque varius eros sit amet sagittis auctor. Fusce ut est nec nisl rhoncus euismod vel sed justo. Fusce molestie sagittis nunc, quis elementum quam porttitor at. Suspendisse fringilla vitae elit vel consequat. Etiam interdum dui facilisis purus convallis, eleifend aliquam elit sollicitudin. Vestibulum mollis cursus venenatis. Nulla eu dolor a elit semper porta ut sed orci. Praesent tincidunt condimentum molestie. Maecenas ligula mauris, feugiat id sapien ac, pretium tempor ipsum. Suspendisse id purus sit amet ex faucibus rhoncus ut non elit. Sed a suscipit lectus, quis luctus lacus.",
    "galery": [
      "http://lorempixel.com/640/480/food/1/",
      "http://lorempixel.com/640/480/sports/2/",
      "http://lorempixel.com/640/480/food/3/",
      "http://lorempixel.com/640/480/food/4/"
    ]
  },
}

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        favorites: { list: [] }
      }
    )
  })

  it('should add favorite in TOOGLE_FAVORITE ', () => {
    expect(
      reducer({}, {
        type: actions.TOOGLE_FAVORITE,
        payload: ITEM
      })
    ).toEqual({
      favorites: {
        list: [
          ITEM
        ]
      }
    })
  })

  it('should remove favorite in TOOGLE_FAVORITE because the item already exists', () => {
    expect(
      reducer(
        {
          favorites: {
            list: [
              ITEM
            ]
          }
        },
        {
          type: actions.TOOGLE_FAVORITE,
          payload: ITEM
        }
      )
    ).toEqual({
      favorites: { list: [] }
    })
  })
})