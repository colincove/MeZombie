#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D (collInfo : Collision2D) {
	
	if (collInfo.gameObject.tag=="Zombie"){
		yield WaitForSeconds(0.02);
		collInfo.gameObject.GetComponent(HealthComponent).MaxDamage();
	}
}