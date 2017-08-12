
async function* agf() {
  await 1;
}

async function f() {
  for await (let x of y) {
    g(x);
  }
}
