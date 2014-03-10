#pragma strict
var anim:Animator;
function Start () {

}

function Update () {

	var hp:int = GetComponent(HealthComponent).hp;
	var hp_total:int= GetComponent(HealthComponent).hp_total;
	if (hp>0){
		anim.SetInteger("State",0);
	} else {
		anim.SetInteger("State",3);
	}

}

function Idle(){
	//anim.SetInteger("State",0);
}

function Attack(){
	//anim.SetInteger("State",1);
}

function OnKilled(){
	anim.SetInteger("State",3);

	
	
}