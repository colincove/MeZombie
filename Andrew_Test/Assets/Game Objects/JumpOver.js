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
		collider2D.isTrigger=true;
	}
}

function NotJumping(){
	
		collider2D.isTrigger=false;
}