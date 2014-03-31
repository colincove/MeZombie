#pragma strict

static var isWin:boolean = false;
static var winCount:int=0;
var totalWinningLandmarks:int;

function Start () {

	if (totalWinningLandmarks<=0){
		totalWinningLandmarks=1;
	}
	

}

function Update () {
	if (Input.GetKey ("escape")) {
		TogglePause.setPause(true);
	}
	if (winCount>= totalWinningLandmarks && !isWin){
		isWin=true;
		TogglePause.setWin();
	}
		
}

static function resetWinCondition(){
	isWin=false;
	winCount=0;
}


