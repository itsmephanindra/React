/*
Task: 
1. Create arrays of names and emails, print all the items from both the arrays. 
2. Create array of 5 youtube video titles and update 3rd and 4th items (3 and 4 are index numbers).

*/

var names=["Phanindra","Kumar","Bulusu"];
var emails=["phanindra@example.com","kumar@example.com","bulusu@example.com"];
var videoTitles=["Video 1","Video 2","Video 3","Video 4","Video 5"];

console.log("Emails:"+ emails);
console.log("Names:"+ names);

console.log("Video Titles:"+ videoTitles);

videoTitles[2]="Updated Video 3";
videoTitles[3]="Updated Video 4";

console.log("Video Titles:"+ videoTitles);




