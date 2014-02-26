﻿#pragma strict
private var lastAttackTime:int;
public var attackSpeed:int=500;//in milliseconds
public var locomotionDelay:int=500;
private var target:GameObject;

function Start() {
	lastAttackTime=Time.time*1000;

}

function Update() {
		if(target!=null){
		//if there are targets within attack range
			var time:int = Time.time*1000;
			var diff:int=Time.time*1000-lastAttackTime;
			if(Time.time*1000-lastAttackTime>attackSpeed)
			{
				SendMessage("Attack", target);
				SendMessage("DelayLocomotion", locomotionDelay);
				lastAttackTime=Time.time*1000;
			}
		}else{
			lastAttackTime=Time.time*1000;
		}
}
function ReTarget(newTarget:GameObject){	
	target=newTarget;
	lastAttackTime=Time.time*1000;
}
function ResetTarget(){
	target=null;
}
function SetTarget(newTarget:GameObject)
{
	target=newTarget;
	lastAttackTime=Time.time*1000;

}
function Attack(){
}

function DelayLocomotion(delay:int){
}