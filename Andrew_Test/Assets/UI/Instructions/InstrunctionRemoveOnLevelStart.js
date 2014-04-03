#pragma strict

function Start () {

}

function Update () {

}

function PlayerControlStarted(){
	renderer.enabled=true;
	Destroy(gameObject);
}