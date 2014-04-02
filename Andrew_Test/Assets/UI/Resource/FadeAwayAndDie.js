#pragma strict

var time:int;
function Start () {
	time = Time.time*1000;
}

private var i:float = 1;
function Update () {
		
			var diff:int=Time.time*1000-time;
	
	if (diff>100){
		GetComponent(TextMesh).color.a = i;
		i-=0.03;
		
	}
	if (i<0) Destroy(gameObject);
}