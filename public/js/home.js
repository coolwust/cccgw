document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var i        = 0;
  var entities = document.querySelectorAll('.slide .slide-entity');
  var prev     = document.querySelector('.slide-prev');
  var next     = document.querySelector('.slide-next');
  var pause    = document.querySelector('.slide-pause');
  var play     = document.querySelector('.slide-play');
  var interval;
  function change(m) {
    var from = i;
    var to   = i + m;
    if (to < 0) {
      to = entities.length - 1;
    } else if (to > entities.length - 1) {
      to = 0;
    }
    entities[from].classList.remove('slide-current');
    entities[to].classList.add('slide-current');
    i = to;
  }
  function auto(on) {
    if (on) {
      interval = window.setInterval(function () {
        change(1);
      }, 8000);
    } else {
      clearInterval(interval);
      interval = null;
    }
  }
  function reset() {
    if (interval !== null) {
      auto(false);
      auto(true);
    }
  }
  prev.addEventListener('click', function () {
    change(-1);
    reset();
  });
  next.addEventListener('click', function () {
    change(1);
    reset();
  });
  pause.addEventListener('click', function () {
    auto(false);
    play.classList.remove('slide-delete');
    pause.classList.add('slide-delete');
  });
  play.addEventListener('click', function () {
    pause.classList.remove('slide-delete');
    play.classList.add('slide-delete');
    window.setTimeout(function () {
      change(1);
    }, 2000);
    auto(true);
  });
  auto(true);
});

/*
document.addEventListener('DOMContentLoaded', function () {
  var endtime = '2016-02-27T16:00:00.000-05:00';
  var interval;
  function getRemainingTime(deadline) {
    var remaining = Math.floor((Date.parse(deadline) - Date.parse(new Date())) / 1000);
    var seconds   = Math.floor(remaining % 60);
    var minutes   = Math.floor(remaining / 60 % 60);
    var hours     = Math.floor(remaining / (60 * 60) % 60);
    var days      = Math.floor(remaining / (60 * 60 * 24));
    return {
      remaining: remaining,
      days:      days,
      hours:     hours,
      minutes:   minutes,
      seconds:   seconds
    }
  }
  function update(){
    var days    = document.querySelector('.countdown-days .countdown-value');
    var hours   = document.querySelector('.countdown-hours .countdown-value');
    var minutes = document.querySelector('.countdown-minutes .countdown-value');
    var seconds = document.querySelector('.countdown-seconds .countdown-value');
    var t = getRemainingTime(endtime);
    if (days.innerHTML !== t.days) {
      days.innerHTML = t.days;
    }
    if (hours.innerHTML !== t.hours) {
      hours.innerHTML = t.hours;
    }
    if (minutes.innerHTML !== t.minutes) {
      minutes.innerHTML = t.minutes;
    }
    if (seconds.innerHTML !== t.seconds) {
      seconds.innerHTML = t.seconds;
    }
    if(t.remaining === 0) {
      clearInterval(interval);
    }
  }
  function initialize() {
    interval = setInterval(update, 1000);
  }
  initialize();
  update();
});
*/
