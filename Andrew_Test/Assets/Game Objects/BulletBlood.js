#pragma strict
public var bloodSplatter:GameObject;
function Start () {

}

function Update () {

}
function Attack(target:GameObject){	
if(target!=null){
	var randomAllow = Random.Range(0, 100);
		if (randomAllow<30){ //30% chance blood will splatter
			var randomX = Random.Range(-0.2, 0.2);
			var randomY = Random.Range(-0.3, 0);
			
			Instantiate(bloodSplatter, new Vector3(target.transform.position.x+randomX,target.transform.position.y+target.GetComponent(ZombieBehaviour).size/2+randomY,target.transform.position.z), Quaternion.identity );
		}
}
	
}