#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int=500;//in milliseconds
private var target:GameObject;
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
				lastAttackTime=Time.time*1000;
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
	}
}
function AttackRemoveTarget(removedTarget:GameObject){
	if(target!=null){
		if(removedTarget==target){
			target=null;
			if(targetLists.attackTargetingList.Count>0){
				target=targetLists.attackTargetingList[0];
			}
		}
	}
}
