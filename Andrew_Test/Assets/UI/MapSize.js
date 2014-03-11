#pragma strict
//This class should be attached to the game object that specifies the size of the map. 
//The x and y values should be the same as the collider width and height. 
//This is all becuase Collider.bounds is bugged, not found on the object. 
//Therfore, there is no way to get the width and height of the object from code. 
//So we use this just to simply transfer the values over the camera. 

public var width:float;
public var height:float;