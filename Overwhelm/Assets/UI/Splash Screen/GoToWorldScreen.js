#pragma strict


var arr:GameObject[];
var background:GameObject;
function Start () {

	
	for (var i = 0; i<arr.length; i++){
		arr[i].GetComponent(SpriteRenderer).color.a=0;
	}
		arr[0].GetComponent(SpriteRenderer).color.a=1;
}

function Update () {

}

function GoToWorldScreen(){
	Application.LoadLevel("World Map");
}

function NextScreen(i:int){
		arr[i-1].GetComponent(SpriteRenderer).color.a=0;
		arr[i].GetComponent(SpriteRenderer).color.a=1;
		
		if (i==1)
		background.GetComponent(SpriteRenderer).color  = new Color(0,0,0);

}