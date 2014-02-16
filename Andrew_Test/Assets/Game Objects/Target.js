#pragma strict
//Teams: Zombies=0, Humans=1;
public var lane:int=0;
public var team:int=0;
public var targeting:GameObject;
public var gameObjectBehaviour:GameObjectBehaviour;
public var targeting_list: List.<GameObject> = new List.<GameObject>();//I am targeting
public var opponent_list: List.<GameObject> = new List.<GameObject>();//I am being targeted by
function Start () {
	gameObjectBehaviour  = gameObject.GetComponent("GameObjectBehaviour");
}

function Update () {
	
}
//messgae
function OnTargetDestroyed(target:GameObject){
	if(target!=gameObject){
		if(target==targeting){
			SendMessage("RemoveTarget", target);
		}
	}
}
//messgae
function RemoveTarget(targetComp:GameObject){
	targeting_list.Remove(targetComp);
	targetComp.SendMessage("RemoveOpponent", gameObject);
	if(targetComp==targeting){
		targeting=null;
		if(targeting_list.Count>0){
			SendMessage("ReTarget", targetComp);
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
	targeting_list.Add(target);
	target.SendMessage("AddOpponent", gameObject);
}
function OnDestroy(){
	for (var opponent : GameObject in opponent_list) {
		opponent.SendMessage("OnTargetDestroyed", gameObject);
	}
}
function AddOpponent(opponent:GameObject){
	opponent_list.Add(opponent);
}
function RemoveOpponent(opponent:GameObject){
	opponent_list.Remove(opponent);
}