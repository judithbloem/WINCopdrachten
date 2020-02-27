const wordLength = require("./wordLength.js");

test("Get word lengths", function() {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = wordLength(words);
  expect(output).toEqual(expected);
});
