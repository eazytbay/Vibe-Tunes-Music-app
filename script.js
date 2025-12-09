// Music data array with song details and preview URLs
const songs = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://images.unsplash.com/photo-1598387993499-40ad4f2e47a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        id: 2,
        title: "Levitating",
        artist: "Dua Lipa",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        id: 3,
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        id: 4,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        id: 5,
        title: "Heat Waves",
        artist: "Glass Animals",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
        id: 6,
        title: "Industry Baby",
        artist: "Lil Nas X",
        cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        id: 7,
        title: "Montero",
        artist: "Lil Nas X",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
        id: 8,
        title: "Save Your Tears",
        artist: "The Weeknd & Ariana Grande",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    }
];

// DOM elements
const coverImage = document.getElementById('coverImage');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const topTracks = document.getElementById('topTracks');
const searchBar = document.getElementById('searchBar');

// Audio player
const audioPlayer = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

// Initialize the player with first song
function initPlayer() {
    loadSong(currentSongIndex);
    renderTopTracks();
    
    // Add event listeners
    playBtn.addEventListener('click', playSong);
    pauseBtn.addEventListener('click', pauseSong);
    nextBtn.addEventListener('click', nextSong);
    searchBar.addEventListener('input', handleSearch);
    
    // Audio player event listeners
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    audioPlayer.addEventListener('ended', nextSong);
}

// Load song details into the player
function loadSong(index) {
    const song = songs[index];
    
    // Update player UI
    coverImage.src = song.cover;
    coverImage.alt = `${song.title} - ${song.artist}`;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    
    // Set audio source
    audioPlayer.src = song.audio;
    
    // Highlight current song in top tracks
    highlightCurrentTrack();
}

// Play the current song
function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playBtn.style.backgroundColor = "#4CAF50";
    pauseBtn.style.backgroundColor = "";
}

// Pause the current song
function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    pauseBtn.style.backgroundColor = "#f44336";
    playBtn.style.backgroundColor = "";
}

// Play next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    
    // Auto-play if a song was playing
    if (isPlaying) {
        setTimeout(() => {
            audioPlayer.play();
        }, 300);
    }
}

// Update progress bar as song plays
function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Reset to 0 when song ends
    if (audioPlayer.currentTime === audioPlayer.duration) {
        setTimeout(() => {
            progressBar.style.width = '0%';
        }, 500);
    }
}

// Render top tracks section
function renderTopTracks() {
    topTracks.innerHTML = '';
    
    songs.forEach((song, index) => {
        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        
        trackElement.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" data-index="${index}" />
            <div class="track-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        
        trackElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            
            // Auto-play the selected song
            if (!isPlaying) {
                playSong();
            } else {
                audioPlayer.play();
            }
        });
        
        topTracks.appendChild(trackElement);
    });
    
    // Highlight the current track
    highlightCurrentTrack();
}

// Highlight the current track in the top tracks section
function highlightCurrentTrack() {
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    
    if (searchTerm === '') {
        renderTopTracks();
        return;
    }
    
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    
    // Update top tracks with filtered results
    topTracks.innerHTML = '';
    
    if (filteredSongs.length === 0) {
        topTracks.innerHTML = '<p class="no-results">No songs found. Try a different search.</p>';
        return;
    }
    
    filteredSongs.forEach((song, index) => {
        const originalIndex = songs.findIndex(s => s.id === song.id);
        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        
        trackElement.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" data-index="${originalIndex}" />
            <div class="track-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        
        trackElement.addEventListener('click', () => {
            currentSongIndex = originalIndex;
            loadSong(currentSongIndex);
            
            if (!isPlaying) {
                playSong();
            } else {
                audioPlayer.play();
            }
            
            // Clear search and show all tracks again
            searchBar.value = '';
            renderTopTracks();
        });
        
        topTracks.appendChild(trackElement);
    });
}

// Initialize the player when the page loads
window.addEventListener('DOMContentLoaded', initPlayer);