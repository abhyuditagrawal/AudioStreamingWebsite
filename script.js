const musicData = [
    { title: 'Happier', source: 'song1.mp3', image: 'song1.jpg' },
    { title: 'Wow.', source: 'song2.mp3', image: 'song2.jpg' },
    { title: 'My Eyes', source: 'song3.mp3', image: 'song3.jpg' },
    { title: 'Stuck in a Dream', source: 'song4.mp3', image: 'song4.jpg' },
    { title: 'Young Dumb & Broke', source: 'song5.mp3', image: 'song5.jpg' },
    { title: 'Congratulations', source: 'song6.mp3', image: 'song6.jpg' },
    { title: 'Lifes a Mess', source: 'song7.mp3', image: 'song7.jpg' },
    { title: 'Forever & Again', source: 'song8.mp3', image: 'song8.jpg' },
    { title: 'All i feel is rain', source: 'song9.mp3', image: 'song9.jpeg' },
    { title: 'Stand by me', source: 'song10.mp3', image: 'song10.jpeg' },
];


const musicList = document.querySelector('.music-list');
const searchInput = document.getElementById('search');

function displayMusicItems() {
    musicList.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();

    musicData.forEach((music, index) => {
        if (music.title.toLowerCase().includes(searchTerm)) {
            const musicItem = document.createElement('div');
            musicItem.classList.add('music-item');
            musicItem.innerHTML = `
                <h2>${music.title}</h2>
                <img src="${music.image}" alt="${music.title} Image">
                <audio controls>
                    <source src="${music.source}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            musicList.appendChild(musicItem);
        }
    });
}

searchInput.addEventListener('input', displayMusicItems);
displayMusicItems();
