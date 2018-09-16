'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = window.setup.querySelector('.setup-wizard');
  var setupCoat = window.setup.querySelector('.wizard-coat');
  var setupEyes = window.setup.querySelector('.wizard-eyes');
  var setupFireball = window.setup.querySelector('.setup-fireball-wrap');
  var setupPlayerElements = document.querySelector('.setup-player').getElementsByTagName('input');
  var setupUserName = window.setup.querySelector('.setup-user-name');
  window.setup.classList.add('hidden');

  setupCoat.addEventListener('click', function () {
    setupPlayerElements[0].value = window.COAT_COLORS[window.random.getRandomI(0, window.COAT_COLORS.length - 1)];
    setupWizard.querySelector('.wizard-coat').style.fill = setupPlayerElements[0].value;
  });

  setupEyes.addEventListener('click', function () {
    setupPlayerElements[1].value = window.EYES_COLORS[window.random.getRandomI(0, window.EYES_COLORS.length - 1)];
    setupWizard.querySelector('.wizard-eyes').style.fill = setupPlayerElements[1].value;
  });

  setupFireball.addEventListener('click', function () {
    setupPlayerElements[2].value = FIREBALL_COLORS[window.random.getRandomI(0, FIREBALL_COLORS.length - 1)];
    setupFireball.style.background = setupPlayerElements[2].value;
  });

  setupUserName.addEventListener('change', function () {
    window.setupSubmit.disabled = !setupUserName.checkValidity();
  });
})();
