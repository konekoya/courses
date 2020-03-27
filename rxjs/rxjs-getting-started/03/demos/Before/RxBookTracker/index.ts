import {
  Observable,
  of,
  from,
  fromEvent,
  concat,
  interval,
  timer,
  pipe,
  throwError
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, filter, tap, map, catchError } from "rxjs/operators";
import { allBooks, allReaders } from "./data";

//#region creating observable
// let button = document.getElementById("readersButton");

// fromEvent(button, "click").subscribe(event => {
// ajax("/api/readers").subscribe(res => console.log(res));
// });

// fromEvent(button, "click").subscribe(event => {
//   let readersDiv = document.getElementById("readers");

//   for (const reader of allReaders) {
//     readersDiv.innerHTML += reader.name + `<br>`;
//   }
// });

// let source1$ = of("hello", 10, true, allReaders[0].name);
// source1$.subscribe(value => console.log(value));

// let source2$ = from(allBooks);
// source2$.subscribe(book => console.log(book));

// concat(source1$, source2$).subscribe(value => console.log(value));

// let allBooksObservable$ = Observable.create(subscriber => {
//   if (document.title !== "RxBookTracker") {
//     debugger;
//     subscriber.error("Incorrect page title");
//   }

//   for (let book of allBooks) {
//     subscriber.next(book);
//   }

//   setTimeout(() => {
//     subscriber.complete();
//   }, 2000);

//   return () => console.log("Executing teardown code!");
// });

// allBooksObservable$.subscribe(book => console.log(book.title));

//#endregion

// let books$ = from(allBooks);

//#region subscribing to observables with observers

// books$.subscribe(
//   book => console.log(`Title: ${book.title}`),
//   err => console.log(`Error: ${err}`),
//   () => console.log("All done!")
// );

// let timesDiv = document.getElementById("times");
// let button = document.getElementById("timerButton");

// let timer$ = interval(1000);

// let timerSubscription = timer$.subscribe(
//   value =>
//     (timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`),
//   null,
//   () => console.log("All done!")
// );

// fromEvent(button, "click").subscribe(event => timerSubscription.unsubscribe());

//#endregion

ajax("/api/errors/500")
  .pipe(
    mergeMap(ajaxResponse => ajaxResponse.response),
    filter(book => book.publicationYear < 1950),
    tap(oldBook => console.log(`Title: ${oldBook.title}`))
    // catchError(err => of({ title: "Corduroy", author: "Don Freeman" }))
    catchError(err => throwError(err.message))
  )
  .subscribe(
    value => console.log(`VALUE: ${value.title}`),
    error => console.log(`ERROR: ${error}`)
  );
