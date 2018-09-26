'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DIALOG_START_TOP = 80 + 'px';
  var DIALOG_START_LEFT = 50 + '%';
  var setup = document.querySelector('.setup');
  window.setup = setup;
  var setupSubmit = setup.querySelector('.setup-submit');
  window.setupSubmit = setupSubmit;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var wizardForm = document.querySelector('.setup-wizard-form');
  window.wizardForm = wizardForm;
  var userDialog = document.querySelector('.setup');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var onSetupSubmitClick = function () {
    window.wizardForm.submit();
  };

  var onSetupSubmitPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.wizardForm.submit();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupSubmit.addEventListener('click', onSetupSubmitClick);
    setupSubmit.addEventListener('keydown', onSetupSubmitPress);
    setupDialogElement.style.top = DIALOG_START_TOP;
    setupDialogElement.style.left = DIALOG_START_LEFT;
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

  var onDialogHandlerMouseDown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    window.startCoords = startCoords;

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (downEvt) {
          downEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  dialogHandler.addEventListener('mousedown', onDialogHandlerMouseDown);

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  wizardForm.addEventListener('submit', function (evt) {
    window.backend.save(
        new FormData(wizardForm),
        function () {
          userDialog.classList.add('hidden');
        },
        errorHandler
    );
    evt.preventDefault();
  });
})();
