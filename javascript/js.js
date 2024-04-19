/* LIST OF VARIABLES */	
	
var questionState = 0;	//Keeps track of users place in quiz
var quizActive = true;	//True until last question is answered
    
var userStats =	[
                    0,	//Akko 3061 (plastic) 10060
                    0, 	//RK68 (plastic) 10065
                    0, 	//RedragonK673 Pro (plastic)  10075
                    0, 	//Akko 3087DS (plastic) 10080
                    0, 	//Akko 3098B (plastic) 10096
                    0,	//Bakeneko60 20060
                    0,  //iquinix Q66 20065
                    0,  //Ajazz AC081 20075
                    0,  //NK87Lite (plastic) 20080
                    0,  //Keychron K10 Pro (plastic) 20096
                    0,  //Keychron Q4 Pro 30060
                    0,  //Tofu65V2 30065
                    0,  //DareuA84 Pro 30075
                    0,  //Keychron Q3 Pro 30080
                    0,  //Yunzii Ck98 30096
                    0,  //Mode Tempo 40060
                    0,  //Brutal65 V2 40065
                    0,  //Keychron Q1 Max 40075
                    0,  //Keychron Q3 Max 40080
                    0,  //Brutal V2 1800 40096
                ];

var tempStats = userStats; //Holds stat increases relating to user selection

/* QUIZ BUILDING VARIABLES */

//The following array contains all question text elements

var questionText =	[															
                        "What is your preferred budget?", 	//q1
                        "What is your layout of choice?", 					//q2
                        "What case material suits your needs?", 	//q3
                        /*"Which case material suits your needs?", 				//q4
                        "What did you listen to in the 90s/early 00s?", 			//q5
                        "What was your go to computer program at school?" 	*/		//q6
                    ];

//The following array contains all answer text elements for each question

var answerText =	[		//question 1 answers													
                        [	"Under $100", 				
                            "$100-$200", 
                            "$200-$300",
                            "$300 and Over"],							
                            
                            //question 2 answers
                        [	"60%", 							
                            "65%",
                            "75%",
                            "80% (TKL)",
                            "96%/Full Size"],
                           
                            
                            //question 3 answers
                        [	"Plastic/Polycarb", 
                            "Metal/Aluminum",
                         ],
                            
                          /*  //question 4 answers
                        [	"Plastic/Polycarb", 
                            "Metal/Aluminum",
                            ],*/
                            
                          /*  //question 5 answers
                        [	"Spice Girls",
                             "I didn't listen to music", 
                            "rage",
                            "Backstreet Boys",
                             "The sweet sound of dial up",
                            "So Fresh CDs"],		

                            //question 6 answers								
                        [	"Kid Pix", 
                            "Minesweeper",
                            "Lemmings",
                            "Zoombinis",
                            "Microsoft Paint",
                            "Pinball"]*/
                    ]

//The following array contains all personality stat increments for each answer of every question

