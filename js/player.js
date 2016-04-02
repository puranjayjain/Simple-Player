'use strict';

$(document).ready(function () {
  let v = document.getElementsByTagName('video')[0];
  $('#play').click(function () {
    let $i = $(this).children('i');
    // toggle playing state
    if (playerState.playing) {
      v.pause();
    }
    else {
      v.play();
    }
    // toggle classes and playing state
    playerState.playing = !playerState.playing;
    $i.toggleClass('play pause');
  });
  // trigger all the tooltips
  $('.activating').popup();
});
