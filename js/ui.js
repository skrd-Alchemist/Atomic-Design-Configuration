/* =====================================
   ATOMIC DESIGN CHALLENGE

   USER INTERFACE ENGINE

   Sprint 1.7 Final Revised

===================================== */



// =====================================
// ELEMENTS
// =====================================


const hint =
document.getElementById("hint");




// =====================================
// UPDATE UI
// =====================================


function updateUI(){


    generateHint();


}







// =====================================
// SCIENTIFIC HINT
// =====================================


function generateHint(){



    if(!hint)
        return;





    let hasPair = false;

    let hasElectron = false;





    atomState.orbitals.forEach(orbital=>{



        if(orbital.electrons > 0){


            hasElectron=true;


        }



        if(orbital.electrons===2){


            hasPair=true;


        }



    });









    if(!hasElectron){



        hint.innerHTML =


        `
        Drag electrons into orbitals
        and observe how orbital energy
        and electron arrangement affect stability.
        `;



        return;



    }









    if(hasPair){



        hint.innerHTML =


        `
        ⚠ Electron pairing increases
        electron-electron repulsion.

        <br><br>

        Remember: electrons occupy
        separate orbitals first before pairing
        (Hund's Rule).
        `;



    }







    else{



        hint.innerHTML =


        `
        ✅ Electrons occupy separate orbitals.

        <br><br>

        This reduces electron-electron
        repulsion and increases stability.
        `;



    }





}








// =====================================
// GLOBAL CONNECTION
// =====================================


window.updateUI = updateUI;