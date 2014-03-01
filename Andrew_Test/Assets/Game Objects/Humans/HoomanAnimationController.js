#pragma strict
var anim:Animator;
function Start () {

}

function Update () {

	//


}

function Idle(){
	anim.SetInteger("State",0);
}

function Attack(){
	anim.SetInteger("State",1);
}

function Die(){
	anim.SetInteger("State",2);
}