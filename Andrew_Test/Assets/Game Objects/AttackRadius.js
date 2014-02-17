#pragma strict

private var targetComp:Target;
function Start () {
	targetComp=gameObject.GetComponent("Target");
}
function Target(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AttackTarget",target, SendMessageOptions.DontRequireReceiver);
}
function ReTarget(newTarget:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AttackReTarget",newTarget, SendMessageOptions.DontRequireReceiver);
}
function OnTargetDestroyed(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AttackTargetDestroyed",target, SendMessageOptions.DontRequireReceiver);
}
function RemoveTarget(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AttackRemoveTarget",target, SendMessageOptions.DontRequireReceiver);
}
function AddOpponent(target:GameObject){
	targetComp.gameObjectBehaviour.gameObject.SendMessage("AddAttackOpponent",target, SendMessageOptions.DontRequireReceiver);
}

//message

function AttackTarget(newTarget:GameObject){
}
function AttackReTarget(newTarget:GameObject){
}
function AttackTargetDestroyed(newTarget:GameObject){
}
function AttackRemoveTarget(newTarget:GameObject){
}
function AddAttackOpponent(newTarget:GameObject){
}