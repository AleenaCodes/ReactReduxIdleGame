Considerations

- Have things greyed out if can't afford?
- Express/node DB for leaderboard
  - When user clicks leaderboard add in own score, re-order database, and draw in top 10
  - When saving to local storage, also send to leaderboard?
- Set your own username
- Users have unique userid, but can set own username
  - Username displays on screen and on leaderboard
- Export save?


Memes -

Doge
Pepe
Double rainbow
Me gusta
Grumpy cat
Dramatic chipmunk
Nyan cat
Philosoraptor


Dat boi
Long boy
Big chungus
Drake
Surprised pikachu
Fidget spinner
Arthur fist


Rickroll
Dancing banana
Charlie the unicorn
LLamas with hat


Notes -

See https://redux.js.org/basics/reducers section "Splitting Reducers" for how to split up reducers a bit more nicely

Left to do -

- Get add to leaderboard function passing a parameter - DONE
- Get add to leaderboard action working with form - DONE
- Get add to leaderboard action actually adding to db - DONE
- Get leaderboard displaying as table - DONE
- Make and add all icons
- Finish styling - leaderboard page+form, make everything a bit smaller

If time -

- Get leaderboard action patching current score -
  - API call returns ID
  - Add this ID to the state
  - When running the action, do a check - if ID already set then patch, if not then add new entry
- Things greyed out if can't afford
- Import/export save
