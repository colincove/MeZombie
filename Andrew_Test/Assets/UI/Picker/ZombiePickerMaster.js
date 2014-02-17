#pragma strict

var zombies_arr:GameObject[];
static var zombieIndex:int;

function Start () {
	zombies_arr[0].GetComponent(ZombiePicker).setPicked();
}

function Update () {
	//transform.position.x = Camera.main.transform.position.x-Camera.main.camera.orthographicSize*2+6;
	//transform.position.z = -.5;
}

function setAllDefault(){
	for (zombie in zombies_arr){
		zombie.GetComponent(ZombiePicker).setDefault();
	}
}