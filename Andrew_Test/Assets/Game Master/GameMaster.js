#pragma strict

var zombie: GameObject;
var tree : GameObject;

var timer: float = 60; // set duration time in seconds in the Inspector
var spawnDifference: float = 2;
private var spawnTimer:float;

//get map size
var mapSprite : Sprite;
static var  mapX : float;
static var  mapY : float;

static var  numLanes:int = 4;

//resource count
var hooman_startingResource:int;
var metal_startingResource:int;
var gasoline_startingResource:int;
var rock_startingResource:int;
function Start () {

	mapX = mapSprite.bounds.size.x;
	mapY = mapSprite.bounds.size.y;
   
	//Debug.Log("menu difficulty: "+MenuBehaviour.difficulty);
	spawnTimer = timer;
	
	ResourceMaster.hooman = hooman_startingResource;
	ResourceMaster.metal = metal_startingResource;
	ResourceMaster.gasoline = gasoline_startingResource;
	ResourceMaster.rock = rock_startingResource;
	

}

function Update () {
	//4 lanes
	//spawnZombieTimer();
	      if (Input.GetKey ("escape")) {
			TogglePause.setPause(true);
		}
}

function spawnZombieTimer(){
 	timer -= Time.deltaTime;
 	
 	//spawn zombie every spawnDifference seconds
 	if (spawnTimer - timer >= spawnDifference){
		spawnTimer = timer;
		
		//pick random lane to spawn
		var lane = Random.Range(1, numLanes+1);
		lane=2;
		//translate lane as Y coordinate
		var placeSpawnY = GameObject.Find("Lane"+lane).transform.localPosition.y-0.3;
		var deviation = Random.Range(-0.6, 0.6);
		placeSpawnY += deviation;
		
		//spawn at left and add velocity of 1
		var spawnedZombie = Instantiate(zombie, new Vector3(-mapX/2-2,placeSpawnY,lane*10 + deviation), Quaternion.identity );
		spawnedZombie.rigidbody2D.velocity.x=spawnedZombie.GetComponent(ZombieBehaviour).speedX;
		spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
		
		
		//spawnedZombie.transform.localScale = Vector3(0.1,0.1,0.1);
		
 	}
  if (timer > 0){
    //Debug.Log(timer);
  } else {
   // Debug.Log("end timer");
    
  }
}
