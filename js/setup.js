'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var getRandomI = function (min, max) {
  var randomI = Math.floor(min + Math.random() * (max + 1 - min));
  return randomI;
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[getRandomI(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[getRandomI(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[getRandomI(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[getRandomI(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomI(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomI(0, EYES_COLORS.length - 1)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');