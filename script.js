  const colorsFromValues = [ 
    ["Empowerment", "#0269E1"] //ash electric blue
  , ["Pride", "#0A2342"] //ash dark blue
  , ["Responsibility", "#6F34EE"] //purple
  , ["Innovative", "#F68FFF"] //pink
  , ["Determination", "#FF6B6B"] //red
  , ["Community", "#FFBB0D"] //orange-yellow
  , ["Kindness", "#FFE380"] //yellow
  , ["Openness","#0DFF8B"] //green
  , ["Integrity", "#66EDFF"] //aqua
  , ["Trustworthy", "#B1E3FF"] //light blue
  , ["Compassion", "#D4DAFB"] //lavender
  ];

  const selectors = 
    [ ["value-1", "blob1"]
    , ["value-2", "blob2"]
    , ["value-3", "blob3"]
  ];  
  
  function applyStyles() {
    // Apply the colors and styles to the blob elements
    var i = 1;
    var colorStrings = [];
    for(selector of selectors){
      var selVal = document.getElementById(selector[0]).selectedOptions;
      if(selVal.length > 0){
        colorVal = colorsFromValues.filter(col => col[0] == selVal[0].value);
        document.getElementById('blob'+i).style.backgroundColor = colorVal[0][1];
        colorStrings.push(colorVal[0][0]);
      }
      i = i + 1;
    }
    var colorString = colorStrings.join(' + ');
    document.getElementById("color-text").innerHTML = colorString;
  }

  // Input text into canvas
  document.getElementById("title-text-input").oninput = function () {
    document.getElementById("title-text").innerHTML = this.value;
  };
  document.getElementById("name-text-input").oninput = function () {
    document.getElementById("name-text").innerHTML = this.value;
  };

  function randomize() {
    // Get the dimensions of the canvas
    const canvasHeight = document.getElementById('canvas--artwork').offsetHeight;
    const canvasWidth = document.getElementById('canvas--artwork').offsetWidth;

    const blobs = ['blob1', 'blob2', 'blob3'];

    for(blob of blobs){
      // Set the positions of the blob elements to random coordinates
      const theBlob = document.getElementById(blob);
      theBlob.style.top = Math.random()*canvasHeight - canvasHeight/5+ "px";
      theBlob.style.left = Math.random()*canvasWidth/2 + "px";
      // set radius
      const blobRadius = (220 + Math.random()*300) + "px";
      theBlob.style.width = blobRadius;
      theBlob.style.height = blobRadius;

      //theBlob.style.opacity = 0.7+Math.random()*0.5;
      var gaussianBlur = 40 + Math.random()*60;
      theBlob.style.filter = `blur(${gaussianBlur}px)`;
    }
  }

  window.onload = () => {
    randomize();
    populateSelectors();
    applyStyles();
  }
  
  function populateSelectors(){

    for(selector of selectors){
      // get the selector element
      var sel = document.getElementById(selector[0]);
      var blob = document.getElementById(selector[1]);
      
      // add an option for each value/color
      for(valToCol of colorsFromValues){
        var el = document.createElement("option");
        el.textContent = valToCol[0];
        el.value = valToCol[0];
        sel.appendChild(el);

        sel.onchange = () => { applyStyles() };
      }
    }
  }
