console.log("Hello Mendel from JavaScript!");

var moment = require("moment");
var math = require("mathjs");

// Lexical this
var bob = {
  _name: "Joe",
  _friends: [],
  printFriends() {
    this._friends.forEach((f) => console.log(this._name + " knows " + f));
  },
};

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]
