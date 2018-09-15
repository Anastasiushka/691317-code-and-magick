'use strict';

(function () {
	var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  window.setup = setup;
	var setupSubmit = setup.querySelector('.setup-submit');
	window.setupSubmit = setupSubmit;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardForm = setup.querySelector('.setup-wizard-form');

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
})();
