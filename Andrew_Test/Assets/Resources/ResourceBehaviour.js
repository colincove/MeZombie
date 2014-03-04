#pragma strict
public var resourceId=0;
private var isPickedUp;

function Start () {
	transform.position.x+=Random.Range(-.1,0.1);
	transform.position.y+=.2;
}

function Update () {
	transform.localPosition.z  = -.5;
}

function OnMouseDown () {

	if (!isPickedUp){
		ResourceMaster.AddResource(resourceId, 1);
		collider2D.enabled=false;
		transform.localScale.x=0;
		transform.localScale.y=0;
		isPickedUp=true;
	}
	
	yield WaitForSeconds(2);
	Destroy(gameObject);
	
}