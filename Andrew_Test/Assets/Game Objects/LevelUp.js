#pragma strict

var healthUpgrade:boolean;
var speedUpgrade:boolean;
var attackPowerUpgrade:boolean;
var attackRateUpgrade:boolean;

static var maxLevel = 2;
private var level:int = 0;

function Start () {

}

function Update () {

	//left click
	if(Input.GetMouseButtonDown(0)){
		
		var myCollider:BoxCollider2D = GetComponent(BoxCollider2D);
		var myCenter = myCollider.center + transform.parent.gameObject.transform.position;
		var myLeft = myCenter.x-myCollider.size.x/2;
		var myRight = myCenter.x+myCollider.size.x/2;
		var myTop = myCenter.y+myCollider.size.y/2;
		var myBottom = myCenter.y-myCollider.size.y/2;
		
		var mouseCenter = new Vector2(Camera.main.ScreenToWorldPoint(Input.mousePosition).x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y);
		if (myLeft< mouseCenter.x &&  mouseCenter.x < myRight && myBottom< mouseCenter.y &&  mouseCenter.y <myTop && level<maxLevel){

			level++;
			if (healthUpgrade){
				var parent = transform.parent.gameObject;
				
				
				if (level==1 && ResourceMaster.metal>=4){
					transform.parent.gameObject.GetComponent(HealthComponent).hp+=200;
					ResourceMaster.AddResource(1, -4);

					parent.transform.localScale+=new Vector3(0.05,0.05,0.05);

				} 
				if (level==2 &&  ResourceMaster.metal>=4){
					
					transform.parent.gameObject.GetComponent(HealthComponent).hp+=200;
					ResourceMaster.AddResource(1, -4);
					
					var limbs = parent.GetComponentInChildren(Transform);

					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb"){
							
							limb.GetComponent(SpriteRenderer).color = new Color(1,0.2,0.2);
						}
					}
				}
				
			}
		}
	}
	
}

function GetLevel(){

	return level;
}