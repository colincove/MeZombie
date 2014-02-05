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
	}if (anim.GetBool("Attack")){
		rigidbody2D.velocity.x = 0;
	}
	rigidbody2D.velocity.y = 0;



}

