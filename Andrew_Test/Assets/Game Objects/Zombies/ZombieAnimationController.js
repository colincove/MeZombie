#pragma strict
var anim:Animator;
private var dead:boolean;
private var jump:boolean;

private var attackAnimSpeed:float = 1;
private var walkAnimSpeed:float = 1;
function Start () {
}

function Update () {

	if(rigidbody2D.velocity.x!=0 && !dead && !jump){
		anim.SetInteger("State",0);
		anim.speed=walkAnimSpeed;
	}


}

function setWalkAnimSpeed(speed:float){
	walkAnimSpeed = speed;
}

function Attack(){
	anim.SetInteger("State",1);
	anim.speed=attackAnimSpeed;
	

}

function setAttackAnimSpeed(speed:float){
	attackAnimSpeed = speed;
}

function OnKilled(){
	dead=true;
	anim.SetInteger("State",2);
	anim.speed=1;
}

function Jump(){
	jump=true;
	anim.SetInteger("State",3);
	anim.speed=1;
}

function FalsifyJump(){
	jump=false;
	SendMessage("NotJumping");
}