/* =====================================
   ATOMIC DESIGN CHALLENGE

   COMPARISON CHALLENGE

   Sprint 3.3 Revised

===================================== */



const correctComparisonAnswer = "B";





function checkComparison(answer){



    const feedback =

    document.getElementById(
        "comparisonFeedback"
    );



    if(!feedback) return;



    if(answer === correctComparisonAnswer){



        feedback.innerHTML =


        `

        ✅ Correct!

        <br><br>

        Arrangement B is more stable because

        electrons occupy separate orbitals first.

        This reduces electron-electron repulsion.

        `;



        if(typeof increaseProgress === "function"){

            increaseProgress();

        }



    }



    else{


        feedback.innerHTML =


        `

        ❌ Think again.

        <br><br>

        Arrangement A contains paired electrons

        while another orbital is still empty.

        Pairing increases electron-electron repulsion.

        `;


    }



}