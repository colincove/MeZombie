#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = GameMaster.isLose;
    	if (collider2D!=null)
   		collider2D.enabled = GameMaster.isLose;
    
}