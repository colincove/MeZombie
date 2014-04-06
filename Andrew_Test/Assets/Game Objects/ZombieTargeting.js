#pragma strict
public var targetLists : Targeting;
public class ZombieTargeting extends AbstractTargeting{
	public var currentAttackTarget:GameObject;
	public var currentAgroTarget:GameObject;
	public function getAgroTarget(){
		return currentAgroTarget;
	}
	public function getAttackTarget(){
		return currentAttackTarget;
	}
	function Update(){
	
		if(targetLists.agroList.Count>0)
		{
			currentAgroTarget=targetLists.agroList[0];
			//if the target is a barricade, search the list for a human. 
			//should always agro a human when they are in the list. 
			if(currentAgroTarget!=null && currentAgroTarget.tag=="Barricade"){
				for(var i:int=0;i<targetLists.agroList.Count; i++){
					if(targetLists!=null && targetLists.agroList[i] !=null && targetLists.agroList[i].tag!="Barricade"){
						currentAgroTarget=targetLists.agroList[i];
						break;
					}
				}
			}
		}else{
			currentAgroTarget=null;
		}
		
		if(targetLists.attackList.Count>0)
		{
			currentAttackTarget=targetLists.attackList[0];
		}else{
			currentAttackTarget=null;
		}
				
	}
}