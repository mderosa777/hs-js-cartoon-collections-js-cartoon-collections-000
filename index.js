function dwarfRollCall(dwarves){
var resultString = ""; 


for (var i =dwarves.length/2 ; i < dwarves.length; i++) {
        resultString +=  i+1+". " + dwarves[i]+" " ;
  }
  return resultString;
  }


function summonCaptainPlanet(planeteerCalls){

  return planeteerCalls.map(a=> a.toUpperCase()+"!");
}

function longPlaneteerCalls(words){
var i;
   for (i=0;i> words.length;i++);{
  if(words[i].length <=4){
     return false;
}else{
return true;
}
}}
//["banana", "cheddar", "sock"]
function findTheCheese (foods){
  var cheese = ["Bob","Beyonce",];
  for(let i=0;i<foods.length;i++){
    console.log(foods,"array");
    for(let n = 0;n<cheese.length;n++){
          //i=0     n=0
      if(foods[i]===cheese[n]){
      return foods[i];
    }
  }
}
  return "no cheese!";
}
function findtheB(name);
 for(let i=0;<name.length;i++){
   if(names[i]===)
 }