var express = require("express");
var app = express(); // create an app


app.get('/', (req, res) => {
    console.log("Someone wants the root page");
    res.send("Hello my friend!");
});

app.get('/contact', (req, res) =>{
    res.send("This will be the contact page, people working over here!!!");
});

app.get('/about', (req, res) =>{
    res.send("Shameika Simmons");
});

app.get('/exc/:message', (req, res) => {
    console.log("Message from client: ", req.params.message);
    
    var msj = req.params.message;
    var vowels = '';
    var allVowels = ['a','e','i','o','u'];

    // 1 travel the msj string and print on the console each letter
    for(var i=0; i < msj.length; i++){
        var letter = msj[i];

        
        // 2 check if each letter is a vowel
        //      if it is, add the vowel to vowels string
        if(allVowels.indexOf(letter.toLowerCase()) != -1){
           
            // DECIDE
            vowels += letter;
        }

        // 3 return each vowel ONLY ONCE
        // hellooo -> eo
        // This is a test => iae
    }
    
    
    res.status(202);
    res.send(vowels);
});

app.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
    console.log("Press Ctrl+C to kill it");
});