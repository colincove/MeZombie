#pragma strict
public var lane=0;
public var creepPart:GameObject;
public var offset:int=5;
private var creepParts:List.<GameObject> = new List.<GameObject>();
private var creepObjs:List.<GameObject> = new List.<GameObject>();
private var lastCreepPart:GameObject;
private var growDelay:int=0;
function Start () {
	lastCreepPart=gameObject;//this is the beginning of the creep;
}

function Update () {
	for(var creepObj:GameObject in creepObjs){
		if(creepObj.transform.position.x > lastCreepPart.transform.position.x+offset){
			Extend();
		}
	}
}
function Extend()
{
	lastCreepPart=Instantiate(creepPart, new Vector3(lastCreepPart.transform.position.x+1,lastCreepPart.transform.position.y,lastCreepPart.transform.position.z+0.0001), Quaternion.identity );
}
function AddCreepObj(creepObj:GameObject){
	creepObjs.Add(creepObj);
}
function RemoveCreepObj(creepObj:GameObject){
	creepObjs.Remove(creepObj);
}