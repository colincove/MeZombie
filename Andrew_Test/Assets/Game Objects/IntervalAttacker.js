#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int=500;//in milliseconds
private var targetComp:Target;
function Start () {
	lastAttackTime=Time.time*1000;
	targetComp=gameObject.GetComponent("Target");
}

function Update () {
	if(targetComp!=null){
		if(targetComp.targeting!=null){
			if(Time.time*1000-lastAttackTime>attackSpeed)
			{
				SendMessage("Attack");
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