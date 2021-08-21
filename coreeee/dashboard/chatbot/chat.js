
// KEYWORD BANK

const HELLO = ["HI", "HEY", "SUP", "HELLO", "BONJOUR"]

const GOODBYE = ["BYE", "SEE YOU LATER", "GOTTA GO", "ADIOS", "SAYONARA", "BBIE", "BIE"]

const GREETINGS = ["WHATS UP", "HOW ARE YOU", "MORNING", "AFTERNOON", "EVENING", "SLEEP", "GOOD"];

const NAME = ["WHO", "CODED", "PROGRAMMED","YOUR NAME"]

const HOW = ["HOW", "WORK", "PLAN"]

const WHAT = ["WHAT", "WHATS", "IS VOTERFLUX"]

const BRUH = ["BRUH"]

//bot bruh words



// onclick submit function 

$("#submit").click(function(){
    //get message
    var message = document.getElementById("message").value;
    console.log(message);

    //show message
    var para = document.createElement("p");
    var text = document.createTextNode(message);
    para.className = "userMsg";
    para.appendChild(text);
    var invitext = document.getElementById("invitext");
    invitext.append(para);


    //interpret the message
    var message = message.toUpperCase();
    /* if(message.includes(HELLO)){
        console.log("bruh yes")
    } */
    var bro = message.replace(" ", ";");
    var words = bro.split(";");


    function findCommonElementhello(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("Hey there!");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:) yayayayaayaya :)
    } 

    function findCommonElementbye(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("see you later...");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 

    function findCommonElementgreet(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("I barely got made in time but i nice :)");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 

    function findCommonElementname(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("I am your personalised chat bot, you have 3 assignments due yet :))");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 


    function findCommonElementhow(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("I am your personalised chat bot, you have 3 assignments due yet :))");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 

    function findCommonElementwhat(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("I am your personalised chat bot, you have 3 assignments due yet :))");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 

    function findCommonElementbruh(array1, array2) { 
	
        // Loop for array1 
        for(let i = 0; i < array1.length; i++) { 
            
            // Loop for array2 
            for(let j = 0; j < array2.length; j++) { 
                
                // Compare the element of each and 
                // every element from both of the 
                // arrays 
                if(array1[i] === array2[j]) { 
                
                    // Return if common element found 
                    var para = document.createElement("p");
                    var text = document.createTextNode("/bruh.jpg");
                    para.className = "bottext";
                    para.appendChild(text);
                    var invitext = document.getElementById("invitext");
                    invitext.append(para); 
                } 
            } 
        } //CHAMAN IT WORKS NOW!!:)
    } 

    

    findCommonElementhello(words, HELLO);
    findCommonElementbye(words, GOODBYE);
    findCommonElementgreet(words, GREETINGS);
    findCommonElementname(words, NAME);
    findCommonElementhow(words, HOW);
    findCommonElementhow(words, WHAT);
    findCommonElementbruh(words, BRUH);


})