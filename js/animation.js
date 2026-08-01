/* =====================================
   ATOMIC DESIGN CHALLENGE

   ENERGY MOVEMENT ANIMATION

   Sprint 5.3 Revised

===================================== */



const electron =

document.getElementById(
"movingElectron"
);



const movementFeedback =

document.getElementById(
"movementFeedback"
);







function moveElectronDown(){


    if(!electron || !movementFeedback)
        return;



    electron.classList.remove(
        "move-up"
    );


    electron.classList.add(
        "move-down"
    );




    movementFeedback.innerHTML =


    `
    ✅ Energy decreases.

    <br><br>

    Electrons become more stable when they
    occupy lower-energy orbitals.

    <br><br>

    Lower-energy orbitals are closer to the
    nucleus and experience stronger attraction.

    `;


}








function moveElectronUp(){


    if(!electron || !movementFeedback)
        return;



    electron.classList.remove(
        "move-down"
    );


    electron.classList.add(
        "move-up"
    );




    movementFeedback.innerHTML =


    `
    ⚠ Energy increases.

    <br><br>

    Electrons in higher-energy orbitals are
    less stable because they are further from
    the nucleus.

    `;


}
