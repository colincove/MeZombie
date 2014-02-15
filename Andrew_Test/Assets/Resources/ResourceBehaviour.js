#pragma strict

function Start () {
	transform.position.x+=Random.Range(-.1,0.1);
	transform.position.y+=.2;
}

function Update () {
	transform.localPosition.z  = -.5;
}

function OnMouseDown () {

	
	if (name=="Human Resource"){
		ResourceMaster.hooman++;
	}
	Destroy(gameObject);
	
}