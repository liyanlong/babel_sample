let j = '';
for (let i = 0; i < 5; i++) {
  let j = i + 1;
  setTimeout(() => {
    let j = i - 1;
    console.log(i , j);
  }, 1);
  console.log(j);
}
console.log(j);