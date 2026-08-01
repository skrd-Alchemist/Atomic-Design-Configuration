/* =====================================
   ATOMIC DESIGN CHALLENGE
   DRAG ENGINE

   Sprint 1.5 Revised

===================================== */



// =====================================
// VARIABLES
// =====================================

let draggedElectron = null;


const allOrbitals =
document.querySelectorAll(".orbital");


const electronTray =
document.querySelector(".electron-container");


const rooms =
document.querySelectorAll(".room");




// =====================================
// ELECTRON DRAG EVENTS
// =====================================


electrons.forEach((electron)=>{


    electron.addEventListener(
        "dragstart",
        dragStart
    );


    electron.addEventListener(
        "dragend",
        dragEnd
    );


});





function dragStart(e){


    draggedElectron=this;


    this.classList.add(
        "dragging"
    );


    e.dataTransfer.setData(
        "text/plain",
        this.id
    );


    showFeedback(
        "Choose an orbital."
    );


}




function dragEnd(){


    this.classList.remove(
        "dragging"
    );


    draggedElectron=null;


}






// =====================================
// ORBITAL DROP SYSTEM
// =====================================



allOrbitals.forEach((orbital)=>{


    orbital.addEventListener(
        "dragover",
        dragOver
    );


    orbital.addEventListener(
        "dragleave",
        dragLeave
    );


    orbital.addEventListener(
        "drop",
        dropOnOrbital
    );


});






function dragOver(e){


    e.preventDefault();


    this.classList.add(
        "hover"
    );


}




function dragLeave(){


    this.classList.remove(
        "hover"
    );


}







function dropOnOrbital(e){


    e.preventDefault();


    this.classList.remove(
        "hover"
    );



    if(!draggedElectron)
        return;



    moveElectronToOrbital(

        draggedElectron,

        this

    );



    draggedElectron=null;


}







// =====================================
// MOVE ELECTRON TO ORBITAL
// =====================================



function moveElectronToOrbital(
    electron,
    orbital
){



    const targetOrbital =

    atomState.orbitals.find(

        item =>
        item.element === orbital

    );





    if(!targetOrbital)
        return;







    // Check capacity BEFORE removing

    if(targetOrbital.electrons >=2){


        showFeedback(

        "This orbital is full. Maximum capacity is 2 electrons.",

        "warning"

        );


        return;


    }







    // Remove from previous location

    removeElectronFromOrbital(
        electron
    );






    // Add to new orbital

    addElectronToOrbital(

        electron,

        orbital

    );






    orbital.appendChild(
        electron
    );



    electron.style.position="static";



    refreshAtom();



    updateFeedback(
        orbital
    );



}







// =====================================
// UPDATE FEEDBACK
// =====================================



function updateFeedback(orbital){



    const data =

    atomState.orbitals.find(

        item =>
        item.element === orbital

    );



    if(!data)
        return;






    if(data.electrons===1){


        showFeedback(

        "One electron occupies this orbital."

        );


    }






    if(data.electrons===2){



        showFeedback(

        "Electron pairing occurs. Pairing increases electron-electron repulsion, but it happens after separate orbitals are occupied (Hund's Rule)."

        );


    }



}







// =====================================
// RETURN ELECTRON TO TRAY
// =====================================



function returnElectronToTray(electron){



    removeElectronFromOrbital(
        electron
    );



    electronTray.appendChild(
        electron
    );



    electron.style.position="";



    refreshAtom();



}







// =====================================
// TRAY DROP AREA
// =====================================



electronTray.addEventListener(
"dragover",
function(e){

    e.preventDefault();

});






electronTray.addEventListener(
"drop",
function(e){


    e.preventDefault();



    if(!draggedElectron)
        return;



    returnElectronToTray(
        draggedElectron
    );



    draggedElectron=null;



});







// =====================================
// APARTMENT GAME
// =====================================



rooms.forEach((room)=>{


    room.addEventListener(
        "dragover",
        function(e){

            e.preventDefault();

        }
    );




    room.addEventListener(
        "drop",
        function(e){


            e.preventDefault();



            if(!draggedElectron)
                return;



            placeInRoom(

                draggedElectron,

                this

            );



            draggedElectron=null;



        }
    );


});







// =====================================
// PLACE IN ROOM
// =====================================



function placeInRoom(
electron,
room
){



    if(room.children.length>=2){


        showFeedback(

        "This apartment is already full.",

        "warning"

        );


        return;


    }




    room.appendChild(
        electron
    );



    evaluateApartment();



}







// =====================================
// APARTMENT EVALUATION
// =====================================



function evaluateApartment(){



    const totalElectrons =

    document.querySelectorAll(

        ".room .electron"

    ).length;





    if(totalElectrons===6){


        showFeedback(

        "Excellent! Now compare orbital energy and electron repulsion.",

        "success"

        );


    }


}