const img = document.querySelector('img');
const btn = document.querySelector('button');
const search = document.querySelector('input');

let searchInput = 'adventure time';

fetchImg();

btn.onclick = fetchImg;


function fetchImg() {
  img.src = 'https://i.pinimg.com/originals/4f/77/b1/4f77b154221b0a889fdd00b68709dfb6.gif';
  if (search.value) searchInput = search.value;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=o3C157mVguO5jG3V0jNWn7113VrNJYCH&s=${searchInput}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url
    })
    .catch((error) => {
      console.log('Error fetching image', error);
    })
}