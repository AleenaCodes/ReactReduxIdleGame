const initialState = {
  buildings: [
    {
      name: "Tower",
      number: 0, cost: 20, power: 1
    },
    {
      name: "Factory",
      number: 0, cost: 50, power: 5
    }
  ],
  counter: 0,
  perSecond: 1,
  mainPanel: "B", //B, S, L
  stats: {
    totalInBank: 0,
    totalAllTime: 0,
    buildingsOwned: 0
  }
}


export default function allReducers(state = initialState, action) {
  switch (action.type) {
    case 'BUY_BUILDING':

      var amountInBank = state.counter;
      var costOfBuilding = state.buildings[action.index].cost;

      if (costOfBuilding <= amountInBank){
        return Object.assign({}, state, {
          buildings: state.buildings.map((building, index) => {
            if (index === action.index) {
              return Object.assign({}, building, {
                number: ((building.number)+1)
              })
            }
            return building
          }),
          counter: (amountInBank - costOfBuilding),
          perSecond: ((state.perSecond) + (state.buildings[action.index].power)),
          stats: {
            totalInBank: state.stats.totalInBank,
            totalAllTime: state.stats.totalAllTime,
            buildingsOwned: ((state.stats.buildingsOwned)+1)
          }
        })
      }
      else return state

    case 'UPDATE_TOTAL':
      console.log(state);
      return Object.assign({}, state, {
        counter: ((state.counter)+(state.perSecond)),
        stats: {
          totalInBank: ((state.counter)+(state.perSecond)),
          totalAllTime: ((state.stats.totalAllTime)+(state.perSecond)),
          buildingsOwned: (state.stats.buildingsOwned)
        }
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
