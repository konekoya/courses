const { interval, of } = require("rxjs");
const { ajax } = require("rxjs/ajax");
const {
  map,
  retryWhen,
  scan,
  takeWhile,
  tap,
  take,
  catchError,
  retry,
  delay
} = require("rxjs/operators");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let swallowError = true;

//#region
// interval(200)
//   .pipe(
//     map(x => {
//       console.log("attempting: " + x);

//       if (x === 1) {
//         throw "error processing: " + x;
//       }

//       return x;
//     })
// retryWhen(errors => {
//   if (swallowError) {
//     return errors.pipe(
//       tap(err => console.log(err)),
//       scan(acc => acc + 1, 0),
//       tap(retryCount => {
//         if (retryCount === 2) {
//           console.log("Swallowing error and completing");
//         } else {
//           console.log("Retrying whole source - retry #", retryCount);
//         }
//         return retryCount;
//       }),
//       takeWhile(errorCount => errorCount < 2)
//     );
//   } else {
//     return errors.pipe(
//       tap(err => console.log(err)),
//       scan(acc => acc + 1),
//       tap(retryCount => {
//         if (retryCount === 2) {
//           console.log("Failing");
//           throw "oops";
//         } else {
//           console.log("Retrying whole source - retry #", retryCount);
//         }
//       })
//     );
//   }
// })
// )
// .subscribe(
//   v => console.log("Successfully processed", v),
//   e => console.log("***** Error *****", e),
//   () => console.log("Completed successfully")
// );

//#endregion

function createXHR() {
  return new XMLHttpRequest();
}

const ajax$ = ajax({
  createXHR,
  url: "https://api.hnpwa.com/v0/xxxx",
  crossDomain: true,
  withCredentials: false,
  method: "GET",
  body: { since: 0, mode: "Messages", msgCount: 1000 }
});

// ajax$
//   .pipe(
//     scan(acc => acc + 1, 0),
//     tap(count => console.log("Attempt: ", count)),
//     map(res => res.response.endpoints)
//     // retry(2)
//     // catchError(err => of(err.message))
//   )
//   .subscribe(
//     v => console.log(v),
//     e => console.log(e),
//     () => console.log("DONE")
//   );

interval(20)
  .pipe(take(5))
  .pipe(
    scan(count => count + 1, 0),
    map(x => {
      if (x === 2) {
        throw "Error!";
      }

      return x;
    }),
    retryWhen(errors => {
      return errors.pipe(take(count === 3));
    })
  )
  .subscribe(
    v => console.log("Success!", v),
    e => console.log("Error!", e),
    () => console.log("DONE")
  );

// let errorFixed = false;

// interval(1000)
//   .pipe(take(5))
//   .pipe(
//     map(val => {
//       if (val === 3) {
//         console.log("retrying");

//         throw { error: "ERROR" };
//       }

//       return val;
//     }),
//     retryWhen(err => {
//       return err.pipe(take(3)); // 3 times
//     })
//   )

//   .subscribe(
//     v => console.log(v),
//     e => console.log(e),
//     () => console.log("DONE")
//   );
