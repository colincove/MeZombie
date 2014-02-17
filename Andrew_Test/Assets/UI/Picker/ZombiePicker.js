#pragma strict

function Start () {

}
var zombieDefault : Sprite;
var zombiePicked : Sprite;

var zombieIndex:int;


function Update () {

}

function	OnMouseDown () {
	setPicked();


}


//function	OnMouseUp () {
//	Debug.Log(this.name + ": mouse up");
//	GetComponent(SpriteRenderer).sprite = zombieDefault;
	//renderer.enabled = true;

//}
	
function setPicked(){
	GameObject.Find("ZombiePicker").GetComponent(ZombiePickerMaster).setAllDefault();
	GetComponent(SpriteRenderer).sprite = zombiePicked;
	ZombiePickerMaster.zombieIndex=zombieIndex;
}
	
function setDefault(){
	GetComponent(SpriteRenderer).sprite = zombieDefault;	
}