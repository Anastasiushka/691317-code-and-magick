'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizardsAmount = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var wizardForm = setup.querySelector('.setup-wizard-form');
var setupWizard = setup.querySelector('.setup-wizard');
var setupCoat = setup.querySelector('.wizard-coat');
var setupEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var getRandomI = function (min, max) {
  var randomI = Math.floor(min + Math.random() * (max + 1 - min));
  return randomI;
};

for (var i = 1; i <= wizardsAmount; i++) {
  wizards.push({
    name: WIZARD_NAMES[getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[getRandomI(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onSetupSubmitClick = function () {
  wizardForm.submit();
};

var onSetupSubmitPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    wizardForm.submit();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupSubmit.addEventListener('click', onSetupSubmitClick);
  setupSubmit.addEventListener('keydown', onSetupSubmitPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupCoat.addEventListener('click', function () {
  setupWizard.querySelector('.wizard-coat').style.fill = COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)];
});

setupEyes.addEventListener('click', function () {
  setupWizard.querySelector('.wizard-eyes').style.fill = EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)];
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = FIREBALL_COLORS[getRandomI(0, FIREBALL_COLORS.length - 1)];
});
