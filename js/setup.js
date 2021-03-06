'use strict';

(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.COAT_COLORS = COAT_COLORS;
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  window.EYES_COLORS = EYES_COLORS;

  var wizardsAmount = 4;
  var matchingWizards = [];
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var wizardForm = document.querySelector('.setup-wizard-form');
  window.wizardForm = wizardForm;

  window.random = {
    getRandomI: function (min, max) {
      var randomI = Math.floor(min + Math.random() * (max + 1 - min));
      return randomI;
    }
  };

  for (var i = 1; i <= wizardsAmount; i++) {
    matchingWizards.push({
      name: WIZARD_NAMES[window.random.getRandomI(0, WIZARD_NAMES.length - 1)] + WIZARD_SURNAMES[window.random.getRandomI(0, WIZARD_SURNAMES.length - 1)],
      coatColor: COAT_COLORS[window.random.getRandomI(0, COAT_COLORS.length - 1)],
      eyesColor: EYES_COLORS[window.random.getRandomI(0, EYES_COLORS.length - 1)]
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.setAttribute('data-fireball', wizard.colorFireball);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var loadSuccessHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < 4; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var ErrorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadSuccessHandler, ErrorHandler);

  wizardForm.addEventListener('submit', function (evt) {
    window.backend.save(
        new FormData(wizardForm),
        function () {
          userDialog.classList.add('hidden');
        },
        ErrorHandler
    );
    evt.preventDefault();
  });

})();