var answerValues =	[		//question 1 answer values
                        [	[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 		
                            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],		
                            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
                            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
                           /* [2,1,3,0,0,0],
                            [1,0,2,0,3,0] */
                        ],	
                    
                            //question 2 answer values
                        [	[2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0], 
                            [0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0],
                            [0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0],
                            [0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0],
                            [0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,],
                            //[3,0,1,0,2,0] 
                        ],

                            //question 3 answer values
                        [	[1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0], 
                            [0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
                           /* [1,0,3,0,2,0],
                             [0,3,0,1,2,0],
                            [0,0,0,2,1,3],
                            [0,0,0,3,1,2] */
                        ],
                            
                           /* //question 4 answer values
                        [	[2,0,3,0,1,0], 
                            [0,1,0,3,0,2],
                            [0,3,2,0,0,1],
                             [0,0,0,2,1,3],
                            [2,0,0,0,3,1],
                            [3,0,0,2,1,0] 
                        ],
                            
                           //question 5 answer values
                        [	[3,0,0,0,2,1], 
                            [0,2,3,1,0,0],
                            [0,0,0,2,1,3],
                             [1,3,0,0,0,2],
                            [0,0,0,3,2,1],
                            [1,0,2,0,3,0] 
                        ],
                            
                            //question 6 answer values
                        [	[1,0,0,3,2,0], 
                            [0,3,0,2,0,1],
                            [3,1,0,0,0,2],
                             [1,0,0,2,3,0],
                            [0,0,3,2,1,0],
                            [0,0,1,2,0,3] 
                        ]*/
                    ]

/* SHORTCUT VARIABLES */
//so I don't have to keep typing

var results = document.getElementById("results");
var quiz = document.getElementById("quiz");
var body = document.body.style;
var printResult = document.getElementById("topScore");
var buttonElement = document.getElementById("button");
var myLink = document.getElementById("myLink");

/* QUIZ FUNCTIONALITY */

buttonElement.addEventListener("click", changeState);	//Add click event listener to main button

/* This function progresses the user through the quiz */

function changeState() {								
    
    updatePersonality(); 	//Adds the values of the tempStats to the userStats										
    
    if (quizActive) {	
        
        /*True while the user has not reached the end of the quiz */
        
        initText(questionState);	//sets up next question based on user's progress through quiz
        questionState++;			//advances progress through quiz
        
        buttonElement.disabled = true; //disables button until user chooses next answer
        buttonElement.innerHTML = "Please select an answer";			
        buttonElement.style.opacity = 0.7;
        
    } else {
        
        /*All questions answered*/
        
        setCustomPage(); //runs set up for result page
    }
}

/* This function determines the question and answer content based on user progress through the quiz */

function initText(question) {							
    
    var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content
    
    /* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/
    
    for (i = 0; i < answerText[question].length; i++) {		
        
        answerSelection += "<li><input type='radio' name='question" +
        (question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
    }
    
    document.getElementById("questions").innerHTML = questionText[question];	//set question text
    document.getElementById("answers").innerHTML = answerSelection;				//set answer text
}

/* This function is called when a user selects an answer, NOT when answer is submitted */

function setAnswer(input) {
            
    clearTempStats();									//clear tempStats in case user reselects their answer
    
    tempStats = answerValues[questionState-1][input];	//selects personality values based on user selection 
            
    if (questionState < questionText.length) {
        
        /*True while the user has not reached the end of the quiz */
        
        buttonElement.innerHTML = "Continue";
        buttonElement.disabled = false;
        buttonElement.style.opacity = 1;
                
    } else {
        
        /*All questions answered - QUESTION TIME IS OVER!*/
        
        quizActive = false;
        buttonElement.innerHTML = "Display your custom website"
        buttonElement.disabled = false;
        buttonElement.style.opacity = 1;
    }
}

/* This function sets tempStats to 0 */

function clearTempStats() {
    
    tempStats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	
}

/*This function adds the values of the tempStats to the userStats based on user selection */

function updatePersonality() {
    
    for (i = 0; i < userStats.length ; i++) {
        userStats[i] += tempStats[i];
    }
}

/* This function determines the highest personality value */

function setCustomPage() {
    
    var highestStatPosition = 0;	//highest stat defaults as 'cute'
    
    /* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */
    
    for (i = 1 ; i < userStats.length; i++) {
        
        if (userStats[i] > userStats[highestStatPosition]) {
            highestStatPosition = i;
        }
    }
    
    displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered
    
    /* Hides the quiz content, shows results content */
    quiz.style.display = "none";		
}

/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */

/* The following code manipulates the CSS based on the personality results */
        
function displayCustomPage(personality) {
    switch (personality) {
        
        case 0:	//cute code
            results.style.display = "inline-block";
            results.classList.add("onehundredsixty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.backgroundRepeat = "repeat";
            body.cursor = "url(https://web.archive.org/web/20090830074921/http://www.geocities.com/anneli1970/hkanicursor.gif), auto";
            printResult.innerText = "Akko 3061";
            myLink.setAttribute("href", "https://en.akkogear.com/product/neon-3061rgb-bt-5-0mechanical-keyboard/");
            break;
            
        case 1:		//spooky
            results.style.display = "inline-block";
            results.classList.add("onehundredsixtyfive");
            body.background = "none";
            body.backgroundColor= "#91c1d1"
            body.backgroundRepeat = "repeat";
            body.cursor = "url (https://web.archive.org/web/20090830074921/http://www.geocities.com/anneli1970/hkanicursor.gif), auto";
            printResult.innerText = "Rk68";
            //const myLink = document.getElementById("myLink");
            //set href
            myLink.setAttribute("href", "https://www.amazon.ca/RK-ROYAL-KLUDGE-Stand-Alone-Multi-Device/dp/B08G52MB1J?th=1");
            
            break;
            
        case 2:		//lame
            results.style.display = "inline-block";
            results.classList.add("onehundredseventyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091027003810/http://ca.geocities.com/EverlastingIllusions/Miscellanous/Cursor9.gif), auto";
            printResult.innerText = "Redragon K673 Pro";
            myLink.setAttribute("href", "https://www.amazon.ca/Redragon-K673-Mechanical-Dedicated-Absorbing/dp/B0CDX5XGLK/ref=asc_df_B0CDX5XGLK/?tag=googleshopc0c-20&linkCode=df0&hvadid=682879850817&hvpos=&hvnetw=g&hvrand=7509501208283630729&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9000945&hvtargid=pla-2219003468125&psc=1&mcid=d22eeb1e0e1b3020a47e3b0283a46cb4&gad_source=1")
            break;
            
        case 3:		//nerdy
            results.style.display = "inline-block";
            results.classList.add("onehundredeighty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20090820061156/http://geocities.com/Tokyo/Club/8802/pikacursor.gif), auto";
            printResult.innerText = "Akko 3087DS";
            myLink.setAttribute("href", "https://en.akkogear.com/product/horizon-3087-ds-mechanical-keyboard/");
            break;
            
        case 4:		//silly
            results.style.display = "inline-block";
            results.classList.add("onehundredfull");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20090731114836/http://hk.geocities.com/godofcat/mcmug/cursor1p2.gif), auto";
            printResult.innerText = "Akko 3098B";
            myLink.setAttribute("href", "https://en.akkogear.com/product/blackgold-3098b-mechanical-keyboard/");
            break;
            
        case 5:		//cool
            results.style.display = "inline-block";
            results.classList.add("twohundredsixty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Bakeneko60";
            myLink.setAttribute("href", "https://cannonkeys.com/products/bakeneko-60");
            break;
            

        case 6:		//cool
            results.style.display = "inline-block";
            results.classList.add("twohundredsixtyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Iqunix Q66";
            myLink.setAttribute("href", "https://iqunix.store/collections/q66-series");
            break;
        
        case 7:		//cool
            results.style.display = "inline-block";
            results.classList.add("twohundredseventyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Ajazz AC081";
            myLink.setAttribute("href", "https://www.yunzii.com/en-ca/products/yunzii-ajazz-ac081-gasket-hot-swappable-rgb-wired-aluminum-mechanical-keyboard-peace");
            break;
       
        case 8:		//cool
            results.style.display = "inline-block";
            results.classList.add("twohundredeighty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "NK87 Lite";
            myLink.setAttribute("href", "https://novelkeys.com/collections/keyboards/products/nk87-tfue-edition");
            break;
        
        case 9:		//cool
            results.style.display = "inline-block";
            results.classList.add("twohundredfull");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Keychron K10 Pro";
            myLink.setAttribute("href", "https://www.keychron.com/products/keychron-k10-pro-qmk-via-wireless-mechanical-keyboard");
            break;
        
        case 10:		//cool
            results.style.display = "inline-block";
            results.classList.add("threehundredsixty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Keychron Q4 Pro";
            myLink.setAttribute("href", "https://www.keychron.com/products/keychron-q4-pro-qmk-via-wireless-custom-mechanical-keyboard");
            break;
        
        case 11:		//cool
            results.style.display = "inline-block";
            results.classList.add("threehundredsixtyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Tofu65 V2";
            myLink.setAttribute("href", "https://kbdfans.com/collections/tofu65-2-0/products/ready-to-use-tofu65-2-0-hot-swap-keyboard");
            break;
        
        case 12:		//cool
            results.style.display = "inline-block";
            results.classList.add("threehundredseventyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Dareu A84 Pro";
            myLink.setAttribute("href", "https://epomaker.com/products/dareu-a84-pro");
            break;
        
        case 13:		//cool
            results.style.display = "inline-block";
            results.classList.add("threehundredeighty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Keychron Q3 Pro";
            myLink.setAttribute("href", "https://www.keychron.com/products/keychron-q3-pro-qmk-via-wireless-custom-mechanical-keyboard");
            break;
        
        case 14:		//cool
            results.style.display = "inline-block";
            results.classList.add("threehundredfull");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Yunzii Ck98";
            myLink.setAttribute("href", "https://www.yunzii.com/en-ca/products/yunzii-coolkiller-ck98-wireless-hot-swappable-oled-mechanical-keyboard-math");
            break;
        
        case 15:		//cool
            results.style.display = "inline-block";
            results.classList.add("fourhundredsixty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Mode Tempo";
            myLink.setAttribute("href", "https://modedesigns.com/products/tempo");
            break;
        
        case 16:		//cool
            results.style.display = "inline-block";
            results.classList.add("fourhundredsixtyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Brutal65 V2";
            myLink.setAttribute("href", "https://cannonkeys.com/products/brutal-v2-65-keyboard");
            break;
        
        case 17:		//cool
            results.style.display = "inline-block";
            results.classList.add("fourhundredseventyfive");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Keychron Q1 Max";
            myLink.setAttribute("href", "https://www.keychron.com/products/keychron-q1-max-qmk-via-wireless-custom-mechanical-keyboard");
            break;
        
        case 18:		//cool
            results.style.display = "inline-block";
            results.classList.add("fourhundredeighty");
            body.background = "none";
            body.backgroundColor = "#91c1d1";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Keychron Q3 Max";
            myLink.setAttribute("href", "https://www.keychron.com/products/keychron-q3-max-qmk-via-wireless-custom-mechanical-keyboard");
            break;
        
        case 19:		//cool
            results.style.display = "inline-block";
            results.classList.add("fourhundredfull");
            body.background = "none";
            body.backgroundColor = "#008080";
            body.cursor = "url(https://web.archive.org/web/20091026232535/http://www.geocities.com/john_miles_the_cucumber/arnoldcursorpreview.gif), auto";
            printResult.innerText = "Brutal V2 1800";
            myLink.setAttribute("href", "https://cannonkeys.com/products/brutal-v2-1800-keyboard");
            break;
         
        default: 
            document.getElementById("error").style.display = "inline-block";

    }
}