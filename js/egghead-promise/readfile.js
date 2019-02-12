const fs = require("fs");

const readFile = (file, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, content) => {
      if (err) {
        reject(err);
      }

      resolve(content);
    });
  });
};

readFile("__filename", "utf8")
  .then(content => console.log(content))
  .catch(err => console.log(err));

// Read file with Call back
// fs.readFile("__filename", "utf8", (err, content) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(content);
// });
