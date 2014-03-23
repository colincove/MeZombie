#pragma strict


public var damage:int;
public var radius:float;
public var activateOnDeath:boolean;
function Start () {

}

function Update () {
 
}

function Attack(target:GameObject){
	AreaOfEffect();
}

function OnKilled(){
	if (activateOnDeath){
		AreaOfEffect();
	}
}


function AreaOfEffect(){
    var hitEnemies : Collider2D[] = Physics2D.OverlapCircleAll(transform.position, radius);
    yield WaitForSeconds(.1);//need this for some reason.
    for(var x=0; x < hitEnemies.Length; x++){
    	if ( hitEnemies[x]!=null && (hitEnemies[x].gameObject.tag=="Hooman" ||  hitEnemies[x].gameObject.tag=="Barricade" ||  hitEnemies[x].gameObject.tag=="Zombie")
    	&& hitEnemies[x].gameObject!=gameObject){
      		
      		if (GetComponent(GameObjectBehaviour).lane == hitEnemies[x].gameObject.GetComponent(GameObjectBehaviour).lane)
      			hitEnemies[x].gameObject.SendMessage("DoDamage", damage, SendMessageOptions.DontRequireReceiver);
      }
    }
}