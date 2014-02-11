#pragma strict

public var lane:int;
public var yOffset:float;
function Start () {

}

function Update () {
	transform.localPosition.z  = transform.localPosition.y+5+yOffset;
}

function DestroyMe(){
	Destroy(gameObject);
}