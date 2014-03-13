#pragma strict

static var isPause:boolean;

function Start () {

}

function Update () {

}

function OnMouseDown(){
	isPause=!isPause;
	if (isPause){
		Time.timeScale = 0.0;
		GameObject.Find("Main Camera").GetComponent(cameraMovement).DisableCamera();
	}
	else 	{
		Time.timeScale = 1;
		GameObject.Find("Main Camera").GetComponent(cameraMovement).EnableCamera();
		
	}
	
}