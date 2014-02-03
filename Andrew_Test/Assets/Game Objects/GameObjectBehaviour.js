#pragma strict

public var lane:int;
function Start () {

}

function Update () {
	transform.localPosition.z  = transform.localPosition.y+5;
}