#pragma strict

var anim:Animator;
var STARTING_HP:int;

var bloodSplatter:GameObject;
private var hp:int;

function Start () {
	hp = STARTING_HP;
}

function Update () {

}

private var firstZombie:Collider2D;

//for some reason this fires multiple times before exiting
//The code below assumes this, it may have to change if this behaviour changes
function OnTriggerEnter2D(collInfo : Collider2D){ 
	if (collInfo.tag=="Zomby"){
		//attack zombie
		
		//attack only first zombie encountered until it leaves the hit area
		if (firstZombie==null){			
			firstZombie = collInfo;
		}
		if (firstZombie==collInfo){
			var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
			var thisLane = GetComponent(GameObjectBehaviour).lane;
			if (zombieLane == thisLane){ // only attack zombie in same lane
				anim.SetBool("Attack",true);
				anim.SetBool("Idle",false);
				
				
					
				if (hp<=0){
				//allow zombie to run past
					collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",false);
					collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",true);
					firstZombie=null;
				} else {
				
					//var force:float =     collInfo.gameObject.GetComponent(ZombieBehaviour).speed*(-3/1000f);
               		//collInfo.gameObject.rigidbody2D.AddForce(new Vector2(force,0));
               		
               		//spawn blood
               		
               		var randomAllow = Random.Range(0, 100);
               		if (randomAllow<30){
               			var randomX = Random.Range(-0.2, 0.2);
               			var randomY = Random.Range(-0.3, 0);
               		
               			Instantiate(bloodSplatter, new Vector3(collInfo.transform.position.x+randomX,collInfo.transform.position.y+randomY,collInfo.transform.position.z), Quaternion.identity );
					}

				}

			}
		}
		
		
	}
}

function OnTriggerExit2D(collInfo : Collider2D){
	if (collInfo.tag=="Zomby"){
		//stop attacking zombie
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (zombieLane == thisLane){ 
			anim.SetBool("Attack",false);
			anim.SetBool("Idle",true);
			firstZombie=null;

		}
		
	}
}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zomby"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;
Debug.Log("zomby collide");
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