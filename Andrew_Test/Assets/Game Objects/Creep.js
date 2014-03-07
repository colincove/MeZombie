#pragma strict
public var lane=0;
public var creepPart:GameObject;
public var creepCloneParts:List.<GameObject> = new List.<GameObject>();
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
	var creepClone:GameObject;
	var i:int = Mathf.Round(Random.Range(0,creepCloneParts.Count));
	creepClone=creepCloneParts[i];
	lastCreepPart=Instantiate(creepClone, new Vector3(lastCreepPart.transform.position.x+1,lastCreepPart.transform.position.y,lastCreepPart.transform.position.z+0.1), Quaternion.identity );
}
function AddCreepObj(creepObj:GameObject){
	creepObjs.Add(creepObj);
}
function RemoveCreepObj(creepObj:GameObject){
	creepObjs.Remove(creepObj);
}
function CanSpawn(x:int, y:int)
{
	if(x<=lastCreepPart.transform.position.x){
		return true;
	}
	return false;
}