
private var isVisible:boolean;

var inverse:boolean;
function Start(){
	//gm = GameObject.Find("_gameMaster");
	//vm = gm.GetComponent("VisionManager");
	//vm.AddVisionObj(this);
}
function Update(){
	var isVisible_new =  ( isVisible && !inverse ) || ( !isVisible && inverse );  //xor, used to invert expression
	
	if (transform.parent.gameObject.renderer!=null){
		transform.parent.gameObject.renderer.enabled=isVisible_new;
	}else {
		var allChildren = transform.parent.gameObject.GetComponentsInChildren(Transform);
 
 		//Debug.Log(name+"; "+allChildren.Length);
	    for (var child : Transform in allChildren) 
	    {
	    	if (child.renderer!=null)
	    	child.renderer.enabled=isVisible_new;
	    }
	}
		
}

function OnTriggerEnter2D(colInfo: Collider2D) {
if (colInfo.tag=="VisionObject" && 
	colInfo.transform.parent.gameObject.GetComponent(GameObjectBehaviour).lane == transform.parent.gameObject.GetComponent(GameObjectBehaviour).lane)
	isVisible = true;
}