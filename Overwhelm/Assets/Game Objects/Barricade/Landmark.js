#pragma strict

var healthToZero:boolean;
function Start () {

}

function Update () {

}
function OnKilled(){
	if (healthToZero){
		GameMaster.winCount++;
	}
}