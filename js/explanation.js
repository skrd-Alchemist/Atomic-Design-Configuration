/* =====================================
   ATOMIC DESIGN CHALLENGE

   EXPLANATION CHECKER

   Sprint 3.3 Final Revised

===================================== */



const explanationInput =
document.getElementById(
"explanationInput"
);



const explanationFeedback =
document.getElementById(
"explanationFeedback"
);








function checkExplanation(){



    if(!explanationInput || !explanationFeedback)

        return;





    const answer =

    explanationInput.value
    .toLowerCase();





    let score = 0;


    let feedback = [];








    // ENERGY CONCEPT


    if(

        answer.includes("lower energy")

        ||

        answer.includes("lower-energy")

        ||

        answer.includes("more stable")

    ){



        score++;



        feedback.push(

        "✅ You explained that lower-energy orbitals give a more stable arrangement."

        );



    }









    // REPULSION CONCEPT


    if(

        answer.includes("repulsion")

        ||

        answer.includes("repel")

        ||

        answer.includes("electron-electron")

    ){



        score++;



        feedback.push(

        "✅ You explained electron-electron repulsion."

        );



    }









    // ORBITAL ARRANGEMENT


    if(

        answer.includes("separate orbital")

        ||

        answer.includes("occupy orbital")

        ||

        answer.includes("electron arrangement")

        ||

        answer.includes("pairing")

    ){



        score++;



        feedback.push(

        "✅ You connected stability with orbital arrangement and electron pairing."

        );



    }











    if(score>=3){



        explanationFeedback.innerHTML =


        `

        🌟 Excellent explanation!

        <br><br>

        ${feedback.join("<br>")}

        <br><br>

        Your explanation connects orbital energy,

        electron arrangement, and repulsion.

        `;




        if(typeof increaseProgress==="function"){


            increaseProgress();


        }



    }





    else if(score>=1){



        explanationFeedback.innerHTML =


        `

        👍 Good start!

        <br><br>

        ${feedback.join("<br>")}

        <br><br>

        Explain more about why electrons spread out

        before pairing.

        `;



    }






    else{



        explanationFeedback.innerHTML =


        `

        Try again.

        Think about:

        <br>

        • Why do electrons occupy lower-energy orbitals?

        <br>

        • Why do electrons avoid unnecessary pairing?

        `;



    }




}