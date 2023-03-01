function aclean(arr) {
  let newArray = {};

  arr.forEach((value) => {
    let sorted = value.toLowerCase().split("").sort().join(""); 
    newArray[sorted] = value;
  })

  // console.log(newArray); Lol

  return Object.keys(newArray).join(",");
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

// ( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"