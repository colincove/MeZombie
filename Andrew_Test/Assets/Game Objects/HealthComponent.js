#pragma strict
public var hp_total:int=100;
public var hp:int=0;
public var destroyed:int=0;//0 for false 1 for true
function Start () {
	hp=hp_total;
}

function Update () {
	
}
function DoDamage(damage:int){
	hp-=damage;
	if(hp<=0 && destroyed==0){
		//flag for object death so that this method does not get called more than once
		destroyed=1;
		SendMessage("OnDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
	}
}