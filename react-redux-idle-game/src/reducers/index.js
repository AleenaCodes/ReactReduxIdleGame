const initialState = {
  buildings: [
    {
      name: "Doge",
      number: 0, cost: 20, power: 1
    },
    {
      name: "Grumpy Cat",
      number: 0, cost: 50, power: 3
    },
    {
      name: "Dat Boi",
      number: 0, cost: 100, power: 5
    },
    {
      name: "Philosoraptor",
      number: 0, cost: 250, power: 10
    },
    {
      name: "Me Gusta",
      number: 0, cost: 500, power: 12
    },
    {
      name: "Nyan Cat",
      number: 0, cost: 1000, power: 15
    },
    {
      name: "Fidget Spinner",
      number: 0, cost: 1500, power: 20
    },
    {
      name: "Surprised Pikachu",
      number: 0, cost: 2000, power: 22
    },
    {
      name: "Big Chungus",
      number: 0, cost: 5000, power: 25
    }
  ],
  counter: 0,
  perSecond: 1,
  mainPanel: "B", //B, S, L
  stats: {
    totalInBank: 0,
    totalAllTime: 0,
    buildingsOwned: 0,
    secondsPlayed: 0
  },
  leaderboardUsername: "player",
  leaderboardDatabaseID: ""
}

async function addEntryToDB(inputtedUsername, currentScore) {
  console.log("making DB call");

  var data = {
    "username" : inputtedUsername,
    "score": currentScore
  }
  var leaderboardAddCall = await fetch('/leaderboard', {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    console.log(res.createdEntry);
  });

}

export default function allReducers(state = initialState, action) {
  switch (action.type) {
    case 'BUY_BUILDING':
      console.log(action);

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
            buildingsOwned: ((state.stats.buildingsOwned)+1),
            secondsPlayed: ((state.stats.secondsPlayed))
          }
        })
      }
      else return state
    case 'UPDATE_TOTAL':
      return Object.assign({}, state, {
        counter: ((state.counter)+(state.perSecond)),
        stats: {
          totalInBank: ((state.counter)+(state.perSecond)),
          totalAllTime: ((state.stats.totalAllTime)+(state.perSecond)),
          buildingsOwned: (state.stats.buildingsOwned),
          secondsPlayed: ((state.stats.secondsPlayed)+1)
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
    case 'ADD_TO_LEADERBOARD':
      console.log("adding to leaderboard");

      addEntryToDB(action.username, state.counter);

      return Object.assign({}, state, {
        leaderboardUsername: action.username
      })
    case 'RESET_COUNTER':
      return initialState;

    default:
      return state
  }
}
