

// var PdfReader = require("pdfreader").PdfReader;
// new PdfReader().parseFileItems("sample.pdf", function(err, item){
//  if (item && item.text)
//  var a  = JSON.stringify(item.text);
// //  var b = a.match(Top10Stocks);
//  console.log(a);
// });



// const fs = require('fs');
// const pdfParse = require('pdf-parse');

// const pdfFile = fs.readFileSync('sample.pdf');

// pdfParse(pdfFile).then(function(data){
// 	console.log(data.numpages);
// 	console.log(data.info);

// 	console.log(data.text);
// 	fs.writeFileSync('../practice/test.txt', data);
// })


// j-pdfjson --- json


// let fs = require('fs'),
// PDFParser = require("j-pdfjson");
 
// let pdfParser = new PDFParser();
 
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// 	fs.writeFileSync("../practice/test.csv", pdfParser.getRawTextContent());
// 	var a = JSON.stringify(pdfData);
// 	console.log(a.Pages);
// });
 
// pdfParser.loadPDF("sample.pdf");



// j-pdfjson --- json

// let fs = require('fs'),
// PDFParser = require("j-pdfjson");

// let pdfParser = new PDFParser();

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
// fs.writeFileSync("../practice/test.json", JSON.stringify(pdfData));

// });

// pdfParser.loadPDF("sample.pdf");