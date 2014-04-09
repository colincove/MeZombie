#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int;//in milliseconds
public var locomotionDelay:int;
public var targeting:AbstractTargeting;
private var target:GameObject;
private var dead:boolean;
function Start() {
	lastAttackTime=Time.time*1000;
}
function Update() {
	if (!dead){
		target=targeting.getAttackTarget();
		if(target!=null){
		//if there are targets within attack range
			var time:int = Time.time*1000;
			var diff:int=Time.time*1000-lastAttackTime;
			
			if(diff>attackSpeed)
			{
				SendMessage("Attack", target);
				SendMessage("DelayLocomotion", locomotionDelay);
				lastAttackTime=Time.time*1000;
			}
		}else{
			lastAttackTime=Time.time*1000;
			SendMessage("Idle", target);
		}
	}
}
function Attack(){
}

function DelayLocomotion(delay:int){
}

function Idle(){

}

function OnKilled(){
	dead=true;
}