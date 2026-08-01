/* =====================================
   ATOMIC DESIGN CHALLENGE

   ENERGY LADDER SYSTEM

   Sprint 5.1

===================================== */



const energyExplanation =
document.getElementById(
"energyExplanation"
);





function analyseEnergy(){



let totalEnergy = 0;


let highestOrbital="";





atomState.orbitals.forEach(
orbital=>{



if(orbital.electrons>0){



totalEnergy +=
Number(orbital.level)
*
orbital.electrons;




if(Number(orbital.level)>1){


highestOrbital =
orbital.level+
orbital.subshell;


}



}


});






if(totalEnergy<=8){


energyExplanation.innerHTML =

`
✅ Excellent!

Electrons are mainly placed in lower-energy orbitals.
The atom has a more stable arrangement.

`;



}




else{


energyExplanation.innerHTML =

`

⚠ Some electrons are occupying higher-energy orbitals.

Electrons prefer lower-energy orbitals because they are more stable.

`;



}




}







// update automatically

setInterval(
analyseEnergy,
1000
);