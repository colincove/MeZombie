#pragma strict


static var hooman:int;
static var metal:int;
static var gasoline:int;
static var rock:int;

var  uiCamera:Camera;

var hooman_ui:GameObject;
var metal_ui:GameObject;
var gasoline_ui:GameObject;
var rock_ui:GameObject;

var spawnedText:GameObject;

static var zombieCost_arr:int[,] = new int[7,4];
//hooman, metal, gas, rock

//resource count
var hooman_startingResource:int;
var metal_startingResource:int;
var gasoline_startingResource:int;
var rock_startingResource:int;

function Start () {
	//Standard Zombie cost
	zombieCost_arr[0,0]=1;
	zombieCost_arr[0,1]=0;
	zombieCost_arr[0,2]=0;
	zombieCost_arr[0,3]=0;
	
	//Big Zombie cost
	zombieCost_arr[1,0]=5;
	zombieCost_arr[1,1]=0;
	zombieCost_arr[1,2]=0;
	zombieCost_arr[1,3]=0;
	
	//Bomber Zombie cost
	zombieCost_arr[2,0]=3;
	zombieCost_arr[2,1]=0;
	zombieCost_arr[2,2]=2;
	zombieCost_arr[2,3]=0;
	
	//Flyer Zombie cost
	zombieCost_arr[3,0]=5;
	zombieCost_arr[3,1]=3;
	zombieCost_arr[3,2]=2;
	zombieCost_arr[3,3]=0;
	
	//Ranged Zombie cost
	zombieCost_arr[4,0]=3;
	zombieCost_arr[4,1]=0;
	zombieCost_arr[4,2]=0;
	zombieCost_arr[4,3]=1;
	
	//Scout Zombie cost
	zombieCost_arr[5,0]=1;
	zombieCost_arr[5,1]=0;
	zombieCost_arr[5,2]=0;
	zombieCost_arr[5,3]=0;
	
	//Titan Zombie cost
	zombieCost_arr[6,0]=10;
	zombieCost_arr[6,1]=5;
	zombieCost_arr[6,2]=0;
	zombieCost_arr[6,3]=0;
	
	ResourceMaster.hooman = hooman_startingResource;
	ResourceMaster.metal = metal_startingResource;
	ResourceMaster.gasoline = gasoline_startingResource;
	ResourceMaster.rock = rock_startingResource;
	
}

public static function AddResource(resourceId:int, count:int){
	switch(resourceId){
		case 0:
			hooman+=count; 
			//ui = hooman_ui;
			break;
		case 1:
			metal+=count;
			//ui = metal_ui;
			break;
		case 2:
			gasoline+=count;
			//ui = gasoline_ui;
			break;
		case 3:
			rock+=count;
			//ui = rock_ui;
			break;
	}
	if (count!=0){
	var rm = GameObject.Find("Resource");
	//
	rm.GetComponent(ResourceMaster).spawnResourceText(resourceId,count);
	}
}

function spawnResourceText(resourceId:int,count:int){
	var ui:GameObject;
	switch(resourceId){
		case 0:
			ui = hooman_ui;
			break;
		case 1:
			ui = metal_ui;
			break;
		case 2:
			ui = gasoline_ui;
			break;
		case 3:
			ui = rock_ui;
			break;
	}
	var GO =Instantiate(spawnedText, ui.transform.position, Quaternion.identity );
	
	if (count>0){
		 GO.GetComponent(TextMesh).text="+"+count;

	} else {
 		GO.GetComponent(TextMesh).text=""+count;
 	}
}

function Update () {
	//var resources_string = "h: "+padding(hooman)+" m: "+padding(metal)+" g: "+padding(gasoline)+ " r: "+padding(rock);
	
	//stick to left of camera
	var camPosition = new Vector2(uiCamera.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x,0f);
	transform.position.x = camPosition.x;
	
	//hooman count
	for (var child : Transform in hooman_ui.transform) {
	    child.GetComponent(TextMesh).text = padding(hooman);
	}
	//metal count
	for (var child : Transform in metal_ui.transform) {
	    child.GetComponent(TextMesh).text = padding(metal);
	}
	//gasoline count
	for (var child : Transform in gasoline_ui.transform) {
	    child.GetComponent(TextMesh).text = padding(gasoline);
	}
	//rock count
	for (var child : Transform in rock_ui.transform) {
	    child.GetComponent(TextMesh).text = padding(rock);
	}
}

function padding(stat:int){


	if (stat<10)
		return "00"+stat;
	else if (stat>=10 && stat<100)
		return "0"+stat;
	else if (stat < 1000)
		return ""+stat;
	else
		return "999";
}