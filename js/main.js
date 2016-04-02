$(document).ready(function () {
  var v = document.getElementsByTagName('video')[0];
  $('#play').click(function () {
    var $span = $(this).children('span');
    var $i = $(this).children('i');
    // toggle playing state
    if ($span.text() === 'Play') {
      v.play();
      $span.text('Pause');
    }
    else {
      v.pause();
      $span.text('Play');
    }
    // toggle classes
    $i.toggleClass('play pause');
  });
});
