# chess
https://www.michaelmoreno-dev.github.io
Generated a 2D array represented with 8 parent divs containing 8 child divs each. Each div has a class indicating it's position in the matrix.

I then select at these classes using jQuery to index the divs when adding, targeting, checking, and appending pieces. 

Every square contains an event handler listening for a click. When activated, the data of the current square is stored to reference later, and then movement functions are called to evaluate the available squares. A second event handler begins listening for a second click. When activated, this event handler will store the data of the target square and compare it to the available squares established in the movement functions.

The movement functions work by querying specified squares and checking if they are empty, occupied by enemy pieces, or occupied by friendly pieces. If the former two are true, the square will be pushed into an array called validMoves, which is what the previously mentioned event handler compares the target squares to.

Many of the pieces are line-of-sight bound, so a raycast system is needed to ensure that players can't jump over blocking pieces. I achieve this by using for-loops that query classes with an offset value.1

# unsolved problems / unadded features
Need to improve checking system and implement checkmate check.
Sometimes when you click, end the click, and the select an enemy piece it captures.
Need to add Turn system
need to add En Passente
