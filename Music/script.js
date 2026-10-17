// Create a music library
const musicLibrary = {
    Pop: {
        ZaraLarsson: ["Lush Life", "Symphony", "Midnight Sun", "Crush"],
        TaylorSwift: ["Anti-Hero", "Blank Space", "Lover", "Lover Story"]
    },

    Rock: {
        Coldplay: ["Yellow", "Fix You", "The Scientist", "All My Love"],
        Queen: ["We Will Rock You", "Killer Queen", "Don't Stop Me Now", "Bohemian Rhapsody"]
    },

    Hiphop: {
        Eminem: ["Lose Yourself", "Without Me", "The Real Slim Shady", "Stan"],
        Drake: ["God's Plan", "In My Feeling", "Best I Ever Had", "Quebec"]
    }
};

// Generate a playlist
function generatePlaylist() {
    const allSongs = [];
    const seenSongs = new Set();

    // Get songs from the entire library
    for (const genre in musicLibrary) {
        for (const artist in musicLibrary[genre]) {
            for (const songName of musicLibrary[genre][artist]) {
                // Avoid duplicate songs
                if (!seenSongs.has(songName)) {
                    seenSongs.add(songName);
                    allSongs.push({ songName, artist, genre });
                }
            }
        }
    }

    // Shuffle songs randomly
    allSongs.sort(() => Math.random() - 0.5);

    // Select 5 songs
    const playlist = allSongs.slice(0, 5);

    // Display playlist
    const playlistUI = document.getElementById("playlist");

    // Clear the previous playlist
    playlistUI.innerHTML = "";

    for (const song of playlist) {
        const li = document.createElement("li");

        const title = document.createElement("span");
        title.className = "song-title";
        title.textContent = song.songName;

        const details = document.createElement("span");
        details.className = "song-details";
        details.textContent = `${song.artist} · ${song.genre}`;

        li.append(title, details);
        playlistUI.appendChild(li);
    }
}