#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = WinCondition.isWin;
   		collider2D.enabled = WinCondition.isWin;
    
}