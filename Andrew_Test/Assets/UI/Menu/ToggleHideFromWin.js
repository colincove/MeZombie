#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = GameMaster.isWin;
    	if (collider2D!=null)
   		collider2D.enabled = GameMaster.isWin;
    
}