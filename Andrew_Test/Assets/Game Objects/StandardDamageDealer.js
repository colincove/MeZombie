#pragma strict
public var damage:int=20;

function Attack(target:GameObject){
	if(target!=null){
		target.SendMessage("DoDamage", damage, SendMessageOptions.DontRequireReceiver);
	}
}
function DoDamage(){
}
