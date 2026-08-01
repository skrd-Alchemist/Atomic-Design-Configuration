/* =====================================
   ATOMIC DESIGN CHALLENGE
   CHEMISTRY EVALUATION ENGINE

   Version 2.2 Final Revised

===================================== */



// =====================================
// MAIN EVALUATION
// =====================================

function evaluateConfiguration(){


    const result = {


        score:10,


        energyScore:0,


        repulsionScore:0,


        stability:100,


        feedback:[]


    };



    evaluateAufbau(result);


    evaluateHund(result);


    calculateOrbitalEnergy(result);


    calculateElectronRepulsion(result);


    calculateStability(result);


    displayEvaluation(result);



}







// =====================================
// AUFBAU PRINCIPLE
// =====================================


function evaluateAufbau(result){



    const capacities = {


        "1s":2,

        "2s":2,

        "2p":6,

        "3s":2,

        "3p":6


    };




    const order = [


        "1s",

        "2s",

        "2p",

        "3s",

        "3p"


    ];





    let lowerComplete = true;





    order.forEach(name=>{



        const orbital = findOrbital(name);



        if(!orbital)
            return;






        if(

            !lowerComplete

            &&

            orbital.electrons > 0

        ){



            result.score -=2;



            result.feedback.push(

            "❌ Electrons occupy a higher-energy orbital before lower-energy orbitals are filled."

            );


        }






        if(

            orbital.electrons < capacities[name]

        ){


            lowerComplete=false;


        }



    });





}








// =====================================
// HUND RULE
// =====================================


function evaluateHund(result){



    const pSubshells = {};






    atomState.orbitals.forEach(orbital=>{


        if(orbital.subshell==="p"){



            const key =

            `${orbital.level}p`;



            if(!pSubshells[key]){


                pSubshells[key]=[];


            }



            pSubshells[key].push(

                orbital.electrons

            );



        }


    });






    Object.values(pSubshells).forEach(electrons=>{



        if(


            electrons.includes(2)

            &&

            electrons.includes(0)


        ){



            result.score -=2;



            result.feedback.push(

            "❌ Electrons are paired before occupying all available p orbitals singly (Hund's Rule)."

            );



        }




    });





}








// =====================================
// ORBITAL ENERGY CALCULATION
// =====================================


function calculateOrbitalEnergy(result){



    const orbitalEnergy = {


        "1s":1,

        "2s":2,

        "2p":3,

        "3s":4,

        "3p":5


    };






    atomState.orbitals.forEach(orbital=>{



        const name =

        `${orbital.level}${orbital.subshell}`;




        if(orbitalEnergy[name]){


            result.energyScore +=


            orbitalEnergy[name]

            *

            orbital.electrons;



        }



    });





}








// =====================================
// ELECTRON REPULSION
// =====================================


function calculateElectronRepulsion(result){



    atomState.orbitals.forEach(orbital=>{



        if(orbital.electrons===2){



            result.repulsionScore++;


        }



    });



}








// =====================================
// STABILITY
// =====================================


function calculateStability(result){



    result.stability =


        100

        -

        (result.energyScore * 2)

        -

        (result.repulsionScore * 5);






    if(result.stability < 0){


        result.stability = 0;


    }



}








// =====================================
// FIND ORBITAL
// =====================================


function findOrbital(name){



    return atomState.orbitals.find(


        orbital =>


        `${orbital.level}${orbital.subshell}` === name



    );



}








// =====================================
// DISPLAY RESULT
// =====================================


function displayEvaluation(result){



    const box =

    document.getElementById("feedback");



    const score =

    document.getElementById("scoreText");







    if(result.score < 0){


        result.score = 0;


    }







    if(score){



        score.innerHTML =


        `${result.score} / 10`;



    }








    if(!box)
        return;







    if(result.feedback.length===0){





        box.innerHTML =


        `

        🌟 Excellent Configuration!

        <br><br>


        Orbital Energy:

        ${result.energyScore}


        <br>


        Electron Pairing:

        ${result.repulsionScore}


        <br>


        Stability:

        ${result.stability}%


        `;





    }






    else{





        box.innerHTML =


        `


        Score:

        ${result.score} / 10


        <br><br>


        ${result.feedback.join("<br><br>")}


        <br><br>


        Stability:

        ${result.stability}%



        `;






    }





}