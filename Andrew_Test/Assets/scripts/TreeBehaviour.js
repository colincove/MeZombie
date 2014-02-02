#pragma strict


var onLane:int;

function Start () {

}

function Update () {

}

function  setLane(lane:int){
	onLane = lane;
}

function  getLane():int{
	return onLane;
}

function OnTriggerEnter2D (collInfo : Collider2D) {
	if (collInfo.collider2D.tag=="Zomby"){
		var zombieLane:int = collInfo.GetComponent(ZombyBehaviour).getLane();
		if (zombieLane == onLane)
		collInfo.GetComponent(ZombyBehaviour).changeLane();
	}
}