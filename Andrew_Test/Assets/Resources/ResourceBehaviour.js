#pragma strict
public var resourceId=0;

function Start () {
	transform.position.x+=Random.Range(-.1,0.1);
	transform.position.y+=.2;
}

function Update () {
	transform.localPosition.z  = -.5;
}

function OnMouseDown () {

	ResourceMaster.AddResource(resourceId, 1);
	
	Destroy(gameObject);
	
}