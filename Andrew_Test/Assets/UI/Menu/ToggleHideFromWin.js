#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = GameMaster.isWin;
   		collider2D.enabled = GameMaster.isWin;
    
}