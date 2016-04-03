'use strict';

const BrowserWindow = require('electron').remote.BrowserWindow;

$(document).ready(function () {
  let v = document.getElementsByTagName('video')[0];
  // play or pause the media
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
  // maximize or minimize the window
  $('#fullscreen').click(function () {
    var bWindow = BrowserWindow.getFocusedWindow();
    bWindow.setFullScreen(!bWindow.isFullScreen());
  });
  // trigger all the tooltips
  $('.activating').popup();
});
