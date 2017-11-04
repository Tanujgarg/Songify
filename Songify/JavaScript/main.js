var songName=['Tamma Tamma Again','Humma Humma'];
var songArtist =['Anuradha Paudwal, Badshah, Bappi Lahiri.','A.R.Rehman'];
var songAlbum = ['Badrinath Ki Dulhaniya','Ok Jaanu'];
var songs = document.querySelector('audio');
var duration = Math.floor(songs.duration);
duration = fancyTimeFormat(duration);


$('#myform').on('submit', function(){
        var name = $('#name-input').val();
        var message = "Welcome, " + name;
        $('.main .user-name h3').text(message.toUpperCase());
        //$('.welcome-screen').addClass('hidden');
        $(".welcome-screen").remove();
        $('.main').removeClass('hidden');

        for (var i=0 ; i<songName.length ; i++){
            var id = '#song'+(i+1);
            var item = $(id);
            item.find('.song-name').text(songName[i]);
            item.find('.song-artist').text(songArtist[i]);
            item.find('.song-album').text(songAlbum[i]);
            //$('#song1 .song-length').text(duration);
        }
    }
);
$('.play-icon,#song1').on('click', function() {
    tooglesong();
});
$('body').on('keypress', function(event) {
    if ($("#main").hasClass('hidden')){
        console.log("...");
    }
    else {
        if (event.keyCode == 32|| event.keyCode==80 || event.keyCode==112) {
            tooglesong();
        }
    }
});

function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
$('body').ready(function(){
    $('body').bind("contextmenu",function(e){
        return false;
    });
});

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }
}

function tooglesong() {
    var song = document.querySelector('audio');
    if (song.paused == true) {
        console.log('Playing');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
        $('.song-duration').text(duration);
    } else {
        console.log('Pausing');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
    }

}


