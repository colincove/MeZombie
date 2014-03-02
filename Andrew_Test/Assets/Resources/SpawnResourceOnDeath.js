public var res:GameObject;
function Start(){
	
}
function Update(){
	
}
function OnKilled () {
	var resClone = Instantiate(res, transform.position, transform.rotation);
}