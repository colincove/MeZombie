#pragma strict

  private var  mapX : float;
  private  var  mapY : float;
 
    private var minX : float;
    private var maxX : float;
    private var minY : float;
    private var maxY : float;
 
 	private var prevScreenWidth : float;
 	
    function Start() {


    }
 
    function Update() {
    
    	mapX = GameMaster.mapX;
		mapY = GameMaster.mapY;
		
        var vertExtent = Camera.main.camera.orthographicSize;  
        var horzExtent = vertExtent * Screen.width / Screen.height;
 
        // Calculations assume map is position at the origin
        minX = horzExtent - mapX / 2.0;
        maxX = mapX / 2.0 - horzExtent;
        minY = vertExtent - mapY / 2.0;
        maxY = mapY / 2.0 - vertExtent;
        
		if (maxX>minX){
			if (Input.GetAxis("Horizontal")){
				transform.Translate(Vector3(Input.GetAxis("Horizontal")*5*Time.deltaTime,0,0));
			}
			if (Input.GetAxis("Vertical")){
				transform.Translate(Vector3(0,Input.GetAxis("Vertical")*5*Time.deltaTime,0));
			}
		
	        var v3 = transform.position;
	        v3.x = Mathf.Clamp(v3.x, minX, maxX);
	        v3.y = Mathf.Clamp(v3.y, minY, maxY);
	        transform.position = v3;
        }
        
        // screen size changed
        if (Screen.width - prevScreenWidth !=0 && maxX<=minX){
        	transform.position= new Vector3(0,0,-10);
        }
        
       	prevScreenWidth =  Screen.width;


       //	Debug.Log(maxY+":"+(mapY / 2.0 - Camera.main.orthographicSize+0.1));
       	if (Input.GetAxis("Mouse ScrollWheel") < 0 ) // back
        {
         	if (mapY / 2.0 - Camera.main.orthographicSize-.1 > 0){
        
            Camera.main.orthographicSize = Mathf.Min(Camera.main.orthographicSize+.1, 6);
            }
 
        }
        if (Input.GetAxis("Mouse ScrollWheel") > 0) // forward
        {
            Camera.main.orthographicSize = Mathf.Max(Camera.main.orthographicSize-.1, 2);
        }
    }
	
