#pragma strict


var anim:Animator;
var size:float;
var speed:float;
function Start () {
	anim.SetBool("Run",true);
}

function Update () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));
	if (anim.GetBool("Run")){
		rigidbody2D.velocity.x = speed;
		rigidbody2D.mass=0.0001;
	}if (anim.GetBool("Attack")){
		rigidbody2D.velocity.x = 0;
		rigidbody2D.mass=9999;
	}
	rigidbody2D.velocity.y = 0;



}

