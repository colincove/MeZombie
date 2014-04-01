#pragma strict

var spriteImageDown : Sprite;
var spriteImageUp : Sprite;



function Start () {

}

function Update () {

	
}

function	OnMouseDown () {
	GetComponent(SpriteRenderer).sprite = spriteImageDown;
}

function	OnMouseUp () {
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
	
	if (this.name=="btn_returnToGame"){
		TogglePause.setPause(false);
	}
	if (this.name=="btn_exitToWindow"){
		Application.Quit();
	}
	
	if (this.name=="btn_exitToMenu"){
		TogglePause.setPause(false);
		Application.LoadLevel("World Map");
	}
	
	if (this.name=="btn_replay"){
		TogglePause.setPause(false);
		GameMaster.initialLevelConditions();
		Application.LoadLevel(Application.loadedLevel);
	}
		
}

