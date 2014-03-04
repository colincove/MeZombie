#pragma strict


var walk: AudioSource;
var idle: AudioSource;
var attack: AudioSource;
var die: AudioSource;

private function StopAllSounds(){
	if (walk!=null) walk.Stop();
	if (idle!=null) idle.Stop();
	if (attack!=null) attack.Stop();
	
	if (die!=null) die.Stop();
}

function Start () {

}

function Update () {

}

function playWalkSound(){
	if (walk!=null && !walk.isPlaying){
		StopAllSounds();
		walk.Play();
	}
}

function playIdleSound(){
	if (idle!=null && !idle.isPlaying){
		StopAllSounds();
		idle.Play();
	}
}

function playAttackSound(){
	if (attack!=null){
		StopAllSounds();
		attack.Play();
	}
}

function playDieSound(){
	if (die!=null){
		StopAllSounds();
		die.Play();
	}
	
	if (name=="Melee Hooman"){
		Debug.Log("dead sound");
	}
}

function FadeOutSound(sound:AudioSource){
 
var i : int;
 
    for (i = 9; i > 0; i--)
    {
        sound.volume = i * .1;
        yield new WaitForSeconds (.5);
    }
    sound.Stop();
}
