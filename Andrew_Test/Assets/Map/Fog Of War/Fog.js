#pragma strict

var lane:int;
function Start () {

}

function Update () {

}

function OnTriggerEnter2D(colInfo: Collider2D) {
if (colInfo.tag=="VisionObject" && 
	colInfo.transform.parent.gameObject.GetComponent(GameObjectBehaviour).lane == lane)
	
	Destroy(gameObject);
	
}