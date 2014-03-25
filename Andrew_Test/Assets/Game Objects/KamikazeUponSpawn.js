#pragma strict


var allowAttack:boolean;
var initialForce:float;
function Start () {
	
	yield WaitForSeconds(.1);
	if (allowAttack)SendMessage("Attack", new GameObject());
	rigidbody2D.AddForce(new Vector2(initialForce,0));

}

function Update () {

}

function OnKilled(){
	rigidbody2D.velocity.x=0;
	rigidbody2D.velocity.y=0;
}