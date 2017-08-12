
function loadStory () {
  return new Promise(function (resove, reject) {
    setTimeout(function () {
      resovlve('Long Long Ago!!');
    }, 1000);
  })
}

(async function() {
  let story = await loadStory();
  console.log("Yey, story successfully loaded!", story);
}());
