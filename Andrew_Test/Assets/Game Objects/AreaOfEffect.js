#pragma strict


public var damage:int;
public var radius:float;
private var hasExploded:boolean;

function Start () {

}

function Update () {
 
}

function Attack(target:GameObject){

	if (!hasExploded){
		AreaOfEffect();
		hasExploded=true;
	}
	
	
}
function OnKilled(){
	if (!hasExploded){
		AreaOfEffect();
		hasExploded=true;
	}
	
}


function AreaOfEffect(){
    var hitEnemies : Collider2D[] = Physics2D.OverlapCircleAll(transform.position, radius);
    yield WaitForSeconds(.1);//need this for some reason.
    for(var x=0; x < hitEnemies.Length; x++){
    	if ( hitEnemies[x].gameObject.tag=="Hooman" ||  hitEnemies[x].gameObject.tag=="Barricade" ||  hitEnemies[x].gameObject.tag=="Zombie"){
      		
      		if (GetComponent(GameObjectBehaviour).lane == hitEnemies[x].gameObject.GetComponent(GameObjectBehaviour).lane)
      			hitEnemies[x].gameObject.SendMessage("DoDamage", damage, SendMessageOptions.DontRequireReceiver);
      }
    }
}