#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int=500;//in milliseconds
public var locomotionDelay:int=500;
private var target:GameObject;
private var targetLists:TargetLists;

function Start() {
	lastAttackTime=Time.time*1000;
	targetLists = GetComponent("TargetLists");
}

function Update() {
	if(targetLists!=null){
		if(targetLists.attackTargetingList.Count>0){
		//if there are targets within attack range
			var time:int = Time.time*1000;
			var diff:int=Time.time*1000-lastAttackTime;
			
			if(Time.time*1000-lastAttackTime>attackSpeed)
			{
				SendMessage("Attack", target);
				SendMessage("DelayLocomotion", locomotionDelay);
				lastAttackTime=Time.time*1000;
				
			}
		}else{
			lastAttackTime=Time.time*1000;
		}
	}
}
function ReTarget(newTarget:GameObject){	
	target=newTarget;
	lastAttackTime=Time.time*1000;
}
function SetTarget(newTarget:GameObject)
{
	target=newTarget;
	lastAttackTime=Time.time*1000;

}
function Attack(){
}

function DelayLocomotion(delay:int){
}