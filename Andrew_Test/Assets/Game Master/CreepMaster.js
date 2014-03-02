#pragma strict
private var creeps : Creep[];
function Start () {
	creeps = FindObjectsOfType(Creep) as Creep[];
}
function AddCreepObj(creepObj:GameObject){
	var gameBehaviour:GameObjectBehaviour = creepObj.GetComponent("GameObjectBehaviour");
	if(gameBehaviour!=null){
		for (var creep : Creep in creeps) {
			if(creep.lane==gameBehaviour.lane){
				creep.AddCreepObj(creepObj);
			}
		}
	}
}
function RemoveCreepObj(creepObj:GameObject){
	var gameBehaviour:GameObjectBehaviour = creepObj.GetComponent("GameObjectBehaviour");
	if(gameBehaviour!=null){
		for (var creep : Creep in creeps) {
			if(creep.lane==gameBehaviour.lane){
				creep.RemoveCreepObj(creepObj);
			}
		}
	}
}