#pragma strict
public var bloodSplatter:GameObject;
public var anim:Animator;
function Start () {

}

function Update () {
		anim.SetBool("isSplatter",false);

}

function Attack(target:GameObject){	
	
	
	if(target!=null){
		//show blood 
		anim.SetBool("isSplatter",true);
		
		var randomX = Random.Range(-0.5, 0.5);
		var randomY = Random.Range(-0.2, 0.2);
		
		var newX = target.transform.position.x+randomX;
		var newY = target.transform.position.y+target.GetComponent(GameObjectBehaviour).height+randomY;
		var newZ = target.transform.position.z-0.01; // small offset so persp looks right
				
		bloodSplatter.transform.position = new Vector3(newX,newY,newZ);
	} 
	
}
