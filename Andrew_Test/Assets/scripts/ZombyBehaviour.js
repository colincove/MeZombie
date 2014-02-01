#pragma strict


var anim:Animator;
private var onLane:int;
private var newLane:int;
private var changingLane:int;
function Start () {

}

function Update () {
	anim.SetFloat ("Speed", Mathf.Abs (rigidbody2D.velocity.x));
	
	if (changingLane!=0){
		var mapY = GameMaster.mapY;
		var newY = newLane*mapY/(GameMaster.numLanes+1)-mapY/2;
		
		if ((changingLane> 0 && transform.position.y>newY) || (changingLane< 0 && transform.position.y<newY)){
			transform.position.y=newY;
			
			rigidbody2D.velocity.y=0;
			rigidbody2D.velocity.x=1.6;
			changingLane=0;
			
		}	
	}
}

function  setLane(lane:int){
	onLane = lane;
}

function  getLane():int{
	return onLane;
}

function changeLane(){

	
	var cl = Random.Range(0,2);	 //+1 means go up, -1 means go down
	if (cl==0) cl=-1;
	
	onLane+=cl;
	
	//prevent going past the map vertically
	if (onLane==0) {
		onLane+=2;
		cl=1;
	}
	else if (onLane>GameMaster.numLanes){
		onLane-=2;
		cl=-1;
	}
	
	newLane = onLane;
	
	rigidbody2D.velocity.y=1*cl;
	rigidbody2D.velocity.x=0.5*-cl;
	
	changingLane = cl;
}