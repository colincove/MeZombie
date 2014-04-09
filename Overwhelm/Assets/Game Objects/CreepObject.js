#pragma strict

var gm:GameObject;
var cm:CreepMaster;
function Start(){
	gm = GameObject.Find("_gameMaster");
	if(gm!=null){
		cm = gm.GetComponent("CreepMaster");
		if(cm!=null){
			cm.AddCreepObj(gameObject);
		}
	}
}
function OnKilled(){
	if(cm!=null){
		cm.RemoveCreepObj(gameObject);
	}
}
function Update(){

}