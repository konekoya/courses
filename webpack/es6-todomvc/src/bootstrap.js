/* global app, $on */
(function(window) {
  'use strict';

  log('hey');
  $on(window, 'load', app.onLoad);
  $on(window, 'hashchange', app.onLoad);
})(window);
