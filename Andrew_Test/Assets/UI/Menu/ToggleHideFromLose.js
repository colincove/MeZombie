#pragma strict

function Start () {

}

function Update () {

    	renderer.enabled = GameMaster.isLose;
   		collider2D.enabled = GameMaster.isLose;
    
}