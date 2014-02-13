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
	if (collInfo.tag=="Zombie"){
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (hp<=0 && zombieLane == thisLane){
			 // only allow zombie in the same lane to run past
			collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetInteger("State",0);
			//collInfo.GetComponent(ZombieBehaviour).speedX = collInfo.GetComponent(ZombieBehaviour).speedX_start;
			//collInfo.GetComponent(ZombieBehaviour).speedY = collInfo.GetComponent(ZombieBehaviour).speedY_start;
			
		}
	}
}


function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zombie"){

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