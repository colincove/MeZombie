#pragma strict
//States: Idle=0, Attack=1, Dying=2;

import System.Collections.Generic;


var anim:Animator;
var STARTING_HP:int;
var isMelee:boolean;

var bloodSplatter:GameObject;
private var hp:int = STARTING_HP;

var zombiesToAttack_max:int;
private var zombiesToAttack_arr: List.<GameObject> = new List.<GameObject>();

private var allowTrigger:boolean=true;
function Start () {
	hp = STARTING_HP;
}

function Update () {
	if (hp<=0){
		//Human dies		
		anim.SetInteger("State",2);
		
		collider2D.enabled = false;	
	}
}

//for some reason this fires multiple times before exiting
//The code below assumes this, it may have to change if this behaviour changes
function OnTriggerEnter2D(collInfo : Collider2D){ 
	if (allowTrigger){
		if (collInfo.tag=="Zombie"){
			//attack zombie

			var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
			var thisLane = GetComponent(GameObjectBehaviour).lane;
			if (zombieLane == thisLane){ // only attack zombie in same lane
				if (hp>0){
					//the first zombiesToAttack_max zombies will target the human
					if (!zombiesToAttack_arr.Contains(collInfo.gameObject) 
					&& zombiesToAttack_arr.Count<zombiesToAttack_max
					 && !collInfo.GetComponent(ZombieBehaviour).isTargeting)
						zombiesToAttack_arr.Add(collInfo.gameObject);
							
					if (zombiesToAttack_arr.Contains(collInfo.gameObject)){
						
						//Set targeting boolean so the zombie doesnt pursue other attckers
						collInfo.GetComponent(ZombieBehaviour).isTargeting=true;
						
						//pythagoras
						var distanceY:float = transform.position.y - collInfo.transform.position.y;
						var distanceX:float = transform.position.x - collInfo.transform.position.x;
						var distance:float = Mathf.Sqrt(distanceX*distanceX + distanceY*distanceY);
					
						//adjust velocity x and y so that the diagonal velocity is still speedX_start
						collInfo.GetComponent(ZombieBehaviour).speedX = distanceX*collInfo.GetComponent(ZombieBehaviour).speedX_start/distance;
						collInfo.GetComponent(ZombieBehaviour).speedY = distanceY*collInfo.GetComponent(ZombieBehaviour).speedX_start/distance;
					}
					if (!isMelee){
						attackZombie(collInfo.gameObject);
					}
				} else {

					resetZombieConditions(collInfo.gameObject);
					allowTrigger=false;
				}
			}
			
			
		}
	}
	
}

function OnTriggerExit2D(collInfo : Collider2D){  //not sure if necessary
	if (collInfo.tag=="Zombie"){
		//stop attacking zombie
		var zombieLane = collInfo.GetComponent(GameObjectBehaviour).lane;
		var thisLane = GetComponent(GameObjectBehaviour).lane;
		if (zombieLane == thisLane){ 
			anim.SetInteger("State",0);
			
			//resetZombieConditions(collInfo.gameObject);		
		}
		
	}
}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zombie"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;
		
		hp--;
		 if (hp>0) {

			if (isMelee){
				attackZombie(collInfo.gameObject);
			}
		
		}else {//somehow this is necessary even though its already in update.
			collider2D.enabled = false;	
		}
	
	}
}

function OnCollisionExit2D (collInfo : Collision2D) {

}

private function resetZombieConditions(zombie:GameObject){
	zombie.GetComponent(ZombieBehaviour).anim.SetInteger("State",0);
	zombie.GetComponent(ZombieBehaviour).speedX = zombie.GetComponent(ZombieBehaviour).speedX_start;
	zombie.GetComponent(ZombieBehaviour).speedY = zombie.GetComponent(ZombieBehaviour).speedY_start;	
	zombie.GetComponent(ZombieBehaviour).isTargeting=false;
	for (var z:GameObject in zombiesToAttack_arr){
		z.GetComponent(ZombieBehaviour).anim.SetInteger("State",0);
		z.GetComponent(ZombieBehaviour).speedX = z.GetComponent(ZombieBehaviour).speedX_start;
		z.GetComponent(ZombieBehaviour).speedY = z.GetComponent(ZombieBehaviour).speedY_start;	
		z.GetComponent(ZombieBehaviour).isTargeting=false;
	}
	
	firstZombie=null;
	zombiesToAttack_arr.Clear();
}

private var firstZombie:GameObject;
private function attackZombie(zombie:GameObject){
	//attack only first zombie encountered until it leaves the hit area
	if (firstZombie==null){			
		firstZombie = zombie;
	}	
	if (firstZombie==zombie){
		
		anim.SetInteger("State",1);

		//spawn blood splatter randomly
		
		var randomAllow = Random.Range(0, 100);
		if (randomAllow<30){ //30% chance blood will splatter
			var randomX = Random.Range(-0.2, 0.2);
			var randomY = Random.Range(-0.3, 0);
		
			Instantiate(bloodSplatter, new Vector3(zombie.transform.position.x+randomX,zombie.transform.position.y+randomY,zombie.transform.position.z), Quaternion.identity );
		}
	}
}