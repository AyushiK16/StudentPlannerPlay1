class Syllabus{
    constructor(){

        this.input1 = createInput("Subject Name" );
        this.inputDetail1 = createInput("Enter the details");
        //this.subjectNumberInput = createInput("Enter subject number (default is 1 and so on)")
        //this.subjectNo = createInput("1");

        this.greeting = createElement('h4');
        this.greeting2 = createElement('h4');

        this.syllabusButton = createButton('Syllabus');
        this.enterSyllabus = createButton("Save");
        this.doneSyllabus = createButton("Done");

        this.nextText = createElement('h4');

        this.syllabusText = createElement('h3');

        this.finalText = createElement('h2');


        this.try1 = createElement('h2');
        this.try2 = createElement('h2');

        this.x2 = createElement('h2');


    }
    
    hide(){
        this.input1.hide();
        this.inputDetail1.hide();
        //this.subjectNo.hide();    
        this.enterSyllabus.hide();
        this.doneSyllabus.hide();
        this.greeting.hide();
        this.syllabusText.hide();
    }
    
    display(){
        //image(syllabusImage, 0,-displayHeight*4,displayWidth, displayHeight*5);

        this.syllabusButton.position(displayWidth/2, displayHeight/2 + 238);
        this.enterSyllabus.position(displayWidth/2 + 10, displayHeight/4 + 80);
        //this.doneSyllabus.position(displayWidth/2 + 10, displayHeight/4 + 100)
        this.syllabusText.position(displayWidth/2 - 90, displayHeight/4 + 110)
        this.greeting.position(displayWidth/2 - 73, displayHeight/2 - 390);

        //this.finalText.position(displayWidth/2 - 40, displayHeight/4 + 140)
        this.try1.position(displayWidth/2 - 40, displayHeight/4 + 140)
        this.x2.position(displayWidth/2 - 73, displayHeight/2 - 350)   

        //this.enterSyllabus.hide();




        this.syllabusButton.mousePressed(()=>{
            //image(syllabusImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(syllabusImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);
            //imageMode(CENTER)
            //THIS -- image(syllabusImage, displayWidth ,displayHeight, displayWidth, displayHeight );
            

            
            this.readSyllabus2();
            this.updateSyllabus();
            this.readTry2();

            //this.updateNoOfSubjects();
            //this.readNoOfSubjects();

            this.input1.position(displayWidth/2 - 40, displayHeight/4);
            this.inputDetail1.position(displayWidth/2 - 40, displayHeight/4 + 30)
            //this.subjectNo.position(displayWidth/2 - 40, displayHeight/4 + 60);

            
            this.input1.show();
            this.inputDetail1.show();
           // this.subjectNo.show();
            this.enterSyllabus.show();

            //this.doneSyllabus.show();
            //this.inputExtra1.show();
            
            this.syllabusButton.hide();
            toDoPage.hide();
            toDoPage.show();

            reminderPage.hide();
            reminderPage.show();

            breakPage.hide();
            breakPage.show();

            dashboardPage.hide();
            dashboardPage.show();
        })

        

        this.enterSyllabus.mousePressed(()=>{
            if(rollNo <=6){
                
                
                //this.readRollNo();
                
                
                //this.readRollNo();
                //this.updateRollNo();

                //console.log("read - ", rollNo)
                
            
            //this.updateRollNo();
            //indexNo = 0;

            //this.readTry2();
            if(rollNo === null){
                rollNo = 1;
                console.log("rollno = 1")
            }
            
            //rollNo = indexNo;
            console.log("read", rollNo);

            //this.readRollNo();
            //indexNo = rollNo;
            //console.log(rollNo)
            //newIndex = newIndex + 1;
            //this.readNoOfSubjects();
            //indexNo = indexNo + 1;
            //this.updateNoOfSubjects();

            //console.log(rollNo)
            this.syllabusText.html("Check the dashboard to see your syllabus!" );
            this.syllabusText.show();

            if(rollNo === 1 ){
                subjectName1 = this.input1.value()
                subjectDetail1 = this.inputDetail1.value();
                console.log("inside if 1",rollNo)
                //rollNo = rollNo + 1;

                //this.x2.html(subjectName1);
            }

            if(rollNo === 2 ){
                subjectName2 = this.input1.value()
                subjectDetail2 = this.inputDetail1.value();
                console.log("inside if 2",rollNo)
                
                //this.x2.html(subjectName1);
            }


            if(rollNo === 3 ){
                subjectName3 = this.input1.value()
                subjectDetail3 = this.inputDetail1.value();
                console.log("inside if 3",rollNo)
                
                //this.x2.html(subjectName1);
            }


            if(rollNo === 4 ){
                subjectName4 = this.input1.value()
                subjectDetail4 = this.inputDetail1.value();
                console.log("inside if 4",rollNo)
                //this.x2.html(subjectName1);
            }


            if(rollNo === 5 ){
                subjectName5 = this.input1.value()
                subjectDetail5 = this.inputDetail1.value();
                //this.x2.html(subjectName1);
            }

            if(rollNo === 6 ){
                subjectName6 = this.input1.value()
                subjectDetail6 = this.inputDetail1.value();
                //this.x2.html(subjectName1);
            }

            this.greeting.html("Enter For The Next Subject");
            this.greeting.show();

            rollNo = rollNo + 1;
            indexNo = rollNo
            this.updateTry2();

            
            console.log("updated", rollNo);

            //var nameX = this.input1.value();
            //append(array1, nameX)
            //FROM HEREHERE

            //this.writeSyllabus();
            

           // var finalName = this.input1.value();
           // var finalDetails = this.inputDetail1.value();

            //this.try1.html(finalName);
            //for(var i = 0;i <= newIndex; i++){
                //var v = document.createElement('input1');
                //document.getElementById('array1').appendChild(v);

                //this.try1.html(array1[i]);
                //console.log(array1[i])
            //}

            //TO HERE

            }
            else{
                this.greeting.html("You can only enter 6 subjects!")
                this.greeting.show();

            }
            
            
        })
/*
        this.doneSyllabus.mousePressed(()=>{
            //this.writeSyllabus();
            this.syllabusText.html("Check the dashboard to see your syllabus!" );

            var finalName = this.input1.value();
           // var finalDetails = this.inputDetail1.value();

            //this.try1.html(finalName);
            for(var i = 0;i <= newIndex; i++){
                //var v = document.createElement('input1');
                //document.getElementById('array1').appendChild(v);

                this.try1.html(array1[i]);
                console.log(array1[i])
            }


        })
        */
    }
    

    

    show(){
        //this.syllabusButton.position(displayWidth/2, displayHeight/2 + 200);
        //this.syllabusButton.visible = true;
        //console.log("showing the syllabus button");
        this.syllabusButton.show();

    }

    updateSyllabus(){
        if(rollNo === null){
            rollNo = 1;
        }
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject' + rollNo);
        dbRef.update({
            "Name" : this.input1.value(),
            "Details" : this.inputDetail1.value()
        })
        //ADDED THIS PART
        //var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/');
        //dbRef2.update({
           // "RollNo" : indexNo
        //})
    }

    readSyllabus(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject1/Name');
        dbRef.on("value", function(data){
            subjectName1 = data.val();
            console.log(subjectName1)
        })
        //ADDED THIS PART
        var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/RollNo');
        dbRef2.on("value", function(data){
            indexNo = data.val();
        })

    }

    readSyllabus2(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/RollNo');
        dbRef.on("value", function(data){
            indexNo = data.val();
        })

        for(var x = 1; x <= 6; x ++){
            if(x === 1){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject1/Name');
                dbRef.on("value", function(data){
                subjectName1 = data.val();
                console.log("reading syubject1")
                console.log(subjectName1)
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject1/Details');
                dbRef2.on("value", function(data){
                    subjectDetail1 = data.val();
                    //console.log(subjectName1)
                    })  
            }

            if(x === 2){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject2/Name');
                dbRef.on("value", function(data){
                subjectName2 = data.val();
                //console.log(subjectName1)
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject2/Details');
                dbRef2.on("value", function(data){
                    subjectDetail2 = data.val();
                    
                    })  
            }

            if(x === 3){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject3/Name');
                dbRef.on("value", function(data){
                subjectName3 = data.val();
                
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject3/Details');
                dbRef2.on("value", function(data){
                    subjectDetail3 = data.val();
                    
                    })  
            }

            if(x === 4){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject4/Name');
                dbRef.on("value", function(data){
                subjectName4 = data.val();
                
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject4/Details');
                dbRef2.on("value", function(data){
                    subjectDetail4 = data.val();
                    
                    })  
            }

            if(x === 5){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject5/Name');
                dbRef.on("value", function(data){
                subjectName5 = data.val();
                
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject5/Details');
                dbRef2.on("value", function(data){
                    subjectDetail5 = data.val();
                    
                    })  
            }

            if(x === 6){
                var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject6/Name');
                dbRef.on("value", function(data){
                subjectName6 = data.val();
                
                })    

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/Syllabus/Subject6/Details');
                dbRef2.on("value", function(data){
                    subjectDetail6 = data.val();
                    
                })  
            }
        }
    }

    updateNoOfSubjects(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/');
        dbRef.update({
            "SubjectNumber" : indexNo
        })
    }

    readNoOfSubjects(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/SubjectNumber');
        dbRef.on("value", function(data){
            indexNo = data.val();
        })  

    }

    updateRollNo(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/');
        dbRef.update({
            "RollNo" : rollNo
        })
    }
    
    readRollNo(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/');
        dbRef.on("value", function(data){
            rollNo = data.val();
        })  
    }

    updateTry2(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/');
        dbRef.update({
            "RollNo" : indexNo
        })
    }

    readTry2(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/Syllabus/RollNo');
        dbRef.on("value", function(data){
            //indexNo = data.val();
            rollNo = data.val();
        })  
    }

    

    

    writeSyllabus(){}
        /*
        for(var i=0 ; i<=rollNo ; i++){
            var dbRef = database.ref('Syllabus/Subject' + i);
            dbRef.on("value", function(data){
                // this.syllabusText.html(data.val());
                //console.log(data.val());
                append(finalSyllabus, data.val());
                this.finalText.html("Here" + finalSyllabus);
                //finalSyllabus.add(data.val());
                console.log(finalSyllabus)
                //text(this.state.subject1, 200,200);
            })
        }

        var userDataRef = firebase.database().ref("Syllabus/Subject1/Details").orderByKey();
       userDataRef.once("value").then(function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
       var key = childSnapshot.key;
       var childData = childSnapshot.val();    
       
       console.log("inside write syllabus")

       var details_val = childSnapshot.val().Details;
       //var name_val = childSnapshot.val().Name;

       $("#details").append(details_val);
       //$("#name").append(name_val);

       $("#details").append("<p>" + details_val + "</p> <br>");
        //$("#details").append("<p>" + name_val + "</p><p> " + id_val + "</p> <br>");


});
  
});
        

       var userDataRef = firebase.database().ref("Syllabus").child().orderByKey();
       userDataRef.on("value").then(function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
       var key = childSnapshot.key;
       var childData = childSnapshot.val();    
       
       console.log("inside write syllabus")

       var details_val = childSnapshot.val().Details;
       var name_val = childSnapshot.val().Name;

       console.log(name_val);
       console.log(details_val);

       $("#details").append(details_val);
       $("#name").append(name_val);

        document.getElementById("name").innerHTML = name_val;
        document.getElementById("details").innerHTML = details_val;

       //$("#details").append("<p>" + details_val + "</p> <br>");
        $("#details").append("<p>" + name_val + "</p><p> " + id_val + "</p> <br>");


});
  
});

    }
 */
    
    /*
    this.state = {
            subject1 : finalSyllabus,
            }
            
    CODES THAT DONT WORK / NOT NEEDED 
    switch(chosenSubject){
            case "Maths":
                this.mathsSyllabus = createInput("Maths Syllabus");
                this.mathsSyllabus.position(10,140);
                break;
            case "Science":
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                break;
        }


        if(chosenTerm === "Term 1"){
            
            if(chosenSubject === "Maths"){
                this.mathsSyllabus = createInput("Science Syllabus");
                this.mathsSyllabus.position(10,140);
              
            }

            else if(chosenSubject === "Science"){
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                
            }

            else if(chosenSubject === "SST"){
                this.sstSyllabus = createInput("SST Syllabus");
                this.sstSyllabus.position(10,140);
            }

            else if(chosenSubject === "ICT"){
                this.ictSyllabus = createInput("ICT Syllabus");
                this.ictSyllabus.position(10,140);
            }

            else if(chosenSubject === "English"){
                this.englishSyllabus = createInput("English Syllabus");
                this.englishSyllabus.position(10,140);
            }

            else if(chosenSubject === "II Language"){
                this.secLangSyllabus = createInput("II Language Syllabus");
                this.secLangSyllabus.position(10,140);
            }
        }



        updateNOPE(){
        var trialIndex = "Syllabus/Trial"
        database.ref(trialIndex).set({
          engSyllabus :this.engSyllabus,
        });
        //console.log(engSyllabus);
    }

    readtrial(){
        var trialRef = database.ref('Trial');
        trialRef.on("value",(data)=>{
            Trial = data.val();
        })
        //console.log(Trial);
    }

    getSubject(){
        var subjectRef = database.ref('Syllabus/Subjects/English/engSyllabus');
        subjectRef.on("value",(data)=>{
            engSyllabus = data.val();
        })
        //console.log(engSyllabus);
    }


    updateSylabus(){
        var updatingNode = "English/Syllabus"
        database.ref(updatingNode).set({
          Syllabus :this.mathsSyllabus,
        });
    }

    updateNO(){
        var syllName = "English/Syllabus"
        database.ref(syllName).set({
          Syllabus :this.mathsSyllabus
        });
        //console.log(engSyllabus);
    }


    readSyllabus(){
        var syllabusRef = database.ref('English/Syllabus');
        syllabusRef.on("value", (data)=>{
            gottenSyllabus = data.val();
        })

        //console.log(gottenSyllabus);
    }
//CURRENTLY WORKING ON THIS ONE =======>>>
    readDropbox(){
        var dropboxRef = database.ref('SubjectDropbox/English');
        dropboxRef.on("value", (data)=>{
            valueDropbox1 = data.val();
        })
        //console.log(valueDropbox);

        var dropboxRefA = database.ref('SubjectDropbox/Maths');
        dropboxRefA.on("value", (data)=>{
            valueDropbox2 = data.val();
        })

    }

    checkOptions(){
        chosenSubject = this.subjectDropbox.value();
        console.log(chosenSubject);

        chosenTerm = this.termDropbox.value();
        console.log(chosenTerm);
    }


    update(){
        var syllabusUpdate = "Subject/Syllabus1";
        database.ref(syllabusUpdate).set({
            Syllabus1 = this.inputDetail1
        });
      }


      this.termDropbox = createSelect();
        this.termDropbox.option("Term 1")
        this.termDropbox.option("Half-Yearly")
        this.termDropbox.option("Term 2")
        this.termDropbox.option("Final")
    */

     
        //Subject Dropbox Options

        

        
        //this.subjectDropbox = createSelect();
        //this.subjectDropbox.option(valueDropbox1);
        //this.subjectDropbox.option(valueDropbox2);

        
        /*
    
        this.subjectDropbox.option("Maths");
        this.subjectDropbox.option("Science")
        this.subjectDropbox.option("SST")
        this.subjectDropbox.option("ICT")
        this.subjectDropbox.option("English")
        this.subjectDropbox.option("II Language")
        */

        //Term Dropbox Options
        


        //Subject DropBox
        //this.greeting.html("Please choose the subject:");
        //this.greeting.position(10, 80);
        //this.subjectDropbox.position(190,100);

        //Term Dropbox
        //this.greeting2.html("Please choose the term:");
        //this.greeting2.position(10, 55);
        //this.termDropbox.position(190, 75);

        //console.log(chosenSubject);

        //this.mathSyllabus.hide();
        //this.englishSyllabus.hide();
        //this.sstSyllabus.hide();
        //this.scienceSyllabus.hide();
        //this.secLangSyllabus.hide();
        //this.ictSyllabus.hide();
        //this.greeting.hide();
        //this.greeting2.hide();
        //this.subjectDropbox.hide();
        //this.termDropbox.hide();

}