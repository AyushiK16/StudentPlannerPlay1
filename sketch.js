var firstButton;
var bg;
var dashboardImage, breakImage, reminderImage, syllabusImage, toDoImage, loginImage;
var bgSprite;
var subjectDropbox;
var chosenSubject, chosenTerm;
var x = 1;
var inputSyllabus;
var syllabusPage, reminderPage, toDoPage, breakPage, loginPage;
var gottenSyllabus, valueDropbox1, valueDropbox2;
var y = 180;
var reminderState = 0;
var mouseNo = 0;

var trexImg;
var mazeImg;

var imageForMaze, imageForTrex;

var dateInputList = [];

var engSyllabus = "random";
var Trial = "hello";


let input;
let img;

var isReminder;

var rollNo = 1;
var newIndex = 0;
var subjectName, subjectDetail;

var finalSyllabus = [];

var array1 = [];

var subjectName1 = null;
var subjectName2 = null;
var subjectName3 = null;
var subjectName4 = null;
var subjectName5 = null;
var subjectName6 = null;

var subjectDetail1 = null;
var subjectDetail2 = null;
var subjectDetail3 = null;
var subjectDetail4 = null;
var subjectDetail5 = null;
var subjectDetail6 = null;

var tod1 = null;
var tod2 = null;
var tod3 = null;
var tod4 = null;
var tod5 = null;
var tod6 = null;
var tod7 = null;
var tod8 = null;
var tod9 = null;
var tod10 = null;

var toDate1= null;
var toDate2 = null;
var toDate3 = null;
var toDate4 = null;
var toDate5 = null;
var toDate6 = null;
var toDate7 = null;
var toDate8 = null;
var toDate9 = null;
var toDate10 = null;


var loginNumber = 1;
var checkPass;
var isLoggedIn = false;

var username;

var indexNo = 0;

var readTheList = false;
var determinerNumber;




function preload(){
  dashboardImage = loadImage("pictures/dashboard.png");
  breakImage = loadImage("pictures/breakGames.png");
  reminderImage = loadImage("pictures/reminders.png");
  syllabusImage = loadImage("pictures/syllabus.png");
  toDoImage = loadImage("pictures/toDoList.png");
  imageForTrex = loadImage("pictures/trexGame.png");
  imageForMaze = loadImage("pictures/gameMazeRunner.png");
  loginImage = loadImage("pictures/loginScreen.jpg");


}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight -30);
  database = firebase.database();

  

  



  //readSyllabus();

  

  //rectMode(CENTER);
  //bgSprite = createSprite(200, 275, 400, 550);
  
  //bgSprite = createSprite(1440, 900);
  //bgSprite.addImage(dashboardImage);
  
  //bgSprite.addImage("pictures/dashboardImage");

  firstButton = new Button();
  syllabusPage = new Syllabus();
  reminderPage = new Reminder();
  toDoPage = new ToDoList();
  breakPage = new BreakGame();
  dashboardPage = new Dashboard();
  loginPage = new LoginScreen();

  trexImg = createSprite(displayWidth/2 - 70, displayHeight/2 - 270, 50, 50);
  mazeImg = createSprite(displayWidth/2 + 180, displayHeight/2 - 270, 50, 50);
  mazeImg.addImage(imageForMaze);
  trexImg.addImage(imageForTrex);

  trexImg.visible = false;
  mazeImg.visible = false;

  

}

function draw() {
  loginPage.display();
  //breakPage.hide();
  //bgSprite.addImage(dashboardImage);

  //background("black");  



  /*
  firstButton.display();
  dashboardImage.resize(800,0);
  breakImage.resize(800,0);
  reminderImage.resize(800,0);
  syllabusImage.resize(800,0);
  toDoImage.resize(0,displayWidth - 800);
  imageForTrex.resize(100,0);
  imageForMaze.resize(100,0);
  //console.log(displayWidth, displayHeight);
  */
  imageForTrex.resize(100,0);
  imageForMaze.resize(100,0);
  //syllabusPage.readDropbox();
  //syllabusPage.checkOptions();

  if(isLoggedIn === false){
    tryToRead();
  }


  if(isLoggedIn === true){
    
    //input = createFileInput(handleFile);
    if(isReminder !== 1){
      input = createFileInput(handleFile);
      input.hide();
      //console.log(isReminder)
    }
    //console.log(isReminder)

  reminderPage.display();
  toDoPage.display();
  syllabusPage.display();
  breakPage.display();
  dashboardPage.display()
  loginPage.hide();

  

  
  

  if(isReminder===1){
    input.position(displayWidth/2 - 20, displayHeight/2 - 340);
    input.show();
  }

  else if(isReminder === 0){
    input.hide();
  }

  else{
    input.hide();
  }

  if(img && isReminder === 1) {
    image(img, 0, 0, width, height);

  }
  drawSprites();


  }
 
  
}

function handleFile(file) {
   // if(isReminder===1){
      print(file);
      if (file.type === 'image') {
        img = createImg(file.data, '');
        img.hide();
      } else {
        img = null;
      }
   // }
}

function tryToRead(){
  var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/');
  dbRef.update({
    "RollNo" : 1
  }) 

}




/*
STRUCTURE OF THE GAME
We will be needing:
- Main Menus:
  =Dashboard - everything for that day
  =To-Do List - Homework + Auto-generated task list
  =Syllabus - all subjects and their individual syllabus + their exam dates
  =Caclulator Page - percentage, 
  =Break Games - games that i will make 
  =Reminders - remind you to complete reminders
- An Animation Guide - guide through the app - cartoon
- Need a database to store the data collected
- Notifications ( reminders for compltetion and submission, etc)
- Search bar - search anything in the app

HLD - high level document - how the flow will go form one point to another.
Knowledge Base - additional things brilliant students can do ( other than school activites - can learn something on the app itslef
  like programing or maths tricks etc)
Make all the background and buttons
Login and Registeration Pages
Flow from on menu to another 

1. Dashboard :
- to do list
- reminders - an alert 
- upcoming exam date, calculate the date and 15 days before it will be shown
- syllabus - only for the upcoming exam

SYLLABUS
we need a:
- 2 input/ dropdown boxes - subject, and syllabus for the specified term
- display the information on the screen, about the database.
- define all the syllabus.

TO-DO LIST
- make input box to enter the things to be done.
- create a delete button and a done button for the user to check of things of the list
 and then delete it.

 update(){
        var engSyllRef = database.ref('Syllabus/Subjects/English/engSyllabus')
        database.ref(engSyllRef).set({
            engSyllabus: this.englishSyllabus,
        });
        console.log("write the data");
    }


    if(reminderState===1){
    console.log("reminder button is not there");
    toDoPage.displayTo();
    toDoPage.hide();
    

    reminderState = 0;
  }

  function readSyllabus(){
  var dbRef = database.ref("Syllabus/English");
  dbRef.on("value", function(data){
    //console.log(data.val());

  })
  //console.log("dbRef");
}

*/