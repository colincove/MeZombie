#pragma strict

function Start () {

}
var zombieDefault : Sprite;
var zombiePicked : Sprite;

var zombieIndex:int;

var zombieDrag : GameObject;
private var zombieDrag_destroyable : GameObject;

function Update () {

}

function	OnMouseDown () {
	//setPicked();
	var x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	var y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	zombieDrag_destroyable= Instantiate(zombieDrag, new Vector3(x,y,0), Quaternion.identity );
	zombieDrag_destroyable.name="ZombieRespawn";
	
}


function OnMouseDrag () {
	
	zombieDrag_destroyable.transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	zombieDrag_destroyable.transform.position.y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
}

function OnMouseUp () {
	ZombiePickerMaster.zombieIndex=zombieIndex;
	yield WaitForSeconds(0.02);
	if (zombieDrag_destroyable!=null){
		Destroy(zombieDrag_destroyable);
		ZombiePickerMaster.zombieIndex=-1;
	}
		
}
	
function setPicked(){
	GameObject.Find("ZombiePicker").GetComponent(ZombiePickerMaster).setAllDefault();
	GetComponent(SpriteRenderer).sprite = zombiePicked;
	
}
	
function setDefault(){
	GetComponent(SpriteRenderer).sprite = zombieDefault;	
}