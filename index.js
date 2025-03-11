function superbowlWin(record) {
    let win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Export the function (if needed for testing)
  module.exports = { superbowlWin };
  
