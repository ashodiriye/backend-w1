const express = require('express');
const exphbs= require('express-handlebars');
const fs= require('fs');
const app = express();
const path = require('path');

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));

const movies = [
    { title: "Pretty in Pink", image: "./public/image/pip.jpg" },
    { title: "Love Jones", image: "./public/image/lj.jpg" },
    { title: "Black Panther", image: path.join(__dirname, "public/image/bp.jpg") },
    { title: "Planet of the Apes", image: path.join(__dirname, "public/image/wftpota.jpg") },
    { title: "Shang-Chi", image: path.join(__dirname, "public/image/sc.jpg") }
  ];

app.get('/', (req, res) => {

    try {
        fs.readFile('./top5movies.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } 
        
            const movies = data.split('\n');
            const movieArray= [movies];
            console.log(typeof movieArray);
            console.log(movieArray);
            res.render('home', {movies: movieArray});
         });

}catch(e){
    console.log('Problem!');
}

});

app.listen(8000, () => {
    console.log('http://localhost:8000/');
});














/*övning 2 const express = require('express');

const app = express();

app.get('/', (req, res) => {
     res.send('Hello World');
});

app.listen(8000, () => {
   console.log('http://localhost:8000/');
})*/



/*övning 1 const fs = require('fs');

fs.readFile('numbers.txt', (err, data) => {
    if (err) throw err;
  
    const numbers = data.toString().split('\n').map(Number);
    numbers.sort((a, b) => a-b);

fs.writeFile('sortedNumbers.txt',numbers.join ('\n'), (err) => {
    if (err) throw err;
    console.log('sorted!');
    
});

});*/

/*In the code you provided, the "fs.readFile" function is used to read the contents of a file named "numbers.txt". The "readFile" function takes two arguments: the path of the file to read, and a callback function that will be called with the data from the file once it has been read.

The reason we need to pass the "data" argument to the callback function is that the "fs.readFile" function reads the contents of the file asynchronously. This means that when we call "fs.readFile", the program will continue to execute other code while the file is being read. Once the file has been read, the callback function will be called with the data from the file as its argument.

In the code you provided, the callback function takes two arguments: "err" and "data". The "err" argument will contain an error message if there was a problem reading the file. The "data" argument will contain the contents of the file as a buffer object.

In order to work with the contents of the file, we need to convert the buffer object to a string using the "toString" method. Once we have a string representation of the file contents, we can use the "split" method to split the string into an array of strings using the newline character ("\n") as the delimiter. Finally, we use the "map" method to convert each string in the array to a number using the "Number" function.

By doing this, we can work with the contents of the file as an array of numbers, which allows us to sort the numbers and write them to a new file in the desired format.*/







