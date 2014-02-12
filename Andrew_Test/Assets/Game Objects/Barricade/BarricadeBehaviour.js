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
			var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
			var thisLane = GetComponent(GameObjectBehaviour).lane;
			if (zombieLane == thisLane){ // only allow zombie in the same lane to run past
				collInfo.GetComponent(ZombieBehaviour).anim.SetBool("Run",true);
				collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",false);
			}
		}
	}
}


function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zomby"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;
		//var thisLane = GetComponent(GameObjectBehaviour).lane;
		//if (zombieLane == thisLane){
		collInfo.gameObject.rigidbody2D.velocity.x=0;
		collInfo.gameObject.rigidbody2D.velocity.y=0;
		collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",true);
		collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",false);
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