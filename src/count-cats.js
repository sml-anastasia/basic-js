const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = backyard.flat();
  let cat = "^^";
  let countCat = 0;
  for (i = 0; i < count.length; i ++) {
    if(count[i] == cat) {
      countCat = countCat + 1;
    }
  }
  if (countCat == 0) {
    return 0;
  } else {
    return countCat;
  }
};
