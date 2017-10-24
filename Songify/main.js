$('#myform').on('submit', function() {
        var name = $('#name-input').val();
        var message = "Welcome, " + name;
        $('.main .user-name h3').text(message.toUpperCase());
        //$('.welcome-screen').addClass('hidden');
        $(".welcome-screen").remove();
        $('.main').removeClass('hidden');


    }
);
$('.play-icon,#song').on('click', function togglesong() {
    var song = document.querySelector('audio');
    if (song.paused == true) {
        console.log('Playing');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
    } else {
        console.log('Pausing');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
    }
});
$('body').on('keypress', function(event) {
    if ($("#main").hasClass('hidden')){
        console.log("...");
    }
    else {
        if (event.keyCode == 32) {
            var song = document.querySelector('audio');
            if (song.paused == true) {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                song.play();
            } else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
            }

        }
    }
});
var songName='Tamma Tamma';
var songArtist ='Anuradha Paudwal, Badshah, Bappi Lahiri.';
var songAlbum = 'Badrinath Ki Dulhaniya';
var song = document.querySelector('audio');
var duration = song.duration.toString();
$('#song .song-name').text(songName);
$('#song .song-artist').text(songArtist);
$('#song .song-album').text(songAlbum);
$('#song .song-duration').text(duration);
