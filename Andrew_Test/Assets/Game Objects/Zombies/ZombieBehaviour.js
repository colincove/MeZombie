#pragma strict


var anim:Animator;
var size:float;
var speedX_start:float;
var speedY_start:float;

var speedX:float;
var speedY:float;
function Start () {
	anim.SetBool("Run",true);
	speedX = speedX_start;
	speedY = speedY_start;
}

function Update () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));
	if (anim.GetBool("Run")){
		rigidbody2D.velocity.x = speedX;
		rigidbody2D.velocity.y = speedY;
		rigidbody2D.mass=0.0001;
	}if (anim.GetBool("Attack")){
		rigidbody2D.velocity.x = 0;
		rigidbody2D.velocity.y = 0;
		rigidbody2D.mass=9999;
	}



}

