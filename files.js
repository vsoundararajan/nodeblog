const FS = require("fs");

// 
FS.readFile("./another.js", (err, data) => {
  if(err){
    console.log(err);
  }
  console.log(data);
});

console.log("This is the last line");

FS.writeFile("./test.txt", "asdasdasd", () => {
   console.log("File is written");
});
