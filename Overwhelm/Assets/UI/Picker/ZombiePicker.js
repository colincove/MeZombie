﻿#pragma strict


var zombieIndex:int;
static var can_spawn:boolean =false;
var zombieDrag : GameObject;
private var zombieDrag_destroyable : GameObject;
public var cannot_spawn_graphic:GameObject;
private var cannot_spawn_clone:GameObject;

public var activeAvatar:Sprite;
public var disableAvatar:Sprite;

function Start () {
	
	cannot_spawn_clone=Instantiate(cannot_spawn_graphic, new Vector3(0,0,0), Quaternion.identity );
	cannot_spawn_clone.transform.position.x=10000;
}

function Update () {
	if (ResourceMaster.hooman>=ResourceMaster.zombieCost_arr[zombieIndex,0]
			&& ResourceMaster.metal>=ResourceMaster.zombieCost_arr[zombieIndex,1]
			&& ResourceMaster.gasoline>=ResourceMaster.zombieCost_arr[zombieIndex,2]
			&& ResourceMaster.rock>=ResourceMaster.zombieCost_arr[zombieIndex,3]
			){
		GetComponent(SpriteRenderer).sprite = activeAvatar;
		collider2D.enabled=true;
	} else {
	
		GetComponent(SpriteRenderer).sprite = disableAvatar;
		collider2D.enabled=false;
	}
	
	//can_spawn=false;
}

function	OnMouseDown () {
	//setPicked();
	var x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	var y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	zombieDrag_destroyable= Instantiate(zombieDrag, new Vector3(x,y,0), Quaternion.identity );
	zombieDrag_destroyable.name="ZombieRespawn";
	zombieDrag_destroyable.transform.position.x=0;
	
	//turn off health bar and attack radius
	var allChildren = zombieDrag_destroyable.gameObject.GetComponentsInChildren(Transform);
    for (var child : Transform in allChildren) 
    {
    	if (child.name=="Health Bar")
    		child.renderer.enabled=false;
    	if (child.name=="AttackRadius")
    		child.collider2D.enabled=false;

    }
    
    if (zombieDrag_destroyable.collider2D!=null)
    	zombieDrag_destroyable.collider2D.isTrigger=true;
    
    //prevent rocket zombie from setting off
    var rocketComponent = zombieDrag_destroyable.GetComponent(KamikazeUponSpawn);
    if (rocketComponent!=null)
    		rocketComponent.allowAttack=false;

   //prevent scout zombie from jumping   
    yield WaitForSeconds(0.02);
    var jumpComponent = zombieDrag_destroyable.GetComponent(JumpOver);
    if (jumpComponent!=null)
    		jumpComponent.allowJump=false;


}


function OnMouseDrag () {
	if(!can_spawn){
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
	ZombiePickerMaster.mouse_x=zombieDrag_destroyable.transform.position.x;
	ZombiePickerMaster.mouse_y=zombieDrag_destroyable.transform.position.y;
	Debug.Log("PICK X: "+ZombiePickerMaster.mouse_x+" Y: "+ZombiePickerMaster.mouse_y+" ::"+zombieIndex);
	ZombiePickerMaster.zombieIndex=zombieIndex;
	yield WaitForSeconds(0.02);
	if (zombieDrag_destroyable!=null){
		Destroy(zombieDrag_destroyable);
		ZombiePickerMaster.zombieIndex=-1;
	}
		
}
	
function setPicked(){
//	GameObject.Find("ZombiePicker").GetComponent(ZombiePickerMaster).setAllDefault();
//	GetComponent(SpriteRenderer).sprite = zombiePicked;
	
}
	
function setDefault(){
	//GetComponent(SpriteRenderer).sprite = zombieDefault;	
}