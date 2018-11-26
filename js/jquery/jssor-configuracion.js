        jQuery(document).ready(function ($) {
            var options = {
                $AutoPlay: true,
                $AutoPlaySteps: 1, 
                $AutoPlayInterval: 0,                            
                $PauseOnHover: 4,                               

                $ArrowKeyNavigation: true,   			            
                $SlideEasing: $JssorEasing$.$EaseLinear,          
                $SlideDuration: 1600,    
                $MinDragOffsetToSlide: 20,
                $SlideWidth: 70,
                $SlideHeight: 50,
                $SlideSpacing: 0, 
                $DisplayPieces: 13,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1 
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        });