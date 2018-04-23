function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype = Object.create(Library.prototype);

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype = Object.create(Playlist.prototype);

Library.prototype.avgRating = function(tracks) {
  let totalRating = 0;
  tracks.forEach(function(track) {
    totalRating += track.rating;
  })
  let averageRating = totalRating / tracks.length;
  return averageRating;
}

Library.prototype.totalDuration = function(tracks) {
  let duration = 0;
  tracks.forEach(function(track) {
    duration += track.length;
  })
  return duration;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

Library.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

const library1 = new Library("My Jamz", "Andy");

const playlist1 = new Playlist("Ancient Aliens");

const newSlaves = new Track("New Slaves", 5, 240);
const friends = new Track("FRIENDS", 3, 250);
const raf = new Track("RAF", 4, 230);

library1.addPlaylist(playlist1);

playlist1.addTrack(newSlaves);
playlist1.addTrack(friends);
playlist1.addTrack(raf);

console.log("The average rating of your playlist is: " + library1.avgRating(playlist1.tracks) + " out of 5");

console.log("The total duration of your playlist is: " + library1.totalDuration(playlist1.tracks) + " seconds");
















