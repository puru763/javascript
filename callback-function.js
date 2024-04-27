// function orderFood(item, callback) {
//     console.log(`Order placed for ${item}`);
//     setTimeout(function() {
//         callback("Your food is ready!");
//     }, 3000);
// }

// orderFood("Pizza", function(message) {
//     console.log(message); 
// });



function downloadFile(url, callback) {
    console.log(`Downloading file from ${url}`);
    setTimeout(function() {
        callback("File downloaded successfully!");
    }, 5000);
}

downloadFile("example.com/file.pdf", function(message) {
    console.log(message); 
});