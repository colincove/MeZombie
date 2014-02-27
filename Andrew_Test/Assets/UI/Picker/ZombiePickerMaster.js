#pragma strict

var zombies_arr:GameObject[];
static var zombieIndex:int=-1;

var  uiCamera:Camera;


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

function setAllDefault(){
	for (zombie in zombies_arr){
		zombie.GetComponent(ZombiePicker).setDefault();
	}
}