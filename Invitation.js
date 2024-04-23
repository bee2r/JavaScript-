var t = 1;
var result =[];
function g(){
  while(t <= 40){
  if (t % 4 === 0){
    if (t % 3 === 0){
      result.push ("hello " + t + " kindly get the invitation please ");
    }
      else{ 
        result.push("welcome " + t +" enter please");}
    }
  else {
    result.push ("hello " + t + " kindly get the invitation please ");}

t++
}
return result;
}
console.log(g())
