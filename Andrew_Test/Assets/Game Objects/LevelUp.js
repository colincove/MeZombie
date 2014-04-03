#pragma strict

var healthUpgrade:boolean;
var speedUpgrade:boolean;
var attackPowerUpgrade:boolean;
var attackRateUpgrade:boolean;

static var maxLevel = 2;
private var level:int = 0;

var levelUp:AudioSource;

function Start () {

}

function Update () {


	
		
	var myCollider:BoxCollider2D = GetComponent(BoxCollider2D);
	var myCenter = myCollider.center + transform.parent.gameObject.transform.position;
	var myLeft = myCenter.x-myCollider.size.x/2;
	var myRight = myCenter.x+myCollider.size.x/2;
	var myTop = myCenter.y+myCollider.size.y/2;
	var myBottom = myCenter.y-myCollider.size.y/2;
	
	var mouseCenter = new Vector2(Camera.main.ScreenToWorldPoint(Input.mousePosition).x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y);
	if (myLeft< mouseCenter.x &&  mouseCenter.x < myRight && myBottom< mouseCenter.y &&  mouseCenter.y <myTop && level<maxLevel){
	
	
	
		//left click
		if(Input.GetMouseButtonDown(0)){
			if (healthUpgrade){
				var parent = transform.parent.gameObject;
				
				
				if (level==0 && ResourceMaster.metal>=4){
					level++;
					levelUp.Play();
					
					parent.GetComponent(HealthComponent).hp+=200;
					ResourceMaster.AddResource(1, -4);

					parent.transform.localScale+=new Vector3(0.05,0.05,0.05);
					
				} 
				else if (level==1 &&  ResourceMaster.metal>=4){
					level++;
					levelUp.Play();
					
					parent.GetComponent(HealthComponent).hp+=200;
					ResourceMaster.AddResource(1, -4);
					
					var limbs = parent.GetComponentInChildren(Transform);

					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb"){
							limb.GetComponent(SpriteRenderer).color = new Color(1,0.6,0.6);
						}
					}
				}
			}
			if (speedUpgrade){
				parent = transform.parent.gameObject;
				if (level==0 && ResourceMaster.metal>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(ZombieAnimationController).setWalkAnimSpeed(2);
					parent.GetComponent(MeleeLocomotion).speed += .5;
					ResourceMaster.AddResource(1, -4);
				}
				else if (level==1 && ResourceMaster.metal>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(ZombieAnimationController).setWalkAnimSpeed(3);
					parent.GetComponent(MeleeLocomotion).speed += .5;
					ResourceMaster.AddResource(1, -4);
					
					limbs = parent.GetComponentInChildren(Transform);

					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb"){
							
							limb.GetComponent(SpriteRenderer).color = new Color(1,0.6,0.6);
						}
					}
				}
			}
			if (attackPowerUpgrade){
				parent = transform.parent.gameObject;
				if (level==0 && ResourceMaster.metal>=5 && ResourceMaster.rock>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(StandardDamageDealer).damage += 75;
					try {
						parent.GetComponent(AreaOfEffect).damage += 75;
					} catch(e){
						//no area of effect
					}
					
					ResourceMaster.AddResource(1, -10);
					ResourceMaster.AddResource(3, -5);
					
					limbs = parent.GetComponentInChildren(Transform);
					
					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb2"){
							
							limb.GetComponent(SpriteRenderer).color = new Color(.3,0,0);

						}
					}
				}
				else if (level==1 && ResourceMaster.metal>=5 && ResourceMaster.metal>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(StandardDamageDealer).damage += 75;
					try {
						parent.GetComponent(AreaOfEffect).damage += 75;
					} catch(e){
						//no area of effect
					}
					
					ResourceMaster.AddResource(1, -10);
					ResourceMaster.AddResource(3, -5);
					
					limbs = parent.GetComponentInChildren(Transform);

					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb"  ){
							
							limb.GetComponent(SpriteRenderer).color = new Color(1,0.6,0.6);
						}
						if (limb.tag  =="ZombieLimb2" ){
							
							limb.GetComponent(SpriteRenderer).color = new Color(.3,0,0);
						}
					}
				}
			}
			
			if (attackRateUpgrade){
				parent = transform.parent.gameObject;
				if (level==0 && ResourceMaster.rock>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(ZombieAnimationController).setAttackAnimSpeed(1.18);
					parent.GetComponent(IntervalAttacker).attackSpeed -= 200;
					parent.GetComponent(IntervalAttacker).locomotionDelay -= 200;
					ResourceMaster.AddResource(3, -2);
					
					limbs = parent.GetComponentInChildren(Transform);


					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb2"){
							
							limb.GetComponent(SpriteRenderer).color = new Color(.6,0,0);
							limb.localScale.y+=0.8;
							limb.localScale.x+=0.8;
						}
					}
				}
				else if (level==1 && ResourceMaster.rock>=2){
					level++;
					levelUp.Play();
					parent.GetComponent(ZombieAnimationController).setAttackAnimSpeed(1.44);
					parent.GetComponent(IntervalAttacker).attackSpeed -=200;
					parent.GetComponent(IntervalAttacker).locomotionDelay -= 200;
					ResourceMaster.AddResource(3, -2);
					
					limbs = parent.GetComponentInChildren(Transform);

					for (var limb : Transform in limbs) {
						if (limb.tag =="ZombieLimb"){
							
							limb.GetComponent(SpriteRenderer).color = new Color(1,0.6,0.6);
						}
						
						if (limb.tag  =="ZombieLimb2" ){
							
							limb.GetComponent(SpriteRenderer).color = new Color(.6,0,0);
						}
					}
				}
			}
		}
		
		renderer.enabled=true;
		
	} else {
		renderer.enabled=false;
	}
	
	if (transform.parent.gameObject.GetComponent(HealthComponent).hp<=0){
	renderer.enabled=false;
	}
	
}

function GetLevel(){

	return level;
}