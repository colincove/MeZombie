#pragma strict


static var hooman:int;
static var metal:int;
static var gasoline:int;
static var rock:int;



function Start () {
	
}

public static function AddResource(resourceId:int, count:int){
	switch(resourceId){
		case 0:
			hooman+=count; 
			break;
		case 1:
			metal+=count;
			break;
		case 2:
			gasoline+=count;
			break;
		case 3:
			rock+=count;
			break;
	}
}

function Update () {
	var resources_string = "h: "+padding(hooman)+" m: "+padding(metal)+" g: "+padding(gasoline)+ " r: "+padding(rock);

	GameObject.Find("resourceStats").guiText.text=resources_string;
}

function padding(stat:int){


	if (stat<10)
		return "00"+stat;
	else if (stat>=10 && stat<100)
		return "0"+stat;
	else if (stat < 1000)
		return stat;
	else
		return "999";
}