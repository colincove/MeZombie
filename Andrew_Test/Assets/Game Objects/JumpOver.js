#pragma strict

public var allowJump:boolean;
function Start () {
	allowJump=true;
}

function Update () {

}

function OnTriggerEnter2D(coll : Collider2D) {

	if(coll.gameObject.name=="JumpOver" && allowJump){
		SendMessage("Jump");
		collider2D.enabled=false;
	}
}

function NotJumping(){
	
		collider2D.enabled=true;
}