console.log('Hello World!');
// This is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//   }
//    greet("Brendan");
// No type annotations here, but TypeScript can spot the bug
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUppercase());
    // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
