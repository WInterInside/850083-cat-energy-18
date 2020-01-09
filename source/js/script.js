var menu = document.querySelector('.header__menu');

var menuLines = document.querySelector('.header__lines');
var menuX = document.querySelector('.header__x');
var nav = document.querySelector('.site-navigation');

menu.classList.remove('header__menu--nojs');
nav.classList.remove('site-navigation--nojs');
nav.classList.add('site-navigation--closed');

menu.addEventListener('click', function() {
    if (nav.classList.contains('site-navigation--closed')) {
    nav.classList.remove('site-navigation--closed');
    nav.classList.add('site-navigation--opened');
    menuLines.classList.add('header__lines--none');
    menuX.classList.add('header__x--block');
  } else {
    nav.classList.remove('site-navigation--opened');
    nav.classList.add('site-navigation--closed');
    menuLines.classList.remove('header__lines--none');
    menuX.classList.remove('header__x--block');
  }
  });
