const initialState = {
  buildings: [
    {
      name: "Tower",
      number: 0,
      power: 1
    },
    {
      name: "Factory",
      number: 0,
      power: 5
    }
  ],
  counter: 0,
  perSecond: 1
}


export default function allReducers(state = initialState, action) {
  switch (action.type) {
    case 'BUY_BUILDING':
      return Object.assign({}, state, {
        buildings: state.buildings.map((building, index) => {
          if (index === action.index) {
            return Object.assign({}, building, {
              number: ((building.number)+1)
            })
          }
          return building
        }),
        perSecond: ((state.perSecond) + 1)
      })
    case 'UPDATE_TOTAL':
      return Object.assign({}, state, {
        counter: ((state.counter)+1)
      })
    default:
      return state
  }
}
