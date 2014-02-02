#pragma strict



function Start () {

}

function Update () {

}



function OnTriggerEnter2D (collInfo : Collider2D) {
	if (collInfo.collider2D.tag=="Zomby"){
		var zombieLane:int = collInfo.GetComponent(GameObjectBehaviour).lane;
		
	}
}