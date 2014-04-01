#pragma strict

function Start () {

}

private var i:float = 1;
private var j:int = 30;
function Update () {
j--;
	if (j<0){
		GetComponent(TextMesh).color.a = i;
		i-=0.03;
		
	}
	if (i<0) Destroy(gameObject);
}