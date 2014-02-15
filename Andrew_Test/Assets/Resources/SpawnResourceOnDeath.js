public var res:GameObject;
function Start(){
	
}
function Update(){
	
}
function OnDestroyed () {
	var resClone = Instantiate(res, transform.position, transform.rotation);
}