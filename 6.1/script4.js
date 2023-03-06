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
//   let storage = inList;
//   do {
//     console.log(storage.value);
//     storage = storage.next;
//   }
//   while (storage)
// }

const printList = (inList) => {
  let storage = inList;
  if (inList.value) {
    console.log(inList.value);
  }
  if (inList.next) {
    printList(inList.next);
  } 
}

console.log(printList(list));
