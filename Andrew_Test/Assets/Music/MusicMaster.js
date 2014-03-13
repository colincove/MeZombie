#pragma strict

var level:AudioSource;
var pause:AudioSource;
function Start () {

}

function Update () {
	if (TogglePause.isPause){
		PlayMusic(1);
	} else {
		PlayMusic(0);
	}
}

function PlayMusic(index:int){
	
		
	
	if (index==0 && !level.isPlaying){
		StopAllSounds();
		level.Play();
	} else if (index==1 && !pause.isPlaying){
		StopAllSounds();
		pause.Play();
	}
}

private function StopAllSounds(){
	 level.Stop();
	pause.Stop();
	
}


