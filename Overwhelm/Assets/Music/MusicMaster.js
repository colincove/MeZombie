#pragma strict

var level:AudioSource;
var pause:AudioSource;
var win:AudioSource;
var lose:AudioSource;
function Start () {

}

function Update () {
	if (TogglePause.isPause){
 
			PlayMusic(1);
	} 	
	else if (GameMaster.isWin){
		PlayMusic(2);
	} else if (GameMaster.isLose){
		PlayMusic(3);
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
	}else if (index==2 && !win.isPlaying){
		StopAllSounds();
		win.Play();
	}else if (index==3 && !lose.isPlaying){
		StopAllSounds();
		lose.Play();
	}
}

private function StopAllSounds(){
	 level.Stop();
	pause.Stop();
	win.Stop();
	lose.Stop();
	
}


