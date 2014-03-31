#pragma strict

static var isPause:boolean;

function Start () {

}

function Update () {

}

function OnMouseDown(){
	isPause=!isPause;
	
	setPause(isPause);
	
}

static function setPause(p:boolean){
	isPause=p;
	if (isPause){
		Time.timeScale = 0.0;
		GameObject.Find("Main Camera").GetComponent(cameraMovement).DisableCamera();
	}
	else 	{
		Time.timeScale = 1;
		GameObject.Find("Main Camera").GetComponent(cameraMovement).EnableCamera();
		
	}
}

static function setWin(){
		Time.timeScale = 0.0;
		GameObject.Find("Main Camera").GetComponent(cameraMovement).DisableCamera();
}

static function setLose(){
		setWin();
}