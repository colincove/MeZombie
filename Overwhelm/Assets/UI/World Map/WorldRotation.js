#pragma strict

static var angle = 0;
static var level = 1;
static var angleAtomic = 30;
static var dir = 1; //-1 for cw, 1 for ccw
function Start () {
	transform.eulerAngles.z = getAngleDest();
}

function Update () {
	//cant go below min level
	if (level<1){
		level=1;
	}
	//cant go beyond max level
	if (level > 360/angleAtomic){
		level = 360/angleAtomic;
	}
	
	if ((angle<getAngleDest() && dir==1) || (angle>getAngleDest() && dir==-1)){
	
		transform.Rotate(0, 0, Time.deltaTime*80*dir);
		Level_arrow.allowClick=false;
	} else {
		transform.eulerAngles.z = getAngleDest();
		Level_arrow.allowClick=true;
	}
	angle=transform.eulerAngles.z;
	
}

private function getAngleDest(){
	return (level-1)*angleAtomic;
}
