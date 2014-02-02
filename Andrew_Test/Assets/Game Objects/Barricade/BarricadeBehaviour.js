#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Zomby"){
		var zombieLane:int = collInfo.gameObject.GetComponent(GameObjectBehaviour).lane;
		collInfo.gameObject.rigidbody2D.velocity.x=0;
		collInfo.gameObject.rigidbody2D.velocity.y=0;
		collInfo.gameObject.GetComponent(ZombyBehaviour).anim.SetTrigger("Attack");
	}
}