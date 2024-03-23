const emojis = ['🐶', '🐺', '🐶', '🐕', '🐩', '🐾', '🐕‍🦺', '🐺'];

document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'icon', href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='11 0 100 100'><text y='.9em' font-size='90'>${emojis[Math.floor(Math.random() * emojis.length)]}</text></svg>` }));

const url = 'https://dog.ceo/api/breeds/image/random';

const imageHolder = document.getElementById('image');
const getBtn = document.getElementById('getBtn');
const loader = document.getElementById('loader');

function fetchDogImage() {
    getBtn.classList.replace('active', 'unactive');
    getBtn.textContent = '🥱 wait!';
    loader.classList.add('loader-started');
    imageHolder.classList.add('fade');

    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            imageHolder.src = data.message;
            getBtn.classList.replace('unactive', 'active');
            getBtn.textContent = `${emojis[Math.floor(Math.random() * emojis.length)]} more!`;
            loader.classList.remove('loader-started');
            imageHolder.classList.remove('fade');
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            imageHolder.textContent = 'Failed to load image. Please try again later.';
            getBtn.classList.replace('unactive', 'active');
            getBtn.textContent = `${emojis[Math.floor(Math.random() * emojis.length)]} more!`;
            loader.classList.remove('loader-started');
            imageHolder.classList.remove('fade');
        });
}

window.onload = fetchDogImage;
getBtn.addEventListener('click', fetchDogImage);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchDogImage();
    }
});

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      fetchDogImage();
    }
  }