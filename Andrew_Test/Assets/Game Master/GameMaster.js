#pragma strict

static var isWin:boolean = false;
static var winCount:int=0;
var totalWinningLandmarks:int;

var landmark:GameObject;

static var isLose:boolean = false;

function Start () {

	if (totalWinningLandmarks<=0){
		totalWinningLandmarks=1;
	}
	

}

function Update () {
    if (Input.GetKeyDown(KeyCode.Escape)) {
    
		TogglePause.setPause(true);
		
	}
	if (winCount>= totalWinningLandmarks && !isWin){
		win();
	}
	
	if (GameObject.FindGameObjectsWithTag("Zombie").length==0 &&
		GameObject.FindGameObjectsWithTag("Resource").length==0 &&
		ResourceMaster.hooman ==0 &&
		  !isLose){
		  TogglePause.setLose();
		isLose=true;
	}
		
}

function win(){

	Camera.mainCamera.transform.position = landmark.transform.position;

	yield WaitForSeconds(2);
		isWin=true;
		TogglePause.setWin();
}
static function initialLevelConditions(){
	isWin=false;
	winCount=0;
	isLose=false;
	ResourceMaster.hooman=10; //temporary
}


