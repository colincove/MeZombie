#pragma strict

var dir:int;
static var allowClick:boolean;
function Start () {

}

function Update () {

}

function OnMouseDown(){
	if (allowClick){
		WorldRotation.dir = dir;
		WorldRotation.level += dir;
	}
}