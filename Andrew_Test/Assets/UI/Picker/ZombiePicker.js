#pragma strict


var zombieDefault : Sprite;
var zombiePicked : Sprite;

var zombieIndex:int;
static var can_spawn:boolean =false;
var zombieDrag : GameObject;
private var zombieDrag_destroyable : GameObject;
public var cannot_spawn_graphic:GameObject;
private var cannot_spawn_clone:GameObject;

function Start () {
	
	cannot_spawn_clone=Instantiate(cannot_spawn_graphic, new Vector3(0,0,0), Quaternion.identity );
	cannot_spawn_clone.transform.position.x=10000;
}

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
	if(can_spawn==false){
		cannot_spawn_clone.transform.position.x=Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
		cannot_spawn_clone.transform.position.y=Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
		cannot_spawn_clone.transform.position.z=zombieDrag_destroyable.transform.position.z-1;
	}else{
		cannot_spawn_clone.transform.position.x=10000;
	}
	ZombiePickerMaster.mouse_x=Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	ZombiePickerMaster.mouse_y=Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	zombieDrag_destroyable.transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	zombieDrag_destroyable.transform.position.y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
}

function OnMouseUp () {
	cannot_spawn_clone.transform.position.x=10000;
	ZombiePickerMaster.mouse_x=Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	ZombiePickerMaster.mouse_y=Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
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