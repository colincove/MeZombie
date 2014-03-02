#pragma strict
//The most basic componenet every diegetic game object should have

//Teams: Zombies=0, Humans=1;
public var team:int=0;
public var lane:int=0;

public var yOffset:float;
public var height:float;
public var targets : Component[];
function Start () {

	targets = GetComponentsInChildren (Target);
	for (var target : Target in targets) {
		target.lane=lane;
		target.team=team;
		target.gameObjectBehaviour=this;
	}
}

function Update () {
	transform.localPosition.z  = transform.localPosition.y+5+yOffset;
}

function DestroyMe(){
	Destroy(gameObject);
}

