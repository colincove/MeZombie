#pragma strict


var anim:Animator;
var prevPositionY:float;
function Start () {
	prevPositionY = transform.position.y;
}

function Update () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));



}

