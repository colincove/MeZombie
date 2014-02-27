#pragma strict

var lane:int;
var zombie: GameObject;
var bigZombie: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (zombieSpawner : Collider2D) {

	if (zombieSpawner.gameObject.name=="ZombieRespawn" && ZombiePickerMaster.zombieIndex>=0){
		//Standard Zombie
		if (ZombiePickerMaster.zombieIndex==0 ){
			// If enough resources
			if (ResourceMaster.hooman>=1){
				//translate lane as Y coordinate
				var placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				//placeSpawnY+=zombie.GetComponent(ZombieBehaviour).size/2;
				
				//spawn at left and add velocity of 1
				var spawnedZombie = Instantiate(zombie, new Vector3(-GameMaster.mapX/2-2,placeSpawnY,0), Quaternion.identity );
				spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
				
				ResourceMaster.hooman-=1;
			}
		} 
		else if(ZombiePickerMaster.zombieIndex==1){
			// If enough resources
			if (ResourceMaster.hooman>=3){
				//translate lane as Y coordinate
				placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
				
				//spawn at left and add velocity of 1
				spawnedZombie = Instantiate(bigZombie, new Vector3(-GameMaster.mapX/2-2,placeSpawnY,0), Quaternion.identity );
				spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
				
				ResourceMaster.hooman-=3;
			}
		}
		ZombiePickerMaster.zombieIndex=-1;
		Destroy(zombieSpawner.gameObject);
	}

}

