#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = TogglePause.isPause;
   		collider2D.enabled = TogglePause.isPause;
    
}