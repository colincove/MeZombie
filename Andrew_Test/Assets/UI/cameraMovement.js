#pragma strict
private var cam_enabled:boolean=true;
  private var  mapX : float;
  private  var  mapY : float;
 
    private var minX : float;
    private var maxX : float;
    private var minY : float;
    private var maxY : float;
 
 	private var prevScreenWidth : float;
 	
 	public var mapBounds:GameObject;
 	public var mapBoundsReadable:MapSize;
 	
    function Start() {


    }
 
    function Update() {
    	if(cam_enabled){

	    	mapX = mapBounds.transform.position.x;
			mapY = mapBounds.transform.position.y;
			
	        var vertExtent = Camera.main.camera.orthographicSize;  
	        var horzExtent = vertExtent * Screen.width / Screen.height;
	 
	        // Calculations assume map is position at the origin
	        minX = mapX+(horzExtent - mapBoundsReadable.width / 2.0);
	        maxX = mapX+(mapBoundsReadable.width / 2.0 - horzExtent);
	        minY = (vertExtent - mapBoundsReadable.height  / 2.0)-mapY;
	        maxY = (mapBoundsReadable.height / 2.0 - vertExtent)+mapY;
	        
	       
			if (maxX>minX){
			
			var mouseThreshold = 20;
			
			
			if (0 <= Input.mousePosition.x && Input.mousePosition.x <=mouseThreshold){
				transform.Translate(Vector3(-3*Time.deltaTime,0,0));
			}
			if (Screen.width-mouseThreshold <= Input.mousePosition.x && Input.mousePosition.x <=Screen.width){
				transform.Translate(Vector3(3*Time.deltaTime,0,0));
			}
			if (0 <= Input.mousePosition.y && Input.mousePosition.y <=mouseThreshold){
				transform.Translate(Vector3(0,-3*Time.deltaTime,0));
			}
			if (Screen.height-mouseThreshold <= Input.mousePosition.y && Input.mousePosition.y <=Screen.height){
				transform.Translate(Vector3(0,3*Time.deltaTime,0));
			}
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
	         	//if (mapY / 2.0 - Camera.main.orthographicSize-.1 > 0){
	        
	            //Camera.main.orthographicSize = Mathf.Min(Camera.main.orthographicSize+.1, 6);
	            //}
	 
	        }
	        if (Input.GetAxis("Mouse ScrollWheel") > 0) // forward
	        {
	           // Camera.main.orthographicSize = Mathf.Max(Camera.main.orthographicSize-.1, 2);
	        }
        
    	}
    }
	
function DisableCamera(){
	cam_enabled=false;
}
function EnableCamera(){
	cam_enabled=true;
}