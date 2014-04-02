#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = TogglePause.isPause;
    	if (collider2D!=null)
   		collider2D.enabled = TogglePause.isPause;
    
}