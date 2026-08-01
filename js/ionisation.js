/* =====================================
   ATOMIC DESIGN CHALLENGE

   IONISATION ENERGY CHALLENGE

   Sprint 4.2

===================================== */



function checkIE(answer){



const feedback =
document.getElementById(
"ieFeedback"
);






if(answer==="N"){



feedback.innerHTML =


`
✅ Correct!

<br><br>

Nitrogen has a more stable half-filled
2p³ arrangement.

<br><br>

Oxygen has one paired electron in 2p.
The repulsion between paired electrons
makes one electron easier to remove.

`;



}





else{


feedback.innerHTML =


`
❌ Not quite.

<br><br>

Although oxygen has stronger nuclear attraction,
its paired 2p electron experiences more repulsion.

`;



}


}