import profile from './profile.jpg';
import altText from './altText.txt'

function addImage() {
  const img = document.createElement('img');
  console.log(altText)
  img.alt = altText;
  img.width = 300;
  img.src = profile;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;