require([
      "esri/Map",
      "esri/layers/Layer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
     Layer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-91.1, 38.6],
        zoom: 9
      });

      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

      var template = { // autocasts as new PopupTemplate()
        title: "St. Louis School Districts",
       
      };

     var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://graphicriver.img.customer.envatousercontent.com/files/224145068/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=60d4fe57e0a4ead05318f4b9ba91192a",
      width: "48px",
      height: "48px"
};
  var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
    var layer = Layer.fromPortalItem({
          portalItem: {
          
            id: "cb8c591911fc4e3090b1371cb0f4ba87"
            /*id: "c0238b8ae811443dbe52437496a1a514"*/
          }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
  }

        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }

   
    });
