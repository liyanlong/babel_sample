// const to var
// cannot redefine a
const a = 1;
const config = {};

// can define config
config.baseUrl = '';

{
  const a = 'foo';
  console.log(a);
}
