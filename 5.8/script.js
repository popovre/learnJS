let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let activeMessages = new WeakSet();
console.log(activeMessages);

// activeMessages.add(messages[0].text)
activeMessages.add(messages[0]);
console.log(activeMessages);

let isHasZero = activeMessages.has(messages[0]);
console.log(isHasZero);

console.log("Read message 0: " + activeMessages.has(messages[0])); // true
console.log("Read message 1: " + activeMessages.has(messages[1])); // true

// messages.splice(0,1);
messages.shift();
console.log(messages);
console.log(isHasZero);