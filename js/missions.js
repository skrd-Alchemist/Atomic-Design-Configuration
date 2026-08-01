/* =====================================
   ATOMIC DESIGN CHALLENGE

   MISSION SYSTEM

   Sprint 2.1

===================================== */



// =====================================
// CURRENT MISSION
// =====================================


const currentMission = {


    id:1,


    question:
    "Which arrangement is more stable because it reduces electron-electron repulsion?",



    answer:"B",



    explanation:

    "Correct! Electrons prefer to occupy separate orbitals before pairing because this reduces electron-electron repulsion."

};









// =====================================
// DISPLAY MISSION
// =====================================



function loadMission(){



    const question =
    document.getElementById(
        "missionQuestion"
    );



    if(question){


        question.innerHTML =
        currentMission.question;


    }


}









// =====================================
// CHECK ANSWER
// =====================================



function checkAnswer(answer){



    const feedback =
    document.getElementById(
        "missionFeedback"
    );




    if(answer===currentMission.answer){



        feedback.innerHTML =

        `
        ✅ ${currentMission.explanation}
        `;



        updateProgress();



    }



    else{



        feedback.innerHTML =

        `
        ❌ Think again.
        Two electrons close together experience greater repulsion.
        `;



    }



}









// =====================================
// PROGRESS UPDATE
// =====================================


function updateProgress(){



    const bar =
    document.getElementById(
        "progressFill"
    );



    const text =
    document.getElementById(
        "progressText"
    );




    if(bar){


        bar.style.width="40%";


    }



    if(text){


        text.innerHTML =
        "40% Complete";


    }


}








// START


loadMission();