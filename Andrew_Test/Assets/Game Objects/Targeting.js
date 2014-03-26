#pragma strict

private var agro:GameObject;
private var attack:GameObject;
private var agroTarget:Target;
private var attackTarget:Target;

public var agroList:List.<GameObject>;
public var attackList:List.<GameObject>;

function Start () {

	try{
		//Get agro radius components inside of game object. 
		agro = transform.Find("Agro").gameObject;
	}catch(e){
		//no agro object found
	}
	
	try{
		//Get attack radius components inside of game object. 
		attack = transform.Find("AttackRadius").gameObject;
	}catch(e){
		//no attack object found
	}
	
	if(agro!=null){
		agroTarget=agro.GetComponent("Target");
		agroList = agroTarget.targeting_list;
	}
	if(attack!=null){
		attackTarget=attack.GetComponent("Target");
		attackList = attackTarget.targeting_list;
	}
}

function Update () {

}