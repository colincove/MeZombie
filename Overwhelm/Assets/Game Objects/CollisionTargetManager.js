#pragma strict
import System.Collections.Generic;

public var targetComp:Target;
public var collisionList: List.<GameObject> = new List.<GameObject>();//I am being agro'd by
private var collisionRemovalList: List.<GameObject> = new List.<GameObject>();//I am being agro'd by

function Update () {
	for(var col:GameObject in collisionList){
		if (col!=null){
			var colGOB:GameObjectBehaviour = col.GetComponent("GameObjectBehaviour");
			if(colGOB.dead){
				targetComp.RemoveTarget(col);
				collisionRemovalList.Add(col);
			}
		}
	}
	if(collisionRemovalList.Count!=0){
		for(var col:GameObject in collisionRemovalList){
			collisionList.Remove(col);
		}
		collisionRemovalList.Clear();
	}
}
function OnTriggerEnter2D (collInfo : Collider2D) {
	var otherGameObject:GameObjectBehaviour = collInfo.gameObject.GetComponent("GameObjectBehaviour");
	if(otherGameObject!=null && targetComp!=null){
		if(otherGameObject.targets.length>0){
		//if this game object has a target. 
		var index:int=collisionList.IndexOf(collInfo.gameObject);
			if(otherGameObject.team!=targetComp.team && 
			(otherGameObject.lane==targetComp.lane || otherGameObject.tag=="Barricade") &&
			!otherGameObject.dead &&
			index==-1){		
				targetComp.TriggerTarget(collInfo.gameObject);
				collisionList.Add(collInfo.gameObject);
			}
		}
	}
}

function OnTriggerExit2D (collInfo : Collider2D) {
	var otherTarget:GameObjectBehaviour = collInfo.gameObject.GetComponent("GameObjectBehaviour");
	if(otherTarget!=null && targetComp!=null){
		if(otherTarget.team!=targetComp.team && otherTarget.lane==targetComp.lane){
			targetComp.RemoveTarget(collInfo.gameObject);
			collisionList.Remove(collInfo.gameObject);
		}	
	}
}