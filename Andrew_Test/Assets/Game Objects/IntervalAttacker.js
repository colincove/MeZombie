#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int=500;//in milliseconds
public var locomotionDelay:int=500;
private var target:GameObject;
private var targetHealth:HealthComponent;
private var targetLists:TargetLists;
function Start () {
	lastAttackTime=Time.time*1000;
	targetLists = GetComponent("TargetLists");
}

function Update () {
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
				if(targetHealth.destroyed){
					SendMessage("OnTargetDestroyed", target);
				}
			}
		}else{
			lastAttackTime=Time.time*1000;
		}
	}
}
function ReTarget(target:GameObject){	
	lastAttackTime=Time.time*1000;
}
function Attack(){
}
function AttackTarget(newTarget:GameObject){
	if(target==null){
		target=newTarget;
		targetHealth=target.GetComponent("HealthComponent");
	}
}
function AttackRemoveTarget(removedTarget:GameObject){
	if(target!=null){
		if(removedTarget==target){
			target=null;
			if(targetLists.attackTargetingList.Count>0){
				target=targetLists.attackTargetingList[0];
				targetHealth=target.GetComponent("HealthComponent");
			}
		}
	}
}
function DelayLocomotion(delay:int){
}