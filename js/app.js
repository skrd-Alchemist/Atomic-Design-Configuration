/* =====================================
   ATOMIC DESIGN CHALLENGE
   APP ENGINE

   Sprint 1.3 (Final)

===================================== */



// =====================================
// SELECT ELEMENTS
// =====================================

const orbitals = document.querySelectorAll(".orbital");

const electrons = document.querySelectorAll(".electron");

const feedbackBox = document.getElementById("feedback");




// =====================================
// ATOM DATA
// =====================================

const atomState = {

    element: "Carbon",

    electronNumber: 6,

    orbitals: []

};




// =====================================
// INITIALIZE ORBITALS
// =====================================

function initializeOrbitals() {

    // Prevent duplicate orbital data
    atomState.orbitals = [];

    orbitals.forEach((orbital) => {

        const orbitalData = {

            element: orbital,

            level: Number(orbital.dataset.level),

            subshell: orbital.dataset.subshell,

            index: Number(orbital.dataset.index),

            electrons: 0,

            electronList: []

        };

        atomState.orbitals.push(orbitalData);

    });

}




// =====================================
// INITIALIZE ELECTRONS
// =====================================

function initializeElectrons() {

    electrons.forEach((electron, index) => {

        electron.dataset.id = index + 1;

    });

}




// =====================================
// ADD ELECTRON
// =====================================

function addElectronToOrbital(electron, orbital) {

    const targetOrbital = atomState.orbitals.find(

        item => item.element === orbital

    );

    if (!targetOrbital) {

        return false;

    }

    // Maximum 2 electrons

    if (targetOrbital.electrons >= 2) {

        showFeedback(

            "This orbital is full. Maximum capacity is 2 electrons.",

            "warning"

        );

        return false;

    }

    targetOrbital.electrons++;

    targetOrbital.electronList.push(electron);

    orbital.dataset.electrons = targetOrbital.electrons;

    refreshAtom();

    return true;

}




// =====================================
// REMOVE ELECTRON
// =====================================

function removeElectronFromOrbital(electron) {

    atomState.orbitals.forEach((orbital) => {

        const index = orbital.electronList.indexOf(electron);

        if (index !== -1) {

            orbital.electronList.splice(index, 1);

            orbital.electrons--;

            orbital.element.dataset.electrons = orbital.electrons;

        }

    });

}




// =====================================
// UPDATE ORBITAL DISPLAY
// =====================================

function updateOrbitalDisplay(orbital) {

    const data = atomState.orbitals.find(

        item => item.element === orbital

    );

    if (!data) {

        return;

    }

    orbital.innerHTML = "";

    data.electronList.forEach((electron, index) => {

        const spin = document.createElement("span");

        spin.className = "spin-electron";

        if (index % 2 === 0) {

            spin.innerHTML = "↑";

        }

        else {

            spin.innerHTML = "↓";

        }

        orbital.appendChild(spin);

    });

}




// =====================================
// REFRESH WHOLE ATOM
// =====================================

function refreshAtom() {

    atomState.orbitals.forEach((orbital) => {

        updateOrbitalDisplay(orbital.element);

    });

    if (typeof updateEnergyMeter === "function") {

        updateEnergyMeter();

    }

    if (typeof updateRepulsionMeter === "function") {

        updateRepulsionMeter();

    }

    if (typeof evaluateConfiguration === "function") {

        evaluateConfiguration();

    }

}




// =====================================
// FEEDBACK
// =====================================

function showFeedback(message, type = "info") {

    if (!feedbackBox) {

        return;

    }

    feedbackBox.innerHTML = message;

    feedbackBox.className = `feedback ${type}`;

}




// =====================================
// RESET
// =====================================

function resetAtom() {

    atomState.orbitals.forEach((orbital) => {

        orbital.electrons = 0;

        orbital.electronList = [];

        orbital.element.innerHTML = "";

        orbital.element.dataset.electrons = 0;

    });

    const tray = document.querySelector(".electron-container");

    electrons.forEach((electron) => {

        tray.appendChild(electron);

        electron.draggable = true;

        electron.removeAttribute("style");

    });

    refreshAtom();

    showFeedback(

        "Atom reset. Try a new arrangement.",

        "info"

    );

}




// =====================================
// START APPLICATION
// =====================================

initializeOrbitals();

initializeElectrons();

showFeedback(

    "Drag electrons into orbitals and observe their arrangement."

);