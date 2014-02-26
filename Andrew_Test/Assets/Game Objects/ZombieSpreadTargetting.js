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
		//	SendMessage("OnTargetDestroyed", target);
			//DoReTarget();
		}
	}
}
function AgroTarget(newTarget:GameObject){
	if(target==null){
		setMyTarget(newTarget);
		SendMessage("SetTarget", newTarget);
	}else{
		targetAlone(newTarget);
	}
}
function targetAlone(newTarget:GameObject){
	//look through list of who I am agro'ing. If there is someone with fewer opponents, target them instead of the closest. 
	//will spread zombies out.
	var newTargetLists:TargetLists = newTarget.GetComponent("TargetLists"); 
	if(newTargetLists!=null){
		for(var agroTarget:GameObject in targetLists.argoTargetingList){
		if(agroTarget!=null){
		
			var agroTargetLists:TargetLists = agroTarget.GetComponent("TargetLists"); 
			if(agroTargetLists!=null){
				if(agroTargetLists.attackOpponentList.Count<targetLists.attackOpponentList.Count){
					//if someone in my list has fewer opponents than who I am targeting right now
					setMyTarget(agroTarget);
				}
				if(newTargetLists.attackOpponentList.Count<targetLists.attackOpponentList.Count){
					//if someone in my list has fewer opponents than who I am targeting right now
					setMyTarget(newTarget);
				}
			}	
		}
		}
		SendMessage("SetTarget", target);
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
	if(targetLists.argoTargetingList.Count>0){
		SendMessage("SetTarget", targetLists.argoTargetingList[0]);
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