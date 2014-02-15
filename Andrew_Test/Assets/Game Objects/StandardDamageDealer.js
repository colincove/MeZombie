#pragma strict
private var targeter:Target;
public var damage:int=20;
function Start () {
	targeter=gameObject.GetComponent("Target");
}

function Update () {

}
function Attack(){
	if(targeter!=null){
		if(targeter.targeting!=null){
			targeter.targeting.SendMessage("DoDamage", damage);
		}
	}
}