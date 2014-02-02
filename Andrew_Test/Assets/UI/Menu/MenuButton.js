#pragma strict

var spriteImageDown : Sprite;
var spriteImageUp : Sprite;



function Start () {

}

function Update () {
	/*if(Input.GetMouseButtonDown(0))
		Debug.Log("Pressed left click.");
	if(Input.GetMouseButtonDown(1))
		Debug.Log("Pressed right click.");
	if(Input.GetMouseButtonDown(2))
		Debug.Log("Pressed middle click.");*/
		

	
}

function	OnMouseDown () {
	Debug.Log(this.name + ": mouse down");
	GetComponent(SpriteRenderer).sprite = spriteImageDown;
}

function	OnMouseUp () {
	Debug.Log(this.name + ": mouse up");
	GetComponent(SpriteRenderer).sprite = spriteImageUp;
	renderer.enabled = true;
	if (this.name=="btn_play")
		Application.LoadLevel("Game");
	if (this.name=="btn_options"){
		MenuBehaviour.menu_1.SetActive(false);
		MenuBehaviour.menu_2.SetActive(true);

	}
	if (this.name=="btn_back1"){
	
		MenuBehaviour.menu_1.SetActive(true);
		MenuBehaviour.menu_2.SetActive(false);

	}
		
}

