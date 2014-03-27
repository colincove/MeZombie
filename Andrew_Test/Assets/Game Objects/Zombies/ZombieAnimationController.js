#pragma strict
var anim:Animator;
private var dead:boolean;
private var jump:boolean;
function Start () {
}

function Update () {

	if(rigidbody2D.velocity.x!=0 && !dead && !jump){
		anim.SetInteger("State",0);
	}


}
function Attack(){
	anim.SetInteger("State",1);
}

function OnKilled(){
	dead=true;
	anim.SetInteger("State",2);
}

function Jump(){
	jump=true;
	anim.SetInteger("State",3);
}

function FalsifyJump(){
	jump=false;
	SendMessage("NotJumping");
}