﻿#pragma strict
var anim:Animator;
private var dead:boolean;
function Start () {
}

function Update () {

	if(rigidbody2D.velocity.x!=0 && !dead){
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