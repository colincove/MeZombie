#pragma strict

var go:GameObject;
function Start () {
	renderer.enabled=false;
}

function Update () {
	renderer.enabled = go.GetComponent(HealthComponent).hp<=0;
}
