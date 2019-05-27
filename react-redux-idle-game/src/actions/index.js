export function buyBuilding(index) {
  return { type: 'BUY_BUILDING', index }
}

export function updateTotal() {
  return { type: 'UPDATE_TOTAL'}
}

export function showLeaderboard() {
  return { type: 'SHOW_LEADERBOARD'}
}

export function showStats() {
  return { type: 'SHOW_STATS'}
}

export function resetCounter() {
  return { type: 'RESET_COUNTER'}
}

export function addToLeaderboard(username) {
  return { type: 'ADD_TO_LEADERBOARD', username}
}
