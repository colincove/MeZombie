#pragma strict

var lane:int;
private var zombie_arr: GameObject[];
var gm:GameObject;
var cm:CreepMaster;
static var current_lane_spawning:int=-1;
function Start(){
	gm = GameObject.Find("_gameMaster");
	if(gm!=null){
		cm = gm.GetComponent("CreepMaster");
		if(cm!=null){
			cm.AddCreepObj(gameObject);
		}
	}
	transform.gameObject.renderer.enabled=false;
	
	zombie_arr = GameObject.Find("ZombiePicker").GetComponent(ZombiePickerMaster).zombie_arr;
}

function Update () {
	if(lane==current_lane_spawning){
		transform.gameObject.renderer.enabled=true;
	}else{
		transform.gameObject.renderer.enabled=false;
	}
}
function OnTriggerExit2D (zombieSpawner : Collider2D) {
	
	if(zombieSpawner.gameObject.name=="ZombieRespawn"){
		transform.gameObject.renderer.enabled=false;
	}
	
}

function OnTriggerEnter2D(zombieSpawner : Collider2D) {
	MagicTrigger(zombieSpawner);
}

function OnTriggerStay2D(zombieSpawner : Collider2D) {
	MagicTrigger(zombieSpawner);
}

// For some dumb reason, we need both ontriggerenter2d and ontriggerstay2d to spawn the zombies.
// I dont know if doing it this way breaks something else.  
function MagicTrigger (zombieSpawner : Collider2D) {
	
	if(zombieSpawner.gameObject.name=="ZombieRespawn"){
		current_lane_spawning=lane;
		
		if(cm.CanSpawn(ZombiePickerMaster.mouse_x, ZombiePickerMaster.mouse_y, lane)){
			ZombiePicker.can_spawn=true;
			
		}else{
			ZombiePicker.can_spawn=false;
			
		}
	}
	//if (zombieSpawner.gameObject.tag=="Zombie" && name=="Lane1")Debug.Log(zombieSpawner.gameObject.name);


	if(cm.CanSpawn(ZombiePickerMaster.mouse_x, ZombiePickerMaster.mouse_y, lane)){
	
					
		if (zombieSpawner.gameObject.name=="ZombieRespawn" && ZombiePickerMaster.zombieIndex>=0){
			Debug.Log(zombieSpawner.gameObject.name);
			// If enough resources
			if (ResourceMaster.hooman>=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,0]
			&& ResourceMaster.metal>=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,1]
			&& ResourceMaster.gasoline>=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,2]
			&& ResourceMaster.rock>=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,3]
			){
				//translate lane as Y coordinate
				var placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				//placeSpawnY+=zombie.GetComponent(ZombieBehaviour).size/2;
				
				//spawn at left and add velocity of 1
				var spawnedZombie = Instantiate(zombie_arr[ZombiePickerMaster.zombieIndex], new Vector3(ZombiePickerMaster.mouse_x,ZombiePickerMaster.mouse_y,0), Quaternion.identity );
				spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
				current_lane_spawning=-1;
				
				ResourceMaster.hooman-=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,0];
				ResourceMaster.metal-=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,1];
				ResourceMaster.gasoline-=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,2];
				ResourceMaster.rock-=ResourceMaster.zombieCost_arr[ZombiePickerMaster.zombieIndex,3];
			}
			
			
			ZombiePickerMaster.zombieIndex=-1;
			
			//yield WaitForSeconds(5);
			Destroy(zombieSpawner.gameObject);
		}
	}

}

