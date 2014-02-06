var gm:GameObject;
var vm:VisionManager;
function Start(){
	gm = GameObject.Find("_gameMaster");
	vm = gm.GetComponent("VisionManager");
	vm.AddVisionObj(this);
}
function Update(){

}