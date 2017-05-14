// YT video page player

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;
var ytId = $('#ytplayer').data('ytid');

var player = {
    playVideo: function(container, videoId) {
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            window.onYouTubePlayerAPIReady = function() {
                player.loadPlayer(container, videoId);
            };
            $.getScript('//www.youtube.com/player_api');
        } else {
            player.loadPlayer(container, videoId);
        }
    },
    loadPlayer: function(container, videoId) {
        window.myPlayer = new YT.Player(container, {
            playerVars: {
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                autoplay: 1
            },
            height: '100%',
            width: '100%',
            videoId: videoId,
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }
};


$('.video_row_item').click(function() {

    $(this).find('iframe').remove();
    console.debug('КЛИК');
    var ytIdVid = $(this).find('.video_container').data('ytid');
    console.debug(ytIdVid);
    player.playVideo(ytIdVid, ytIdVid);

    $(this).removeClass('video_row_item_stopped');
    $(this).addClass(ytIdVid);

});


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
    console.debug('player ready ' + event);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;

function onPlayerStateChange(event) {
    // console.debug(event);

    if (event.data == 1) {
        var targetClicker = event.target.a.id;
        console.debug('воспроизведение началось: ' + targetClicker);
        console.debug('цель:' + event.target.a.id);

        $('.' + targetClicker).removeClass('video_row_item_stopped');

    } else {
        var targetClicker = event.target.a.id;
        $('.' + targetClicker).children('.video').append('<div class="video_container" id="' + targetClicker + '" data-ytid="' + targetClicker + '"></div>');


        $('.' + targetClicker).addClass('video_row_item_stopped');

        console.debug('воспроизведение остановилось: ' + targetClicker);

    }


}
