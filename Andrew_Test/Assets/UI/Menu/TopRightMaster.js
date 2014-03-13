#pragma strict

var  uiCamera:Camera;

function Start () {

}

function Update () {

	//stick to right of camera
	var camPosition = new Vector2(uiCamera.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x,0f);
	transform.position.x = camPosition.x;
	
}