#pragma strict
public var argoTargetingList: List.<GameObject> = new List.<GameObject>();//I agro'ing
public var agroOpponentList: List.<GameObject> = new List.<GameObject>();//I am being agro'd by

public var attackTargetingList: List.<GameObject> = new List.<GameObject>();//I am attacking
public var attackOpponentList: List.<GameObject> = new List.<GameObject>();//I am being attacked by

function AgroTarget(targetComp:GameObject){
	argoTargetingList.Add(targetComp);
	targetComp.SendMessage("AddAgroOpponent",gameObject );
}
function RemoveAgroTarget(targetComp:GameObject){
	argoTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAgroOpponent",gameObject );
}


function AttackTarget(targetComp:GameObject){
	attackTargetingList.Add(targetComp);
	targetComp.SendMessage("AddAttackOpponent",gameObject );
}
function RemoveAttackTarget(targetComp:GameObject){
	attackTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAttackOpponent",gameObject );
}
function OnDestroyed(attacker:GameObject){
	for (var opponent : GameObject in agroOpponentList) {
		opponent.SendMessage("OnTargetDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
	}
	for (var opponent : GameObject in attackOpponentList) {
		opponent.SendMessage("OnTargetDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
	}
}
function OnTargetDestroyed(gameObject:GameObject){
	SendMessage("RemoveAgroOpponent", gameObject, SendMessageOptions.DontRequireReceiver);
	SendMessage("RemoveAttackOpponent", gameObject, SendMessageOptions.DontRequireReceiver);
	SendMessage("RemoveAttackTarget", gameObject, SendMessageOptions.DontRequireReceiver);
	SendMessage("RemoveAgroTarget", gameObject, SendMessageOptions.DontRequireReceiver);
}
function AddAgroOpponent(opponent:GameObject){
	agroOpponentList.Add(opponent);
}
function RemoveAgroOpponent(opponent:GameObject){
	agroOpponentList.Remove(opponent);
}
function AddAttackOpponent(opponent:GameObject){
	attackOpponentList.Add(opponent);
}
function RemoveAttackOpponent(opponent:GameObject){
	attackOpponentList.Remove(opponent);
}