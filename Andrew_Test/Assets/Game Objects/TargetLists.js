#pragma strict
public var argoTargetingList: List.<GameObject> = new List.<GameObject>();//I agro'ing
public var agroOpponentList: List.<GameObject> = new List.<GameObject>();//I am being agro'd by

public var attackTargetingList: List.<GameObject> = new List.<GameObject>();//I am attacking
public var attackOpponentList: List.<GameObject> = new List.<GameObject>();//I am being attacked by

public var destroyedList: List.<GameObject> = new List.<GameObject>();//I am being attacked by

function AgroTarget(targetComp:GameObject){
if(destroyedList.IndexOf(targetComp)==-1){
	argoTargetingList.Add(targetComp);
	}
	targetComp.SendMessage("AddAgroOpponent",gameObject );
}
function AgroRemoveTarget(targetComp:GameObject){
argoTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAgroOpponent",gameObject );
}
function RemoveAgroTarget(targetComp:GameObject){

	argoTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAgroOpponent",gameObject );
	
}
function AttackTarget(targetComp:GameObject){
if(destroyedList.IndexOf(targetComp)==-1){
	attackTargetingList.Add(targetComp);
	targetComp.SendMessage("AddAttackOpponent",gameObject );
	}
}
function AttackRemoveTarget(targetComp:GameObject){
	attackTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAttackOpponent",gameObject );
}
function RemoveAttackTarget(targetComp:GameObject){

	attackTargetingList.Remove(targetComp);
	targetComp.SendMessage("RemoveAttackOpponent",gameObject );
}
function OnKilled(attacker:GameObject){
	Debug.Log("agroOpponentListCOUNT: "+agroOpponentList.Count);
	/*for (var opponent : GameObject in agroOpponentList) {
		Debug.Log("remove01: "+opponent);
		opponent.SendMessage("OnTargetDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
		Debug.Log("remove02: "+opponent);
	}*/
	var opponent:GameObject;
	var i:int;
	for (i=0;i<agroOpponentList.Count;i++) {
		opponent=agroOpponentList[i];
		Debug.Log("agroOpponentList: "+i);
		opponent.SendMessage("OnTargetDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
	}
	Debug.Log("attackOpponentListCOUNT: "+attackOpponentList.Count);
	for (i=0;i<attackOpponentList.Count;i++) {
		opponent=attackOpponentList[i];
		Debug.Log("attackOpponentList: "+i);
		opponent.SendMessage("OnTargetDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
	}
	
	
}
function OnTargetDestroyed(gameObject:GameObject){
destroyedList.Add(gameObject);
	RemoveAgroOpponent(gameObject);
	RemoveAttackOpponent(gameObject);
	argoTargetingList.Remove(gameObject);
	attackTargetingList.Remove(gameObject);
}
function AddAgroOpponent(opponent:GameObject){
	if(destroyedList.IndexOf(opponent)==-1){
	agroOpponentList.Add(opponent);
	}
	
}
function RemoveAgroOpponent(opponent:GameObject){
	agroOpponentList.Remove(opponent);
}
function AddAttackOpponent(opponent:GameObject){
if(destroyedList.IndexOf(opponent)==-1){
	attackOpponentList.Add(opponent);
	}
}
function RemoveAttackOpponent(opponent:GameObject){
	attackOpponentList.Remove(opponent);
}