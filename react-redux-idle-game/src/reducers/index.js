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
  perSecond: 1,
  mainPanel: "B" //B, S, L
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
        perSecond: ((state.perSecond) + (state.buildings[action.index].power))
      })
    case 'UPDATE_TOTAL':
      return Object.assign({}, state, {
        counter: ((state.counter)+(state.perSecond))
      })
    case 'SHOW_LEADERBOARD':
      if (state.mainPanel === "L"){
        return Object.assign({}, state, {
          mainPanel: "B"
        })
      }
      else {
        return Object.assign({}, state, {
          mainPanel: "L"
        })
      }
    case 'SHOW_STATS':
      if (state.mainPanel === "S"){
        return Object.assign({}, state, {
          mainPanel: "B"
        })
      }
      else {
        return Object.assign({}, state, {
          mainPanel: "S"
        })
      }

    default:
      return state
  }
}
