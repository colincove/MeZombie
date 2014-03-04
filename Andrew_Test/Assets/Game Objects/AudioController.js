#pragma strict


private var hasDefaultSoundPlayed:boolean;
var defaultSound: AudioSource;

var attacking: AudioSource;

var dying: AudioSource;

function Start () {

}

function Update () {

}

function Idle(){
	if (!hasDefaultSoundPlayed){
		StopAllSounds();
		defaultSound.Play();
		hasDefaultSoundPlayed=true;
	}
}

function Attack(){
	StopAllSounds();
	attacking.Play();
	hasDefaultSoundPlayed=false;
}

function OnKilled(){
	StopAllSounds();
	dying.Play();
	
	hasDefaultSoundPlayed=false;
}

private function StopAllSounds(){
	defaultSound.Stop();
	attacking.Stop();
	dying.Stop();
}