#pragma strict

var anim:Animator;
var STARTING_HP:int;
private var hp:int;

function Start () {
	hp = STARTING_HP;
}

function Update () {

}

function OnTriggerEnter2D(collInfo : Collider2D){
	if (collInfo.tag=="Zomby"){
		//attack zombie
		
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (zombieLane == thisLane){ // only attack zombie in same lane
			anim.SetBool("Attack",true);
			anim.SetBool("Idle",false);
			
			
				
			if (hp<=0){
			//allow zombie to run past
				collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",false);
				collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",true);
			} else {
			//slow zombie down while attacking
				var force:float = 	collInfo.gameObject.GetComponent(ZombieBehaviour).speed*(-1/1000f);
				collInfo.gameObject.rigidbody2D.AddForce(new Vector2(force,0));
			}

		}
		
		
	}
}

function OnTriggerExit2D(collInfo : Collider2D){
	if (collInfo.tag=="Zomby"){
		
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (zombieLane == thisLane){ 
			anim.SetBool("Attack",false);
			anim.SetBool("Idle",true);
		}
		
	}
}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zomby"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;

	//zombie attack human
		collInfo.gameObject.rigidbody2D.velocity.x=0;
		collInfo.gameObject.rigidbody2D.velocity.y=0;
		collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",true);
		collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",false);
		hp--;

		if (hp<=0){
			anim.SetTrigger("Die");
			collider2D.enabled = false;	
			
			collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",false);
			collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",true);
		}
	}
}