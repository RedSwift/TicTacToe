/* global $ */
// playTurn(Index)
// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
// how to have two players & log their moves? How to prevent double moves?
// isGameOver()
// It should return a true or false if the game is over.
// whoWon()
// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
// restart()
// It should restart the game so it can be played again.
// It is assumed that the turns of the player will be automatically changed after an allowed move.
// The application will console log all the passed or failed test.
var grid = [null, null, null, null, null, null, null, null, null];
var player = 1;

$(function () {
  $('[class^=grid]').click(function (event) {
    var gridClass = event.currentTarget.className;
    var gridNum = gridClass.substr(4);
    playTurn(gridNum, event.currentTarget.className);
  });
  $('.restart').click(restart);
});

function playTurn (index, gClass) {
  if (grid[index] || isGameOver()) {
    return false;
  } else {
    grid[index] = player;
    $('.grid' + index).html(player);
    if (player === 1) {
      player = 2;
      // computer();
      // player = 1;
    } else player = 1;
    return true;
  }
}
function restart () {
  $('[class^=grid]').html(' ');
  grid = [null, null, null, null, null, null, null, null, null];
  player = 1;
}

function isGameOver () {
  if (whoWon()) {
    return true;
  } else {
    return false;
  }
}

function whoWon () {
// check for horizontal win
  if (grid[0] && grid[0] === grid[1] && grid[1] === grid[2]) return grid[0];
  if (grid[3] && grid[3] === grid[4] && grid[4] === grid[5]) return grid[3];
  if (grid[6] && grid[6] === grid[7] && grid[7] === grid[8]) return grid[6];
// check for diagonal win
  if (grid[0] && grid[0] === grid[4] && grid[4] === grid[8]) return grid[0];
  if (grid[2] && grid[2] === grid[4] && grid[4] === grid[6]) return grid[2];
// check for vertical win
  if (grid[0] && grid[0] === grid[3] && grid[3] === grid[6]) return grid[0];
  if (grid[1] && grid[1] === grid[4] && grid[4] === grid[7]) return grid[1];
  if (grid[2] && grid[2] === grid[5] && grid[5] === grid[8]) return grid[2];
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) return 3;
  return 0;
}

// function computer () {
//   var chooseGrid = Math.floor(Math.random() * 8);
//   console.log(chooseGrid);
//   if ($('.grid' + chooseGrid).html() === '') {
//     $('.grid' + chooseGrid).html(player);
//   } else {
//     computer();
//   }
// }
