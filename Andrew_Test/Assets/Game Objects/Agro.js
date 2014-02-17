#pragma strict

#pragma strict
private var targetComp:Target;
function Start () {
	targetComp=gameObject.GetComponent("Target");
}
function Target(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AgroTarget",target , SendMessageOptions.DontRequireReceiver);
}
function ReTarget(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AgroReTarget", target, SendMessageOptions.DontRequireReceiver);
}
function OnTargetDestroyed(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AgroTargetDestroyed", target, SendMessageOptions.DontRequireReceiver);
}
function RemoveTarget(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AgroRemoveTarget", target, SendMessageOptions.DontRequireReceiver);
}
function AddOpponent(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AddAgroOpponent",target, SendMessageOptions.DontRequireReceiver);
}

//messages 

function AgroTarget(target:GameObject){
}
function AgroReTarget(target:GameObject){
}
function AgroTargetDestroyed(target:GameObject){
}
function AgroRemoveTarget(target:GameObject){
}
function AddAgroOpponent(target:GameObject){
}