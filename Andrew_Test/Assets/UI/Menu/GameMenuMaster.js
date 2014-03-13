#pragma strict

var  uiCamera:Camera;

function Start () {

}

function Update () {

	//stick to center of camera
	var camPosition = new Vector2(uiCamera.ScreenToWorldPoint(new Vector3(Screen.width/2, 0f, 0f)).x,uiCamera.ScreenToWorldPoint(new Vector3(0f, Screen.height/2, 0f)).y);
	transform.position.x = camPosition.x;
	transform.position.y = camPosition.y;
	
}