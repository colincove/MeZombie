#pragma strict

var lane:int;
var zombie: GameObject;

function Start () {

}

function Update () {

}

function OnMouseDown () {
	
	//translate lane as Y coordinate
	var placeSpawnY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	placeSpawnY+=zombie.GetComponent(ZombieBehaviour).size/2;
	
	//spawn at left and add velocity of 1
	var spawnedZombie = Instantiate(zombie, new Vector3(-GameMaster.mapX/2-2,placeSpawnY,0), Quaternion.identity );
	spawnedZombie.rigidbody2D.velocity.x=1.6;
	spawnedZombie.GetComponent(GameObjectBehaviour).lane = lane;
}