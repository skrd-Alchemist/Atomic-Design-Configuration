/* =====================================
   ATOMIC DESIGN CHALLENGE

   REAL ATOM CHALLENGE

   Sprint 4.1

===================================== */



const atoms = {


carbon:{


    name:"Carbon",

    atomicNumber:6,


    configuration:

    "1s² 2s² 2p²",


    explanation:

    "Carbon has two electrons in the 2p subshell. They occupy separate orbitals first to reduce repulsion."

},




nitrogen:{


    name:"Nitrogen",

    atomicNumber:7,


    configuration:

    "1s² 2s² 2p³",


    explanation:

    "Nitrogen has three unpaired electrons in 2p orbitals. This arrangement reduces electron-electron repulsion."

},





oxygen:{


    name:"Oxygen",

    atomicNumber:8,


    configuration:

    "1s² 2s² 2p⁴",


    explanation:

    "Oxygen contains one paired electron in 2p because all three p orbitals already contain one electron."

}



};









function loadAtom(){



const selected =

document.getElementById(
"atomSelect"
).value;





const atom = atoms[selected];






document.getElementById(
"atomTask"
).innerHTML =


`

Build:

<br>

<b>${atom.name}</b>

(Z = ${atom.atomicNumber})

<br><br>

Expected configuration:

<br>

${atom.configuration}

`;






document.getElementById(
"atomFeedback"
).innerHTML =


`

💡 Hint:

${atom.explanation}

`;




}