#pragma strict


static var difficulty:float;

static var menu_1 : GameObject;
static var menu_2 : GameObject;
function Start () {
	menu_1 =  GameObject.Find("1_");
	menu_2 =  GameObject.Find("2_");
	
	menu_1.SetActive(true);
	menu_2.SetActive(false);
	
	difficulty=1;
}

function Update () {

}