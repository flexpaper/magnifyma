/* **  
 * Copyright (c) 2010 Jack Prosser
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var url = window.location;

var newElement = new Element("div");
newElement.innerHTML = '<div id="magnify"><div id="magnify-glass"></div><div id="magnify-canvas"><canvas></canvas></div></div>';

newElement.inject($$("body")[0]);

var magnify = function() {

	// Get the initial elements for the magnifying glass
	var elements = {
		body : $$("body")[0], 
		magnify : document.id("magnify"),
		magnifyCanvas : document.id("magnify-canvas"),
		magnifyCanvasArea : document.id("magnify-canvas").getFirst(),
		magnifyGlass : document.id("magnify-glass")
    };
    
	// Initial scale to multiply all content by
	var scale = 2;
	
	// Last key code pressed
    var lastKeycode = 0;
    
    // Offset x function which returns the amount based on the scale 
    var offsetX = function() {
    	if (scale == 1) return 155;
        if (scale == 2) return 800;
        if (scale == 3) return 740;
    };
    
    // Offset y function which returns the amount based on the scale
    var offsetY = function() {
    	if (scale == 1) return 155;
        if (scale == 2) return 600;
        if (scale == 3) return 550;
    };
    
    // Marker for glass showing or not
    var glassShow = true;
    
    // Marker to see if magnifier is showing or not
    var showing = false;
    
    // Marker to see if started yet
    var started = false;
                         
    return {
    	
    	/* **
    	 * Initialise sets the keydown event to control the magnifying glass
    	 */
    	init : function() {
        
    		var self = this;
                                            
            document.addEvent("keydown", function(_e) {
            
            	if (lastKeycode == 16) {
            		
            		//alert(_e.code);
            	
	            	// Magnify start or show / hide shift + m
	                if (_e.code == 77) {
	                	if (!started) {
	                		self.start();
	                	} else {
	                		self.toggleShow();
	                	}
	                	
	                }
	                                      
	                // Magnify shift + z
	                if (_e.code == 90) {
	                	self.zoom(1);
	                }
	                                      
	                // Magnify shift + x
	                if (_e.code == 88) {
	                	self.zoom(-1);
	                }
	                
	                // Toggle glass + g
	                if (_e.code == 71) {
	                	self.toggleGlass();            	
	                }
	                	                
            	}
                                      
                lastKeycode = _e.code;
                                                                      
            });

    	},
        
    	/* **
    	 * Start show the magnifying glass and set the mouse move event
    	 */
    	start : function() {
    		
    		elements.magnify.setStyle("display", "block"); 
    		
    		elements.magnifyCanvasArea.width = window.innerWidth * scale;
    		elements.magnifyCanvasArea.height = window.innerHeight * scale;
    		
    		var ctx = elements.magnifyCanvasArea.getContext('2d');  
    	    var img = new Image();  
    	    img.onload = function(){  
    	    	ctx.drawImage(img, 0, 0, window.innerWidth * scale, window.innerHeight * scale);  
    	    }  
    	    img.src = magnifyCanvasData;
    	    
    	    elements.body.setStyle("overflow", "hidden");
    		
    	    img.inject(elements.body);
    		
            elements.body.addEvent("mousemove", function(e) {
                  
            	//elements.widthContainer.setStyle({
	            //	x: (((e.client.x * scale) * -1)), //  + offsetX() 
	            //	y: (((e.client.y * scale) * -1))  //  + offsetY()
	            //});
            	
            	if ((e.client.x + 300) < elements.magnifyCanvasArea.width && (e.client.y + 300) < elements.magnifyCanvasArea.height) { 
            	
	            	elements.magnifyCanvas.scrollTo(e.client.x * scale, e.client.y * scale);
		                        
		            elements.magnify.setStyles({
		            	"top" : e.client.y + "px",
		                "left" : e.client.x + "px"
		            });
		            
            	}
                           
            });
            
            started = true;
            showing = true;
                
    	},
    	
    	/* **
    	 * Increases the scale amount
    	 */
        zoom : function(_amount) {
    		
    		if ((scale + _amount) >= 1 && (scale + _amount) <= 3) {
            	scale = scale + _amount;
                elements.widthContainer.setStyle("-webkit-transform", "scale(" + scale + ")");
            }
                                
    	},
    	
    	/* **
    	 * Toggle glass
    	 */
    	toggleGlass : function() {
    		
    		if (glassShow) {
    			glassShow = false;
    			elements.magnifyGlass.addClass("noglass");
    		} else {
    			glassShow = true;
    			elements.magnifyGlass.removeClass("noglass");
    		}
    		
    	},
    	
    	/* **
    	 * Toggle show / hide
    	 */
    	toggleShow : function() {
    		
    		alert(magnifyCanvasData);
    		
    		if (showing) {
    			showing = false;
    			elements.magnify.setStyle("display", "none");
    		} else {
    			showing = true;
    			elements.magnify.setStyle("display", "block");
    		}
    		
    	}
                
    }
       
}();
      
magnify.init();