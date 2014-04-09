#pragma strict

function Start () {
	renderer.enabled=false;
}

function Update () {

}

function OnTriggerEnter2D(colInfo: Collider2D) {
	if (colInfo.tag=="VisionObject" 
	&& colInfo.transform.parent.gameObject.GetComponent(GameObjectBehaviour).lane>0){
			renderer.enabled=true;

	}
}