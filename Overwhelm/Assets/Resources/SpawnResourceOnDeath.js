public var res:GameObject;
public var count:int;

function Start(){
	
}
function Update(){
	
}
function OnKilled () {
	if (count<=0) count=1;

	for (var i = 0; i<count; i++){
		Instantiate(res, transform.position, transform.rotation);
	}
}