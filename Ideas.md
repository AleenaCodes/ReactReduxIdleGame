Components:

App
  Buildings
    Buildings - [Picture, name, number, per second?]
  Clicker - [Space to click]
  Stats - [Total, per second]

Mechanism - sum up buildings p/s to get total p/s and add this on every second
Clicking increments total number
Clicking building increments num of building and building p/s





Considerations

- Saving to local storage
- Mechanism to check if enough money
- Have things greyed out if can't afford?
- Express/node DB for leaderboard
  - When user clicks leaderboard add in own score, re-order database, and draw in top 10
  - When saving to local storage, also send to leaderboard?
- Some stats -
  - Minutes playing
  - Lifetime Total
  - Number of buildings
- Set your own username
- Users have unique userid, but can set own username
  - Username displays on screen and on leaderboard
- Export save?


Memes -

Rickroll
Nyan cat
Angry cat
Pepe
Doge
Double rainbow
Dancing banana
Me gusta
Philosoraptor
Dramatic chipmunk
Charlie the unicorn
LLamas with hat



Notes -

See https://redux.js.org/basics/reducers section "Splitting Reducers" for how to split up reducers a bit more nicely
