#pragma strict


var anim:Animator;
var size:float;
function Start () {

}

function Update () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));



}

