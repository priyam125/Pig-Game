
var scores,roundScore,activePlayer,dice;
scores=[0,0];
roundScore=0;
activePlayer=0;


document.getElementById('current-0').innerHTML= "0";
document.getElementById('current-1').innerHTML= "0";
document.getElementById('score-0').innerHTML= "0";
document.getElementById('score-1').innerHTML= "0";


document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click',btn)
function btn() {

  dice=Math.floor(Math.random()*6)+1;
  // document.getElementById('current-0').innerHTML= dice;
  var diceDom=document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src='dice-'+dice+'.png';

  if(dice>1){
      roundScore+=dice;
     document.getElementById('current-'+ activePlayer).innerHTML= roundScore;
  }else{


    // var final=document.getElementById('score-'+ activePlayer).innerHTML;
    // document.getElementById('score-'+ activePlayer).innerHTML= roundScore + +final;
    roundScore=0;
    document.getElementById('current-'+activePlayer).innerHTML= "0";
    activePlayer===0 ? activePlayer =1 : activePlayer =0;
    if(activePlayer===1){
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
  }
  else{
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }
  }

  document.querySelector('.btn-hold').addEventListener('click',btnhold)

  function btnhold() {

    var final=document.getElementById('score-'+ activePlayer).innerHTML;
    if(final>=100) {
      alert("current player wins")
    }
    document.getElementById('score-'+ activePlayer).innerHTML= roundScore + +final;
    roundScore = 0;
    document.getElementById('current-'+activePlayer).innerHTML= "0";
    console.log(final);
    activePlayer===0 ? activePlayer =1 : activePlayer =0;
    if(activePlayer===1){
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
  }
  else{
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }
  }


}
