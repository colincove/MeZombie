#pragma strict
public var target:GameObject;
private var targetHealth:HealthComponent;
private var targetLists:TargetLists;

function Start () {
	targetLists = GetComponent("TargetLists");
}

function Update () {
	if(targetHealth!=null){
	if(targetHealth.destroyed){
			SendMessage("OnTargetDestroyed", target);
			DoReTarget();
		}
	}
}
function AgroTarget(newTarget:GameObject){
	if(target==null){
	setMyTarget(newTarget);
	SendMessage("SetTarget", newTarget);
	}
}
function AttackTarget(newTarget:GameObject){
if(target==null){
	setMyTarget(newTarget);
	SendMessage("SetTarget", newTarget);
	}
}
function setMyTarget(newTarget:GameObject){
	
		target=newTarget;
		if(target!=null){
		
		targetHealth=target.GetComponent("HealthComponent");
		}
}
function SetTarget(newTarget:GameObject){
	setMyTarget(newTarget);
}
function DoReTarget(){
	if(targetLists.attackTargetingList.Count>0){
		SendMessage("SetTarget", targetLists.attackTargetingList[0]);
	}else{
		SendMessage("ResetTarget");
	}
}
function AttackRemoveTarget(removedTarget:GameObject){
	if(target!=null){
		if(removedTarget==target){
			target=null;
			DoReTarget();
		}
	}
}
function OnTargetDestroyed(deadTarget:GameObject){
	DoReTarget();
}