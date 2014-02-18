#pragma strict
private var targetComp:Target;
private var gameObjectBehaviour:GameObjectBehaviour;
public var collisionList: List.<GameObject> = new List.<GameObject>();//I am being agro'd by
function Start () {
	gameObjectBehaviour  = gameObject.GetComponent("GameObjectBehaviour");
	targetComp=gameObject.GetComponent("Target");
}

function Update () {

}
function OnTriggerEnter2D (collInfo : Collider2D) {
	var otherGameObject:GameObjectBehaviour = collInfo.gameObject.GetComponent("GameObjectBehaviour");
	if(otherGameObject!=null && targetComp!=null){
		if(otherGameObject.targets.length>0){
		//if this game object has a target. 
		var index:int=collisionList.IndexOf(collInfo.gameObject);
			if(otherGameObject.team!=targetComp.team && 
			otherGameObject.lane==targetComp.lane &&
			index==-1){		
				SendMessage("TriggerTarget", collInfo.gameObject, SendMessageOptions.DontRequireReceiver);
				collisionList.Add(collInfo.gameObject);
			}
		}
	}
}

function OnTriggerExit2D (collInfo : Collider2D) {
	var otherTarget:GameObjectBehaviour = collInfo.gameObject.GetComponent("GameObjectBehaviour");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team && otherTarget.lane==targetComp.lane){
			SendMessage("RemoveTarget", collInfo.gameObject);
			collisionList.Remove(collInfo.gameObject);
		}	
	}
}