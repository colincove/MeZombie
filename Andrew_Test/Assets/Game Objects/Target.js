#pragma strict
//Teams: Zombies=0, Humans=1;
public var lane:int=0;
public var team:int=0;
public var newestTarget:GameObject;
public var targeting:GameObject;
public var gameObjectBehaviour:GameObjectBehaviour;
public var targeting_list: List.<GameObject> = new List.<GameObject>();//I agro'ing
function Start () {
}

function Update () {
	
}
//messgae
function OnTargetDestroyed(target:GameObject){
	if(target!=gameObject){
		if(target==targeting){
			SendMessage("RemoveTarget", target, SendMessageOptions.DontRequireReceiver);
		}
	}
}
//messgae
function RemoveTarget(targetComp:GameObject){
	targeting_list.Remove(targetComp);
	SendMessage("RemoveOpponent", gameObject, SendMessageOptions.DontRequireReceiver);
	if(targetComp==targeting){
		targeting=null;
		if(targeting_list.Count>0){
			SendMessage("ReTarget", targetComp, SendMessageOptions.DontRequireReceiver);
		}
	}
}
//messgae
function ReTarget(newTarget:GameObject){
	newestTarget=newTarget;
	SendMessage("Target", newTarget, SendMessageOptions.DontRequireReceiver);
}
//message
function Target(target:GameObject){
	newestTarget=target;
	targeting=target;
	targeting_list.Add(target);
	SendMessage("AddOpponent", gameObject, SendMessageOptions.DontRequireReceiver);
}
function TriggerTarget(target:GameObject){
	var index:int=targeting_list.IndexOf(target);
	if(index==-1){
	SendMessage("Target", target, SendMessageOptions.DontRequireReceiver);
	}
	
}