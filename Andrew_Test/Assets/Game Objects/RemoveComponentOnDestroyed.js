#pragma strict

function Start () {

}

function Update () {

}
function OnDestroyedComplete(attacker:GameObject){	
	Destroy(gameObject);
}

function DestroyMe(){
	Destroy(gameObject);
}