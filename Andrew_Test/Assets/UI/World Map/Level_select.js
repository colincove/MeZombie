#pragma strict

function Start () {

}

var levelsSprite_arr:Sprite[];

var levelsUnlocked_arr:boolean[];

var lockedLevel_sprite:Sprite;

function Update () {
	if  (levelsUnlocked_arr[WorldRotation.level-1]){
		
		GetComponent(SpriteRenderer).sprite = levelsSprite_arr[WorldRotation.level-1];
	} else {
		GetComponent(SpriteRenderer).sprite = lockedLevel_sprite;

	}
}

function OnMouseDown(){
	if  (levelsUnlocked_arr[WorldRotation.level-1]){
		if ( WorldRotation.level!=3)
		Application.LoadLevel("Level"+WorldRotation.level);
	}
}