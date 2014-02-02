#pragma strict

var STARTING_HP:int;
private var hp:int;

var anim:Animator;

function Start () {
	hp = STARTING_HP*3;
	
}

function Update () {

}


function OnTriggerEnter2D(collInfo : Collider2D){
	if (collInfo.tag=="Zomby"){
		if (hp<=0){
			collInfo.GetComponent(ZombyBehaviour).anim.SetBool("Run",true);
			collInfo.gameObject.GetComponent(ZombyBehaviour).anim.SetBool("Attack",false);
			collInfo.rigidbody2D.velocity.x = 1.6;
		}
	}
}


function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zomby"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;
		collInfo.gameObject.rigidbody2D.velocity.x=0;
		collInfo.gameObject.rigidbody2D.velocity.y=0;
		collInfo.gameObject.GetComponent(ZombyBehaviour).anim.SetBool("Attack",true);
		hp--;

		if (hp<=0){
			anim.SetTrigger("Break");
			collider2D.enabled = false;	
		}
		else if (hp > 0 && hp%(STARTING_HP)==0){
			anim.SetTrigger("Break");
			
		}
	}
}