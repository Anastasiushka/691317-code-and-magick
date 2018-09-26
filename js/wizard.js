'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.COAT_COLORS = COAT_COLORS;
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  window.EYES_COLORS = EYES_COLORS;

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });
  window.wizard = wizard;

  return window.wizard;
})();
