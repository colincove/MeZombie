#pragma strict

//States: Run=0, Attack=1;
var anim:Animator;
var size:float;
var speedX_start:float;
var speedY_start:float;

var speedX:float;
var speedY:float;

var isTargeting:boolean;

function Start () {
	anim.SetInteger("State",0);
	speedX = speedX_start;
	speedY = speedY_start;
	
	isTargeting=false;
}

function FixedUpdate () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));
	if (anim.GetInteger("State")==0){
		rigidbody2D.velocity.x = speedX;
		rigidbody2D.velocity.y = speedY;
		rigidbody2D.mass=0.0001;
	}if (anim.GetInteger("State")==1){
		rigidbody2D.velocity.x = 0;
		rigidbody2D.velocity.y = 0;
		rigidbody2D.mass=9999;
	}

}

function OnCollisionEnter2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Hooman" ||collInfo.gameObject.tag=="Barricade"){
	
		//zombie attack 
		anim.SetInteger("State",1);

		
		
	}
}

function OnCollisionExit2D (collInfo : Collision2D) {
	if (collInfo.gameObject.tag=="Hooman" ||collInfo.gameObject.tag=="Barricade"){
	
		anim.SetInteger("State",0);

		speedX = speedX_start;
		speedY = speedY_start;
		
		Debug.Log("exited collider of "+collInfo.gameObject.tag);
		
	}
}