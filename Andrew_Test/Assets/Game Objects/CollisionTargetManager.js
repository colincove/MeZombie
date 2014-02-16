#pragma strict
private var targetComp:Target;
private var gameObjectBehaviour:GameObjectBehaviour;
function Start () {
	gameObjectBehaviour  = gameObject.GetComponent("GameObjectBehaviour");
	targetComp=gameObject.GetComponent("Target");
}

function Update () {

}
function OnTriggerEnter2D (collInfo : Collider2D) {
	var otherTarget:Target = collInfo.gameObject.GetComponent("Target");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team && otherTarget.gameObjectBehaviour.lane==gameObjectBehaviour.lane){
			var index:int=targetComp.targeting_list.IndexOf(collInfo.gameObject);
			if(targetComp.targeting_list.IndexOf(collInfo.gameObject)==-1){
				SendMessage("Target", collInfo.gameObject);
			}
		}	
	}
}

function OnTriggerExit2D (collInfo : Collider2D) {
	var otherTarget:Target = collInfo.gameObject.GetComponent("Target");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team){
			SendMessage("RemoveTarget", collInfo.gameObject);
		}	
	}
}