#pragma strict

function Start () {

}

function Update () {

}

function OnKilled(){
	collider2D.enabled = false;
	tag="Dead";
}