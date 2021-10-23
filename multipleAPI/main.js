import './style.css';

const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const JOKE_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';
const JOKE_HOST = 'dad-jokes.p.rapidapi.com';

const CHUCK_URL =
  'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const CHUCK_HOST = 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com';

const NEWS_URL = 'https://newslit-news-search.p.rapidapi.com/news';
const NEWS_HOST = 'newslit-news-search.p.rapidapi.com';

const getData = async (url, host) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': host,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const runApiQueries = async () => {
  ////////  GET JOKE RESULTS  //////////

  const jokeData = await getData(JOKE_URL, JOKE_HOST);
  console.log(jokeData);

  ////////  UPDATE UI WITH DATA /////////////
  app.innerHTML += /*html*/ `
<div
class="max-w-2xl
w-full
bg-yellow-400
border-2 border-gray-300
shadow-lg
p-6
rounded-md
tracking-wide
"
>
<div class="flex items center mb-4">
<img alt="avatar"
class="w-20"
src= "./img/donkey1.jpeg"
/>
<div class= "leading-5 ml-6 sm">
<h4 class="text-xl font-semibold">Dad Joke</h4>
<h5 class="font-semibold text-purple-800">Jokes</h5>
</div>
</div>
<div class="text-center">
<q class="italic text-white text-lg"
>${jokeData.value}</q
>
</div>
</div>
`;

  ////////////// GET CHUCK NORRIS JOKES ///////////////
  const chuckData = await getData(CHUCK_URL, CHUCK_HOST);
  console.log(chuckData);
  /////////////  UPDATE UI WITH DATA /////////////////
  app.innerHTML += /*html*/ `
  <div
  class="max-w-2xl
  w-full
  bg-purple-400
  border-2 border-gray-300
  shadow-lg
  p-6
  rounded-md
  tracking-wide
  "
  >
  <div class="flex items center mb-4">
  <img alt="avatar"
  class="w-20"
  src= "./img/chuck.jpeg"
  />
  <div class= "leading-5 ml-6 sm">
  <h4 class="text-xl font-semibold">Chuck Norris</h4>
  <h5 class="font-semibold text-purple-800">Boss</h5>
  </div>
  </div>
  <div class="text-center">
  <q class="italic text-white text-lg"
  >${chuckData.value}</q
  >
  </div>
  </div>
  `;

  ////////////// GET BREAKING NEWS ///////////////
  const newsData = await getData(NEWS_URL, NEWS_HOST);
  console.log(newsData);
  /////////////  UPDATE UI WITH DATA /////////////////
  app.innerHTML += /*html*/ `
<div
class="max-w-2xl
w-full
bg-yellow-400
border-2 border-gray-300
shadow-lg
p-6
rounded-md
tracking-wide
"
>
<div class="flex items center mb-4">
<img alt="avatar"
class="w-20"
src= "./img/news.png"
/>
<div class= "leading-5 ml-6 sm">
<h4 class="text-xl font-semibold">Breaking News</h4>
<h5 class="font-semibold text-black-800">News</h5>
</div>
</div>
<div class="text-center">
<q class="italic text-black text-lg"
>${newsData.value}</q
>
</div>
</div>
`;
};

runApiQueries();
