#pragma strict


static var hooman:int;
static var metal:int;
static var gasoline:int;
static var rock:int;

function Start () {
	
}

function Update () {
	GameObject.Find("resourceStats_hooman").guiText.text=hooman+"";
	GameObject.Find("resourceStats_metal").guiText.text=metal+"";
	GameObject.Find("resourceStats_gasoline").guiText.text=gasoline+"";
	GameObject.Find("resourceStats_rock").guiText.text=rock+"";
}