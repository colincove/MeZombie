#pragma strict

var velX :float;

private var interval_start: float;
private var interval: float= interval_start;

private var isKilled:boolean;

function Start () {
	rigidbody2D.velocity.x = -velX;
	interval_start = Random.Range(0.5, 1.5);
}

function Update () {
	interval -= Time.deltaTime;
	if (interval<=0 && !isKilled){
		interval=interval_start;
		rigidbody2D.velocity.x*=-1;
		transform.localScale.x*=-1;
	}
}

function OnKilled(){
	isKilled=true;
		rigidbody2D.velocity.x=0;
}
