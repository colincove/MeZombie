#pragma strict


var walk: AudioSource;
var idle: AudioSource;
var attack: AudioSource;
var die: AudioSource;

var break1:AudioSource;
var break2:AudioSource;
var break3:AudioSource;

private function StopAllSounds(){
	if (walk!=null) walk.Stop();
	if (idle!=null) idle.Stop();
	if (attack!=null) attack.Stop();
	if (die!=null) die.Stop();
	
	if (break1!=null) break1.Stop();
	if (break2!=null) break2.Stop();
	if (break3!=null) break3.Stop();
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

}

function playBarricadeBreak(i:int){
	if (i<1) i=1;

	if (break1!=null && i==1){
		StopAllSounds();
		break1.Play();
	}
	else if (break2!=null && i==2){
		StopAllSounds();
		break2.Play();
	}
	else if (break3!=null && i==3){
		StopAllSounds();
		break3.Play();
	}
	else {
		Debug.Log("there is no break "+i+" sound");
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
