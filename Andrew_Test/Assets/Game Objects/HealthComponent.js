#pragma strict
public var hp_total:int=100;
public var hp:int=0;
public var destroyed:int=0;//0 for false 1 for true

public var healthBar:GameObject;
private var healthBar_total:float;
function Start () {
	hp=hp_total;
	
	if (healthBar!=null){
	healthBar_total = healthBar.transform.localScale.x;
	}
}

function Update () {
	if (healthBar!=null) {
		healthBar.transform.localScale.x = (hp*1.0)/(hp_total*1.0)*healthBar_total;
		}
}
function DoDamage(damage:int){
	hp-=damage;
	if(hp<=0 && destroyed==0){
		//flag for object death so that this method does not get called more than once
		destroyed=1;
		SendMessage("OnDestroyed", gameObject, SendMessageOptions.DontRequireReceiver);
		SendMessage("OnDestroyedComplete", gameObject, SendMessageOptions.DontRequireReceiver);
	}
}