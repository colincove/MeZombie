#pragma strict
var anim:Animator;
function Start () {

}

function Update () {

if(transform.rigidbody2D.velocity.x!=0){
anim.SetInteger("State",0);
}

}
function Attack(){
anim.SetInteger("State",1);
}