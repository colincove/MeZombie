#pragma strict

var returnResources:int[];
private var oneTime:boolean=false;
function Start () {

}

function Update () {

	//middle click
	if(Input.GetMouseButtonDown(2) && !oneTime){
		var myCollider:BoxCollider2D = GetComponent(BoxCollider2D);
		var myCenter = myCollider.center + transform.parent.gameObject.transform.position;
		var myLeft = myCenter.x-myCollider.size.x/2;
		var myRight = myCenter.x+myCollider.size.x/2;
		var myTop = myCenter.y+myCollider.size.y/2;
		var myBottom = myCenter.y-myCollider.size.y/2;
		var mouseCenter = new Vector2(Camera.main.ScreenToWorldPoint(Input.mousePosition).x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y);

		if (myLeft< mouseCenter.x &&  mouseCenter.x < myRight && myBottom< mouseCenter.y &&  mouseCenter.y <myTop){

			transform.parent.gameObject.GetComponent(HealthComponent).MaxDamage();
			
			if (returnResources.length>0)
				ResourceMaster.AddResource(0, returnResources[0]);
			if (returnResources.length>1)
				ResourceMaster.AddResource(1, returnResources[1]);
			if (returnResources.length>2)
				ResourceMaster.AddResource(2, returnResources[2]);
			if (returnResources.length>3)
				ResourceMaster.AddResource(3, returnResources[3]);
				
			oneTime=true;
		}
		
		
	}
			
}
