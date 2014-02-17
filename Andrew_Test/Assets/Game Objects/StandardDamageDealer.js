#pragma strict
private var target:GameObject;
public var damage:int=20;
function Start () {
}

function Update () {
	if(target!=null){
	}
}
function Attack(target:GameObject){
	if(target!=null){
		target.SendMessage("DoDamage", damage, SendMessageOptions.DontRequireReceiver);
	}
}
function DoDamage(){
}
