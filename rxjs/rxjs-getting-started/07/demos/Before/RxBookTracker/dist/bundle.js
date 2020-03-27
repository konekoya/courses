/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//#region Creating Observables\r\n// let allBooksObservable$ = Observable.create(subscriber => {\r\n//   if (document.title !== 'RxBookTracker') {\r\n//     subscriber.error('Incorrect page title.');\r\n//   }\r\n//   for (let book of allBooks) {\r\n//     subscriber.next(book);\r\n//   }\r\n//   setTimeout(() => {\r\n//     subscriber.complete();\r\n//   }, 2000);\r\n//   return () => console.log('Executing teardown code.');\r\n// });\r\n// allBooksObservable$.subscribe(book => console.log(book.title));\r\n// let source1$ = of('hello', 10, true, allReaders[0].name);\r\n// //source1$.subscribe(value => console.log(value));\r\n// let source2$ = from(allBooks);\r\n// //source2$.subscribe(book => console.log(book.title));\r\n// concat(source1$, source2$)\r\n//   .subscribe(value => console.log(value));\r\n// let button = document.getElementById('readersButton');\r\n// fromEvent(button, 'click')\r\n//   .subscribe(event => {\r\n//     console.log(event);\r\n//     let readersDiv = document.getElementById('readers');\r\n//     for (let reader of allReaders) {\r\n//       readersDiv.innerHTML += reader.name + '<br>';\r\n//     }\r\n//   });\r\n// let button = document.getElementById('readersButton');\r\n// fromEvent(button, 'click')\r\n//   .subscribe(event => {\r\n//     ajax('/api/readers')\r\n//       .subscribe(ajaxResponse => {\r\n//         console.log(ajaxResponse);\r\n//         let readers = ajaxResponse.response;\r\n//         let readersDiv = document.getElementById('readers');\r\n//         for (let reader of readers) {\r\n//           readersDiv.innerHTML += reader.name + '<br>';\r\n//         }\r\n//       });\r\n//   });\r\n//#endregion\r\n//#region Subscribing to Observables with Observers\r\n// let books$ = from(allBooks);\r\n// let booksObserver = {\r\n//   next: book => console.log(`Title: ${book.title}`),\r\n//   error: err => console.log(`ERROR: ${err}`),\r\n//   complete: () => console.log(`All done!`)\r\n// };\r\n// books$.subscribe(\r\n//   book => console.log(`Title: ${book.title}`),\r\n//   err => console.log(`ERROR: ${err}`),\r\n//   () => console.log(`All done!`)\r\n// );\r\n// let currentTime$ = new Observable(subscriber => {\r\n//   const timeString = new Date().toLocaleTimeString();\r\n//   subscriber.next(timeString);\r\n//   subscriber.complete();\r\n// });\r\n// currentTime$.subscribe(\r\n//   currentTime => console.log(`Observer 1: ${currentTime}`)\r\n// );\r\n// setTimeout(() => {\r\n//   currentTime$.subscribe(\r\n//     currentTime => console.log(`Observer 2: ${currentTime}`)\r\n//   );\r\n// }, 1000);\r\n// setTimeout(() => {\r\n//   currentTime$.subscribe(\r\n//     currentTime => console.log(`Observer 3: ${currentTime}`)\r\n//   );\r\n// }, 2000);\r\n// let timesDiv = document.getElementById('times');\r\n// let button = document.getElementById('timerButton');\r\n//let timer$ = interval(1000);\r\n// let timer$ = new Observable(subscriber => {\r\n//   let i = 0;\r\n//   let intervalID = setInterval(() => {\r\n//     subscriber.next(i++);\r\n//   }, 1000);\r\n//   return () => {\r\n//     console.log('Executing teardown code.');\r\n//     clearInterval(intervalID);\r\n//   }\r\n// });\r\n// let timerSubscription = timer$.subscribe(\r\n//   value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,\r\n//   null,\r\n//   () => console.log('All done!')\r\n// );\r\n// let timerConsoleSubscription = timer$.subscribe(\r\n//   value => console.log(`${new Date().toLocaleTimeString()} (${value})`)\r\n// );\r\n// timerSubscription.add(timerConsoleSubscription);\r\n// fromEvent(button, 'click')\r\n//   .subscribe(\r\n//     event => timerSubscription.unsubscribe()\r\n//   );\r\n//#endregion\r\n//#region Using Operators\r\n// ajax('/api/errors/500') // correct URL is '/api/books'\r\n//   .pipe(\r\n//     flatMap(ajaxResponse => ajaxResponse.response),\r\n//     filter(book => book.publicationYear < 1950),\r\n//     tap(oldBook => console.log(`Title: ${oldBook.title}`)),\r\n//     //catchError(err => of({title: 'Corduroy', author: 'Don Freeman'}))\r\n//     //catchError((err, caught) => caught)\r\n//     //catchError(err => throw `Something bad happened - ${err.message}`)\r\n//     catchError(err => return throwError(err.message))\r\n//   )\r\n//   .subscribe(\r\n//     finalValue => console.log(`VALUE: ${finalValue.title}`),\r\n//     error => console.log(`ERROR: ${error}`)\r\n//   );\r\n// let timesDiv = document.getElementById('times');\r\n// let button = document.getElementById('timerButton');\r\n// let timer$ = new Observable(subscriber => {\r\n//   let i = 0;\r\n//   let intervalID = setInterval(() => {\r\n//     subscriber.next(i++);\r\n//   }, 1000);\r\n//   return () => {\r\n//     console.log('Executing teardown code.');\r\n//     clearInterval(intervalID);\r\n//   }\r\n// });\r\n// let cancelTimer$ = fromEvent(button, 'click');\r\n// timer$.pipe(\r\n//   takeUntil(cancelTimer$)\r\n// )\r\n// .subscribe(\r\n//   value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,\r\n//   null,\r\n//   () => console.log('All done!')\r\n// );\r\n//#endregion\r\n//#region Creating Your Own Operators\r\n// function grabAndLogClassics(year, log) {\r\n//   return source$ => {\r\n//     return new Observable(subscriber => {\r\n//       return source$.subscribe(\r\n//         book => {\r\n//           if(book.publicationYear < year) {\r\n//             subscriber.next(book);\r\n//             if(log) {\r\n//               console.log(`Classic: ${book.title}`);\r\n//             }\r\n//           }\r\n//         },\r\n//         err => subscriber.error(err),\r\n//         () => subscriber.complete()\r\n//       );\r\n//     });\r\n//   }\r\n// }\r\n// function grabClassics(year) {\r\n//   return filter(book => book.publicationYear < year);\r\n// }\r\n// function grabAndLogClassicsWithPipe(year, log) {\r\n//   return source$ => source$.pipe(\r\n//     filter(book => book.publicationYear < year),\r\n//     tap(classicBook => log ? console.log(`Title: ${classicBook.title}`) : null)\r\n//   );\r\n// }\r\n// ajax('/api/books')\r\n//   .pipe(\r\n//     flatMap(ajaxResponse => ajaxResponse.response),\r\n//     // filter(book => book.publicationYear < 1950),\r\n//     // tap(oldBook => console.log(`Title: ${oldBook.title}`))\r\n//     // grabAndLogClassics(1930, false)\r\n//     // grabClassics(1950)\r\n//     grabAndLogClassicsWithPipe(1930, true)\r\n//   )\r\n//   .subscribe(\r\n//     finalValue => console.log(`VALUE: ${finalValue.title}`),\r\n//     error => console.log(`ERROR: ${error}`)\r\n//   );\r\n//#endregion\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });