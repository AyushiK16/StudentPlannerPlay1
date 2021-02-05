class ToDoList{
    constructor(){
        this.toDoButton = createButton('To-Do List');
        this.showItems = createButton('Show')

        this.greeting = createElement('h4');
        this.saveButton = createButton("Save To-Do");
        this.showItems = createButton('Show')

        this.deleteButton = createButton("Delete All");
        this.dateInput = createInput("DD/MM/YY")
        this.input = createInput("Enter what to do here");
        this.greeting2 = createElement('h5');

        this.dateInput1 = createInput("DD/MM/YY111")
        this.input1 = createInput("Enter what to do here1111");

        this.act1 = createElement('h4')
        this.act2 = createElement('h4')
        this.act3 = createElement('h4')
        this.act4 = createElement('h4')
        this.act5 = createElement('h4')
        this.act6 = createElement('h4')
        this.act7 = createElement('h4')
        this.act8 = createElement('h4')
        this.act9 = createElement('h4')
        this.act10 = createElement('h4')

        this.date1 = createElement('h4')
        this.date2 = createElement('h4')
        this.date3 = createElement('h4')
        this.date4 = createElement('h4')
        this.date5 = createElement('h4')
        this.date6 = createElement('h4')
        this.date7 = createElement('h4')
        this.date8 = createElement('h4')
        this.date9 = createElement('h4')
        this.date10 = createElement('h4')

        
        //this.dateInputList = [];
        this.dateInputList = [];
        this.inputList = [];
    }

    display(){
        this.toDoButton.position(displayWidth/2 + 76, displayHeight/2 + 238);

        this.toDoButton.mousePressed(()=>{

            this.readToDoList();
            this.displayReadStuff();
            console.log(readTheList)
            
            this.readMouseNo();

            this.toDoButton.hide();
            //image(toDoImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(toDoImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);

            this.greeting.html("Enter any things you want to be reminded about here!");
            this.greeting.position(displayWidth/2 - 120, displayHeight/4 - 150);

            console.log("inside display func");
            this.saveButton.position(displayWidth/2 - 40, displayHeight/2 +140);
            this.showItems.position(displayWidth/2 - 30, displayHeight/2 +180);

            this.dateInput.position(displayWidth/2 - 135, 140);
            this.input.position(displayWidth/2 + 40, 140)

            this.act1.position(displayWidth/2 + 40, 140)
            this.act2.position(displayWidth/2 + 40, 180)
            this.act3.position(displayWidth/2 + 40, 220)
            this.act4.position(displayWidth/2 + 40, 260)
            this.act5.position(displayWidth/2 + 40, 300)
            this.act6.position(displayWidth/2 + 40, 340)
            this.act7.position(displayWidth/2 + 40, 380)
            this.act8.position(displayWidth/2 + 40, 420)
            this.act9.position(displayWidth/2 + 40, 460)
            this.act10.position(displayWidth/2 + 40, 500)

            this.date1.position(displayWidth/2 - 135, 140)
            this.date2.position(displayWidth/2 - 135, 180)
            this.date3.position(displayWidth/2 - 135, 220)
            this.date4.position(displayWidth/2 - 135, 260)
            this.date5.position(displayWidth/2 - 135, 300)
            this.date6.position(displayWidth/2 - 135, 340)
            this.date7.position(displayWidth/2 - 135, 380)
            this.date8.position(displayWidth/2 - 135, 420)
            this.date9.position(displayWidth/2 - 135, 460)
            this.date10.position(displayWidth/2 - 135, 500)

            
            this.greeting.show();
            this.saveButton.show();

            this.showItems.show();
            
            this.dateInput.show();
            this.input.show();
            syllabusPage.hide();
            syllabusPage.show();
            
            reminderPage.hide();
            reminderPage.show();
            
            breakPage.hide();
            breakPage.show();

            dashboardPage.hide();
            dashboardPage.show();
         
            //this.dateInput1.show();
            //this.input1.show();

            

            if(tod1 !== null){
                this.act1.html(tod1);
                this.date1.html(toDate1);
                this.act1.show();
                this.date1.show();
            }

            if(tod2 !== null){
                this.act2.html(tod2);
                this.date2.html(toDate2);
                this.act2.show();
                this.date2.show();
            }

            if(tod3 !== null){
                this.act3.html(tod3);
                this.date3.html(toDate3);
                this.act3.show();
                this.date3.show();
            }

            if(tod4 !== null){
                this.act4.html(tod4);
                this.date4.html(toDate4);
                this.act4.show();
                this.date4.show();
            }
            
            if(tod5 !== null){
                this.act5.html(tod5);
                this.date5.html(toDate5);
                this.act5.show();
                this.date5.show();
            }

            if(tod6 !== null){
                this.act6.html(tod6);
                this.date6.html(toDate6);
                this.act6.show();
                this.date6.show();
            }

            if(tod7 !== null){
                this.act7.html(tod7);
                this.date7.html(toDate7);
                this.act7.show();
                this.date7.show();
            }

            if(tod8 !== null){
                this.act8.html(tod8);
                this.date8.html(toDate8);
                this.act8.show();
                this.date8.show();
            }

            if(tod9 !== null){
                this.act9.html(tod9);
                this.date9.html(toDate9);
                this.act9.show();
                this.date9.show();
            }

            if(tod10 !== null){
                this.act10.html(tod10);
                this.date10.html(toDate10);
                this.act10.show();
                this.date10.show();
            }

            this.act1.show();
            this.act2.show();
            this.act3.show();
            this.act4.show();
            this.act5.show();
            this.act6.show();
            this.act7.show();
            this.act8.show();
            this.act9.show();
            this.act10.show();
            
            this.date1.show();
            this.date2.show();
            this.date3.show();
            this.date4.show();
            this.date5.show();
            this.date6.show();
            this.date7.show();
            this.date8.show();
            this.date9.show();
            this.date10.show();

            


            this.saveButton.mousePressed(()=>{
                if(y<580){
                    mouseNo = mouseNo + 1;
                    
                    
                    
                    //this.dateInput1 = createInput("DD/MM/YY")
                    //var boxName = 'dateInput' + mouseNo;
                    //('dateInput'+mouseNo) = createInput("DD/MM/YY");

                    //boxName = createInput("DD/MM/YY");
                    //var boxArray =[];
                    //boxArray.push('dateInput'+mouseNo);
                    //boxArray.push(boxName);

                    //boxName.position(displayWidth/2 - 135, y);
                    
                    

                    this.dateInput.position(displayWidth/2 - 135, y);
                    //this.input1 = createInput("Enter what to do here");
                    this.input.position(displayWidth/2 + 40, y);
                    
                    //this.dateInputList.push(dateInput1);
                    //append(this.dateInputList, this.dateInput1);
                    this.dateInputList.push(this.dateInput1);
                    this.inputList.push(this.input1);

                   // this.dateInput1.show()
                    //this.input1.show();    

                    this.dateInput.show();
                    this.input.show()

                    determinerNumber = mouseNo

                    
                    

                    if(mouseNo === 1){
                        tod1 = this.input.value();
                        toDate1 = this.dateInput.value(); 
                        //this.act1.html(tod1);
                        //this.date1.html(toDate1);
                        //this.act1.show();
                        //this.date1.show();
                        y = 220;
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 2){
                        y = 260;
                        tod2 = this.input.value();
                        toDate2 = this.dateInput.value(); 
                        //this.act2.html(tod2);
                        //this.date2.html(toDate2);
                        //this.act2.show();
                        //this.date2.show();
                        
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 3){
                        y = 300;
                        tod3 = this.input.value();
                        toDate3 = this.dateInput.value(); 
                        /*
                        this.act3.html(tod3);
                        this.date3.html(toDate3);
                        this.act3.show();
                        this.date3.show();
                        */
                        
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 4){
                        y = 340;
                        tod4 = this.input.value();
                        toDate4 = this.dateInput.value(); 
                        
                        
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 5){
                        tod5 = this.input.value();
                        toDate5 = this.dateInput.value(); 
                       
                        y = 380;
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 6){
                        tod6 = this.input.value();
                        toDate6 = this.dateInput.value(); 
                       
                        y = 420;
                    }

                    if(mouseNo === 7){
                        tod7 = this.input.value();
                        toDate7 = this.dateInput.value(); 
                      
                        y = 460;
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 8){
                        tod8 = this.input.value();
                        toDate8 = this.dateInput.value(); 
                        
                        y = 500;
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 9){
                        tod9 = this.input.value();
                        toDate9 = this.dateInput.value(); 
                     
                        y = 540;
                        console.log(mouseNo,y)
                    }

                    if(mouseNo === 10){
                        tod10 = this.input.value();
                        toDate10 = this.dateInput.value(); 
                       
                        y = 580;
                        console.log(mouseNo,y)
                    }





                    if(tod1 !== null){
                        this.act1.html(tod1);
                        this.date1.html(toDate1);
                        this.act1.show();
                        this.date1.show();
                    }
        
                    if(tod2 !== null){
                        this.act2.html(tod2);
                        this.date2.html(toDate2);
                        this.act2.show();
                        this.date2.show();
                    }
        
                    if(tod3 !== null){
                        this.act3.html(tod3);
                        this.date3.html(toDate3);
                        this.act3.show();
                        this.date3.show();
                    }
        
                    if(tod4 !== null){
                        this.act4.html(tod4);
                        this.date4.html(toDate4);
                        this.act4.show();
                        this.date4.show();
                    }
                    
                    if(tod5 !== null){
                        this.act5.html(tod5);
                        this.date5.html(toDate5);
                        this.act5.show();
                        this.date5.show();
                    }
        
                    if(tod6 !== null){
                        this.act6.html(tod6);
                        this.date6.html(toDate6);
                        this.act6.show();
                        this.date6.show();
                    }
        
                    if(tod7 !== null){
                        this.act7.html(tod7);
                        this.date7.html(toDate7);
                        this.act7.show();
                        this.date7.show();
                    }
        
                    if(tod8 !== null){
                        this.act8.html(tod8);
                        this.date8.html(toDate8);
                        this.act8.show();
                        this.date8.show();
                    }
        
                    if(tod9 !== null){
                        this.act9.html(tod9);
                        this.date9.html(toDate9);
                        this.act9.show();
                        this.date9.show();
                    }
        
                    if(tod10 !== null){
                        this.act10.html(tod10);
                        this.date10.html(toDate10);
                        this.act10.show();
                        this.date10.show();
                    }


                    
                    



                    

                    this.updateToDoList();

                    

                    //y = y + 40;

                    //this.getValue();
                    this.updateMouseNo();
                    //this.updateValue();
                }

                else{
                    this.input.hide();
                    this.dateInput.hide();
                    this.greeting2.html("Please add only 10 things to do at one time!")
                    this.greeting2.position(displayWidth/2 - 80, displayHeight/2 + 80);
                    this.greeting2.show();

                } 
            });    

            this.showItems.mousePressed(()=>{

                if(tod1 !== null){
                    this.act1.html(tod1);
                    this.date1.html(toDate1);
                    this.act1.show();
                    this.date1.show();
                }
    
                if(tod2 !== null){
                    this.act2.html(tod2);
                    this.date2.html(toDate2);
                    this.act2.show();
                    this.date2.show();
                }
    
                if(tod3 !== null){
                    this.act3.html(tod3);
                    this.date3.html(toDate3);
                    this.act3.show();
                    this.date3.show();
                }
    
                if(tod4 !== null){
                    this.act4.html(tod4);
                    this.date4.html(toDate4);
                    this.act4.show();
                    this.date4.show();
                }
                
                if(tod5 !== null){
                    this.act5.html(tod5);
                    this.date5.html(toDate5);
                    this.act5.show();
                    this.date5.show();
                }
    
                if(tod6 !== null){
                    this.act6.html(tod6);
                    this.date6.html(toDate6);
                    this.act6.show();
                    this.date6.show();
                }
    
                if(tod7 !== null){
                    this.act7.html(tod7);
                    this.date7.html(toDate7);
                    this.act7.show();
                    this.date7.show();
                }
    
                if(tod8 !== null){
                    this.act8.html(tod8);
                    this.date8.html(toDate8);
                    this.act8.show();
                    this.date8.show();
                }
    
                if(tod9 !== null){
                    this.act9.html(tod9);
                    this.date9.html(toDate9);
                    this.act9.show();
                    this.date9.show();
                }
    
                if(tod10 !== null){
                    this.act10.html(tod10);
                    this.date10.html(toDate10);
                    this.act10.show();
                    this.date10.show();
                }
            })
        }) 

        
    }

    hide(){
        //this.greeting.hide();
        this.saveButton.hide();
        this.showItems.hide();
        this.deleteButton.hide();
        this.dateInput.hide();
        this.input.hide();

        this.dateInput1.hide();
        this.input1.hide();

        this.input1.hide();

        this.act1.hide();
        this.act2.hide();
        this.act3.hide();
        this.act4.hide();
        this.act5.hide();
        this.act6.hide();
        this.act7.hide();
        this.act8.hide();
        this.act9.hide();
        this.act10.hide();

        this.date1.hide();
        this.date2.hide();
        this.date3.hide();
        this.date4.hide();
        this.date5.hide();
        this.date6.hide();
        this.date7.hide();
        this.date8.hide();
        this.date9.hide();
        this.date10.hide();

        this.greeting.hide();
        this.greeting2.hide();
    }


    updateToDoList(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry' + mouseNo);
        dbRef.update({
           "Activity" : this.input.value(),
           "Date" : this.dateInput.value()
        })
    }

    updateMouseNo(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/');
        dbRef.update({
            "MouseNo" : mouseNo
        })
        determinerNumber = mouseNo;
    }

    readMouseNo(){
        var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/MouseNo');
        dbRef.on("value", function(data){
            //indexNo = data.val();
            mouseNo = data.val();
        })  
    }

    readToDoList(){
        readTheList = true;
        for(var x = 1; x <= 9; x ++){
            if(x === 1){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry1/Activity');
                dbRef.on("value", function(data){
                    tod1 = data.val();
                    console.log(tod1);
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry1/Date');
                dbRef2.on("value", function(data){
                    toDate1 = data.val();
                    
                })
            }

            if(x === 2){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry2/Activity');
                dbRef.on("value", function(data){
                    tod2 = data.val();
                    
                    //this.act2.html(tod2);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry2/Date');
                dbRef2.on("value", function(data){
                    toDate2 = data.val();
                    //this.date2.html(toDate2);
                })
            }

            if(x === 3){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry3/Activity');
                dbRef.on("value", function(data){
                    tod3 = data.val();
                    //this.act3.html(tod3);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry3/Date');
                dbRef2.on("value", function(data){
                    toDate3 = data.val();
                    //this.date3.html(toDate3);
                })
            }

            if(x === 4){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry4/Activity');
                dbRef.on("value", function(data){
                    tod4 = data.val();
                    //this.act4.html(tod4);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry4/Date');
                dbRef2.on("value", function(data){
                    toDate4 = data.val();
                    //this.date4.html(toDate4);
                })
            }

            if(x === 5){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry5/Activity');
                dbRef.on("value", function(data){
                    tod5 = data.val();
                    //this.act5.html(tod5);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry5/Date');
                dbRef2.on("value", function(data){
                    toDate5 = data.val();
                    //this.date5.html(toDate5);
                })
            }

            if(x === 6){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry6/Activity');
                dbRef.on("value", function(data){
                    tod6 = data.val();
                    //this.act6.html(tod6);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry6/Date');
                dbRef2.on("value", function(data){
                    toDate6 = data.val();
                    //this.date6.html(toDate6);
                })
            }

            if(x === 7){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry7/Activity');
                dbRef.on("value", function(data){
                    tod7 = data.val();
                    //this.act7.html(tod7);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry7/Date');
                dbRef2.on("value", function(data){
                    toDate7 = data.val();
                    //this.date7.html(toDate7);
                })
            }

            if(x === 8){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry8/Activity');
                dbRef.on("value", function(data){
                    tod8 = data.val();
                    //this.act8.html(tod8);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry8/Date');
                dbRef2.on("value", function(data){
                    toDate8 = data.val();
                    //this.date8.html(toDate8);
                })
            }

            if(x === 9){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry9/Activity');
                dbRef.on("value", function(data){
                    tod9 = data.val();
                   // this.act9.html(tod9);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry9/Date');
                dbRef2.on("value", function(data){
                    toDate9 = data.val();
                    //this.date9.html(toDate9);
                })
            }

            if(x === 10){
                var dbRef = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry10/Activity');
                dbRef.on("value", function(data){
                    tod10 = data.val();
                    //this.act10.html(tod10);
                    //console.log(tod1)
                    });

                var dbRef2 = database.ref('Username/User/' + username + '/Pages/ToDoList/Entry10/Date');
                dbRef2.on("value", function(data){
                    toDate10 = data.val();
                    //this.date10.html(toDate10);
                })
            }
        }
    }

    displayReadStuff(){
        //if(readTheList === true){
            for(var x = 1; x<= mouseNo ; x++){
                if(x===1){
                    this.act1.html(tod1);
                    this.date1.html(toDate1)
                    this.act1.show();
                    this.date1.show();
                    console.log("working?")
                }

                if(x===2){
                    this.act2.html(tod2);
                    this.date2.html(toDate2)
                }

                if(x===3){
                    this.act3.html(tod3);
                    this.date3.html(toDate3)
                }

                if(x===4){
                    this.act4.html(tod4);
                    this.date4.html(toDate4)
                }

                if(x===5){
                    this.act5.html(tod5);
                    this.date5.html(toDate5)
                }

                if(x===6){
                    this.act6.html(tod6);
                    this.date6.html(toDate6)
                }

                if(x===7){
                    this.act7.html(tod7);
                    this.date7.html(toDate7)
                }

                if(x===8){
                    this.act8.html(tod8);
                    this.date8.html(toDate8)
                }

                if(x===9){
                    this.act9.html(tod9);
                    this.date9.html(toDate9)
                }

                if(x===10){
                    this.act10.html(tod10);
                    this.date10.html(toDate10)
                }
            }
        //}
    }

    show(){
        this.toDoButton.show();
    }

/*
    updateValue(){
        var toDoIndex = "ToDo/" + mouseNo;
        database.ref(toDoIndex).set({
        toDoItem:this.input1,
        date:this.dateInput1
    });
    }

   

    getValue(){
        var toDoRef = database.ref('ToDo/' + mouseNo);
        toDoRef.on("value",(data)=>{
          var toDoCount = data.val();
        })
        //console.log("getting count" + mouseNo);
    }

    updateValue(){
        var toDoIndex = "ToDo/" + mouseNo;
        database.ref(toDoIndex).set({
        toDoItem:this.input1,
        date:this.dateInput1
        });
    }

    */

    /*

        for(var hi=0 ; hi<=mouseNo ; hi=hi+1){
            var temporary = this.dateInputList[hi];
            var temp2 = this.inputList[hi];
            temp2.hide();
            temporary.hide();
            console.log("in the for loop - HIDE");
        }

        for(var hi=0 ; hi<=mouseNo ; hi=hi+1){
                    //var temp1 = this.dateInputList[hi];
                    //var temp2 = this.inputList[hi];
                    
                    //temp1.hide();
                    this.dateInputList[hi].hide();
                    //temp2.hide();
                    console.log("in the for loop - HIDE");
                }
        */

}