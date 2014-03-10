#pragma strict
public var hp_total:int;
public var hp:int;
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
	
		var healthbar_scale:float=(hp*1.0)/(hp_total*1.0)*healthBar_total;
		if (healthbar_scale<0) healthbar_scale=0;
		healthBar.transform.localScale.x = healthbar_scale;
		
	}
}
function DoDamage(damage:int){
	hp-=damage;
	if(hp<=0 && destroyed==0){
		//flag for object death so that this method does not get called more than once
		destroyed=1;
		SendMessage("OnKilled", gameObject, SendMessageOptions.DontRequireReceiver);
	}
}

function MaxDamage(){
	DoDamage(9999);
}