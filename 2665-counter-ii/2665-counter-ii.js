/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let count = init;
    return { increment: () => ++count, decrement: () => --count, reset: () => (count = init) };
  }
  
  const counter = createCounter(5);
  const calls = ["increment", "reset", "decrement"];
  const output = calls.map(call => counter[call]());
  console.log(output);