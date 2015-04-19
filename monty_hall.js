
var switchWin=0;
var SwitchLoose=0;
var noSwitchWin=0;
var noSwitchLoose=0;

function looper(guess,ans){
		var arr=[1,2,3];
		
		for (var j=0;j<arr.length;j++){
			if (arr[j]!==guess&& arr[j]!==ans){
				arr.splice(j,1);}
		}
		return arr;
}

function noSwitch(){
	for(var i=0;i<1000;i++){
		var ans=Math.floor(Math.random()*3+1);
		var guess=Math.floor(Math.random()*3+1);
		var arr=looper(guess,ans);	
		if(arr.indexOf(guess)=== arr.indexOf(ans)){
				noSwitchWin++;}
	}
	return noSwitchWin;
}

function switchGuess(){
	for(var i=0;i<1000;i++){
		var ans=Math.floor(Math.random()*3+1);
		var guess=Math.floor(Math.random()*3+1);
		var arr=looper(guess,ans);
		if(arr.indexOf(guess)=== 0){
			guess=arr[1];
		}else{
			guess=arr[0];}

		if(arr.indexOf(guess)=== arr.indexOf(ans)){
			switchWin++;}
		}
	return switchWin;
}

noSwitchWin=noSwitch()/1000*100;
noSwitchLoose=100-noSwitchWin;

console.log("Percentage to win without switching guess is "+noSwitchWin+"%");
console.log("Percentage to loose without switching guess is "+noSwitchLoose+"%");

switchWin=switchGuess()/1000*100;
switchLoose=100-switchWin;

console.log("Percentage to win when switching guess is "+switchWin+"%");
console.log("Percentage to win when switching guess is "+switchLoose+"%");


