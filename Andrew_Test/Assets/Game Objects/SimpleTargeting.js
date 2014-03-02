#pragma strict
public var targetLists : Targeting;
public class SimpleTargeting extends AbstractTargeting{
	private var currentAttackTarget:GameObject;
	private var currentAgroTarget:GameObject;
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