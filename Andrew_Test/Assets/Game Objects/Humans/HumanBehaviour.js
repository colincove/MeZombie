#pragma strict
import System.Collections.Generic;


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

var zombiesToAttack_max:int;
private var zombiesToAttack_arr: List.<Collider2D> = new List.<Collider2D>();
//for some reason this fires multiple times before exiting
//The code below assumes this, it may have to change if this behaviour changes
function OnTriggerEnter2D(collInfo : Collider2D){ 
	if (collInfo.tag=="Zomby"){
		//attack zombie

		
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (zombieLane == thisLane){ // only attack zombie in same lane
			
			//the first zombiesToAttack_max zombies will target the human
			if (zombiesToAttack_arr.Count <zombiesToAttack_max  && !zombiesToAttack_arr.Contains(collInfo)){
				zombiesToAttack_arr.Add(collInfo);
				
				//pythagoras
				var distanceY:float = transform.position.y - collInfo.transform.position.y;
				var distanceX:float = transform.position.x - collInfo.transform.position.x;
				var distance:float = Mathf.Sqrt(distanceX*distanceX + distanceY*distanceY);
			
				//adjust velocity x and y so that the diagonal velocity is still speedX_start
				collInfo.GetComponent(ZombieBehaviour).speedX = distanceX*collInfo.GetComponent(ZombieBehaviour).speedX_start/distance;
				collInfo.GetComponent(ZombieBehaviour).speedY = distanceY*collInfo.GetComponent(ZombieBehaviour).speedX_start/distance;
			}
			//attack only first zombie encountered until it leaves the hit area
			if (firstZombie==null){			
				firstZombie = collInfo;
			}	
			if (firstZombie==collInfo){
				anim.SetBool("Attack",true);
				anim.SetBool("Idle",false);
				
				
					
				if (hp<=0){
				//allow zombie to run past and reset conditions to kill zombie
					collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Attack",false);
					collInfo.gameObject.GetComponent(ZombieBehaviour).anim.SetBool("Run",true);
					collInfo.GetComponent(ZombieBehaviour).speedX = collInfo.GetComponent(ZombieBehaviour).speedX_start;
					collInfo.GetComponent(ZombieBehaviour).speedY = collInfo.GetComponent(ZombieBehaviour).speedY_start;
					
					firstZombie=null;
				} else {
				
               		//spawn blood splatter randomly
               		
               		var randomAllow = Random.Range(0, 100);
               		if (randomAllow<30){ //30% chance blood will splatter
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
			
			collInfo.GetComponent(ZombieBehaviour).speedX = collInfo.GetComponent(ZombieBehaviour).speedX_start;
			collInfo.GetComponent(ZombieBehaviour).speedY = collInfo.GetComponent(ZombieBehaviour).speedY_start;
					
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