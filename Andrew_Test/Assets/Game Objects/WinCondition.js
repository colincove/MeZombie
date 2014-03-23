#pragma strict

static var isWin:boolean;
var healthToZero:boolean;
function Start () {

}

function Update () {

}


function OnKilled(){
	if (healthToZero){
		isWin=true;
		TogglePause.setWin();
	}
}