#pragma strict
public var changeTargetTime:int = 1000;
public var damp:float = 5.0;
public var landmarkList:List.<GameObject> = new List.<GameObject>();
private var currentLandmark:GameObject;
private var lastChange:int=0;
private var landmarkIndex:int=0;
private var isActive:boolean=false;
private var vx:float;
private var vy:float;
function Start () {
	if(landmarkList.Count>0){
		StartMotion();
		
	}
}

function Update () {
	if(isActive){
		//Do Movement
		vx = (currentLandmark.transform.position.x-transform.position.x)/damp;
		vy = (currentLandmark.transform.position.y-transform.position.y)/damp;
		
		transform.Translate(Vector3(vx,vy,0));
		
		
		//Check status of landmarks
		var time:int = Time.time*1000;
		var diff:int=time-lastChange;
		if(diff>changeTargetTime)
		{
			if(landmarkIndex+1<landmarkList.Count){
				lastChange=Time.time*1000;
				currentLandmark=landmarkList[++landmarkIndex];
			}else{
				StopMotion();
			}
		}
	}
}
function StartMotion(){
	SendMessage("DisableCamera");
	currentLandmark=landmarkList[0];
	isActive=true;
	landmarkIndex=0;
	lastChange=Time.time*1000;
	transform.position.x=currentLandmark.transform.position.x;
	transform.position.y=currentLandmark.transform.position.y;
}
function StopMotion(){
	SendMessage("EnableCamera");
	isActive=false;
	currentLandmark=null;
	landmarkIndex=0;
	lastChange=Time.time*1000;
}