#pragma strict

static var zombieIndex:int=-1;
static var mouse_x:float=0;
static var mouse_y:float=0;
var  uiCamera:Camera;

var zombie_arr: GameObject[];


function Start () {
	//zombies_arr[0].GetComponent(ZombiePicker).setPicked();
}

function Update () {
	//transform.position.x = Camera.main.transform.position.x-Camera.main.camera.orthographicSize*2+6;
	//transform.position.z = -.5;
	var f = new Vector2(uiCamera.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x,0f);
	transform.position.x = f.x;
	//transform.position.z=1.64;
}

