const initialState =
  [
    {
      name: "Tower",
      number: 0
    },
    {
      name: "Factory",
      number: 0
    }
  ]

export default function (state = initialState, action) {
  switch (action.type) {
    case 'BUY_BUILDING':
      console.log("clicked");

      const updatedBuildings = state.map((building,index) =>{
        if(index == action.index){
          return Object.assign({}, building, {
            number: ((building.number)+1)
          })
        }
        return building
      })
      return updatedBuildings;

    default:
      return state
  }
}
