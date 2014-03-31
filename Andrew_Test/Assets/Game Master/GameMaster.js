﻿#pragma strict

static var isWin:boolean = false;
static var winCount:int=0;
var totalWinningLandmarks:int;

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
		isWin=true;
		TogglePause.setWin();
	}
	
	if (GameObject.FindGameObjectsWithTag("Zombie").length==0 &&
		GameObject.FindGameObjectsWithTag("Resource").length==0 &&
		ResourceMaster.hooman ==0 &&
		  !isLose){
		  TogglePause.setLose();
		isLose=true;
	}
		
}

static function initialLevelConditions(){
	isWin=false;
	winCount=0;
	isLose=false;
	ResourceMaster.hooman=10; //temporary
}


