#pragma strict
//Teams: Zombies=0, Humans=1;
public var team:int=0;
public var targeting:GameObject;
public var targeting_list: List.<GameObject> = new List.<GameObject>();
function Start () {

}

function Update () {
	
}
//messgae
function OnTargetDestroyed(target:GameObject){
	if(target==targeting){
		SendMessage("RemoveTarget", target);
	}
}
//messgae
function RemoveTarget(target:GameObject){
	targeting_list.Remove(target);
	if(target==targeting){
		targeting=null;
		if(targeting_list.Count>0){
			SendMessage("ReTarget", target);
		}
	}
}
//messgae
function ReTarget(newTarget:GameObject){
	SendMessage("Target", newTarget);
}
//message
function Target(target:GameObject){
	targeting=target;
}