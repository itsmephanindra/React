// 1. Create an array for 5 emails and print all the emails using while loop. 
// 2. Create JSON array of 3 youtube videos and print video titles using while loop.

var emails = [
    "example1@gmail.com",
    "example2@gmail.com",
    "example3@gmail.com",
    "example4@gmail.com",
    "example5@gmail.com"];

    var videos = [
    {
        title: "Video 1",
        url: "https://www.youtube.com/watch?v=1"
    },
    {
        title: "Video 2",
        url: "https://www.youtube.com/watch?v=2"
    },
    {
        title: "Video 3",
        url: "https://www.youtube.com/watch?v=3"
    }
];

var i = 0;
while (i < emails.length) {
    console.log(emails[i]);
    i++;
}
var j = 0;
while( j< videos.length)
{

    console.log(videos[j].title);
    j++;
}