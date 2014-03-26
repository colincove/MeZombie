#pragma strict
private var target:GameObject;
private var agroTarget:GameObject;
private var delayMotion:int=0;
private var vx:float=0;
private var vy:float=0;
private var dead:boolean;

public var speed:float;
public var targeting:AbstractTargeting;
public var zombieWalk:boolean=true; //walk forward when there is no target to attack

function Start () {
}

function Update () {


	if(!dead){
		//there is no target. Move to the right. 
		vy=0;
		if(zombieWalk){
			vx=speed;//zombie. walk forward when there is no target;
		}else{
			vx=0;//its a human. do not walk when there is no target;
		}
		
		if (targeting!=null)
			agroTarget=targeting.getAgroTarget();
		if(agroTarget!=null ){
			if(agroTarget.tag!="Barricade" && agroTarget.tag!="Dead"){
			
				
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
	} else {
		//stop moving when dead (corpse wont move)
		rigidbody2D.velocity.x = 0;
		rigidbody2D.velocity.y = 0;
	}
			//Debug.Log(name+" "+(rigidbody2D.velocity.x));

	
}
//message
function DelayLocomotion(delay:int){
	delayMotion=Time.time*1000+delay;
}

function OnKilled(){
	dead=true;
}