const initialState = 0

export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TOTAL':
      console.log("updating total");
      return state+1
    default:
      return state
  }
}
