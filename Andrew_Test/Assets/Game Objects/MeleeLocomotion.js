#pragma strict
private var target:GameObject;
private var agroTarget:GameObject;
private var targetAgroLists:TargetLists;
private var delayMotion:int=0;
public var speed:float=3;
private var vx:float=0;
private var vy:float=0;
function Start () {
}

function Update () {
	//there is no target. Move to the right. 
	vy=0;
	vx=speed;
	if(agroTarget!=null ){
		if(agroTarget.tag!="Barricade"){
			//there is a target. Move toward it using pythagoras
			var dy:float = transform.position.y - agroTarget.transform.position.y;
			var dx:float = transform.position.x - agroTarget.transform.position.x;
			var a:float = Mathf.Atan2(dy, dx);
			vy=-Mathf.Sin(a)*speed;
			vx=-Mathf.Cos(a)*speed;
		}
	}
	
	//if there is no delay on motion, continue moving
	if(Time.time*1000>delayMotion){
		rigidbody2D.velocity.x = vx;
		rigidbody2D.velocity.y = vy;
	}else{
		//if there is a delay, stop the rigit body from moving. 
		rigidbody2D.velocity.x = 0;
		rigidbody2D.velocity.y = 0;
	}
}
//message
function DelayLocomotion(delay:int){
	delayMotion=Time.time*1000+delay;
}
function SetTarget(newTarget:GameObject){	
	target=newTarget;
}
function ResetTarget(){	
	target=null;
}
function SetAgroTarget(newTarget:GameObject){	
	agroTarget=newTarget;
}
function ResetAgroTarget(){	
	agroTarget=null;
}