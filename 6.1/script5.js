let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// const printList = (inList) => {
//   if (inList.next) {
//     printList(inList.next);
//   } 
//   if (inList.value) {
//     console.log(inList.value);
//   }
// }

const printList = (inList) => {
  let storage = inList;
  let array = [];
  do {
    array.push(storage.value)
    storage = storage.next;
  }
  while (storage)

  for (let i = array.length; i >= 0; i--) {
    console.log(array[i]);
  }
}

console.log(printList(list));