#pragma strict

var lane:int;
var zombie: GameObject;
var bigZombie: GameObject;
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
function OnTriggerEnter2D (zombieSpawner : Collider2D) {
	
	if(zombieSpawner.gameObject.name=="ZombieRespawn"){
		current_lane_spawning=lane;
		
		if(cm.CanSpawn(ZombiePickerMaster.mouse_x, ZombiePickerMaster.mouse_y, lane)){
			ZombiePicker.can_spawn=true;
			
		}else{
			ZombiePicker.can_spawn=false;
			
		}
	}
	if(cm.CanSpawn(ZombiePickerMaster.mouse_x, ZombiePickerMaster.mouse_y, lane)){
	
	if (zombieSpawner.gameObject.name=="ZombieRespawn" && ZombiePickerMaster.zombieIndex>=0){
		//Standard Zombie
		if (ZombiePickerMaster.zombieIndex==0 ){
			// If enough resources
			if (ResourceMaster.hooman>=1){
				//translate lane as Y coordinate
				var placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				//placeSpawnY+=zombie.GetComponent(ZombieBehaviour).size/2;
				
				//spawn at left and add velocity of 1
				var spawnedZombie = Instantiate(zombie, new Vector3(ZombiePickerMaster.mouse_x,ZombiePickerMaster.mouse_y,0), Quaternion.identity );
				spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
				current_lane_spawning=-1;
				ResourceMaster.hooman-=1;
			}
		} 
		else if(ZombiePickerMaster.zombieIndex==1){
			// If enough resources
			if (ResourceMaster.hooman>=3){
				//translate lane as Y coordinate
				placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				
				//spawn at left and add velocity of 1
				spawnedZombie = Instantiate(bigZombie, new Vector3(ZombiePickerMaster.mouse_x,ZombiePickerMaster.mouse_y,0), Quaternion.identity );
				spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
				current_lane_spawning=-1;
				ResourceMaster.hooman-=3;
			}
		}
		
		ZombiePickerMaster.zombieIndex=-1;
		Destroy(zombieSpawner.gameObject);
		}
	}

}

