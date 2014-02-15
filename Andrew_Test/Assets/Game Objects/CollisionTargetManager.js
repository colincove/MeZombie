#pragma strict
private var targetComp:Target;
function Start () {
	targetComp=gameObject.GetComponent("Target");
}

function Update () {

}
function OnCollisionEnter2D (collInfo : Collision2D) {
	var otherTarget:Target = collInfo.gameObject.GetComponent("Target");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team){
			SendMessage("Target", collInfo.gameObject);
		}	
	}
}

function OnCollisionExit2D (collInfo : Collision2D) {
	var otherTarget:Target = collInfo.gameObject.GetComponent("Target");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team){
			SendMessage("RemoveTarget", collInfo.gameObject);
		}	
	}
}