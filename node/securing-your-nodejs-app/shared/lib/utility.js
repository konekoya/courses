'use strict';
import toastr from 'toastr';

export function getMinimumDate(dates) {
  if (!dates.length) return;
  return dates.reduce(function(a, b) {
    return a < b ? a : b;
  });
}

export function getMaximumDate(dates) {
  if (!dates.length) return;
  return dates.reduce(function(a, b) {
    return a > b ? a : b;
  });
}

export function getPercentageOfTextRoundedToNextFullWord(text, perc) {
  const textToManipulate = text || '';
  const percentage = perc > 0 < 100 ? perc : 100;
  const subText = textToManipulate.substr(
    0,
    (percentage / 100) * textToManipulate.length,
  );

  return subText.substr(0, Math.min(subText.length, subText.lastIndexOf(' ')));
}

export function displayNotification(
  alert = 'success',
  title,
  message,
  options,
) {
  const toastrOptions = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-center',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    toastClass: 'alert',
    iconClasses: {
      error: 'alert-error',
      info: 'alert-info',
      success: 'message-success',
      warning: 'alert-warning',
    },
  };

  toastr.options = Object.assign({}, toastrOptions, options);
  toastr[alert](title, message);
}
