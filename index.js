/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{
        message: "Type the url:",
        name:"url",
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
     var don =answers.url;
     var qr_don= qr.image(don, { type: 'png' });
     fs.writeFile("message.text",don,(err) => {
       if(err) throw err;
       console.log("The file has been saved!");
    });
    qr_don.pipe(fs.createWriteStream('i_love_qr.png'));
})
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } 
    else {
       console.log("Something else went wrong");
    }
  });


//   var qr = require('qr-image');
 
// var qr_svg = qr.image(, { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// const fs=require("fs");

// fs.writeFile("message.text",)