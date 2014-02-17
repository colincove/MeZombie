#pragma strict
private var target:GameObject;
private var targetAgroLists:TargetLists;
private var delayMotion:int=0;
public var speed:float=3;
private var vx:float=0;
private var vy:float=0;
function Start () {
}

function Update () {
	if(target==null){
		//there is no target. Move to the right. 
		vy=0;
		vx=speed;
	}else{
		//there is a target. Move toward it using pythagoras
		var dy:float = transform.position.y - target.transform.position.y;
		var dx:float = transform.position.x - target.transform.position.x;
		var a:float = Mathf.Atan2(dy, dx);
		vy=-Mathf.Sin(a)*speed;
		vx=-Mathf.Cos(a)*speed;
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
function AgroTarget(newTarget:GameObject){
	var newTargetLists:TargetLists = newTarget.GetComponent("TargetLists");
	if(newTargetLists==null || targetAgroLists==null){
		target=newTarget;
	}else if(newTargetLists.agroOpponentList.Count<targetAgroLists.agroOpponentList.Count){
		//if there are less zombies agro'ing this new target, then target it. Spreads out the zombies. 
		target=newTarget;
		targetAgroLists=target.GetComponent("TargetLists");
	}
}
function AgroReTarget(newTarget:GameObject){
	target=newTarget;
}