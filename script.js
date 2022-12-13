  const colorsFromValues = [ 
    ["Empowerment", "#0269E1"]
  , ["Pride", "#0A2342"]
  , ["Prejudice", "#6F34EE"]
  , ["sdf", "#F68FFF"]
  , ["sdfsdfsdf", "#FF6B6B"]
  , ["1123123", "#FFBB0D"]
  , ["sdxf", "#FFE380"]
  , ["2342sd","#0DFF8B"]
  , ["ppp", "#66EDFF"]
  , ["xcvx", "#B1E3FF"]
  , ["2349", "#D4DAFB"]
  ];

  const selectors = 
    [ ["value-1", "blob1"]
    , ["value-2", "blob2"]
    , ["value-3", "blob3"]
  ];  
  
  function applyStyles() {
    const gaussianBlur = document.getElementById('gaussianblur').value;
    const alpha = document.getElementById('alpha').value;

    // Apply the colors and styles to the blob elements

    var i = 1;
    for(selector of selectors){
      var selVal = document.getElementById(selector[0]).selectedOptions;
      if(selVal.length > 0){
        colorVal = colorsFromValues.filter(col => col[0] == selVal[0].value);
        document.getElementById('blob'+i).style.backgroundColor = colorVal[0][1];
        document.getElementById('blob'+i).style.filter = `blur(${gaussianBlur}px)`;
        document.getElementById('blob'+i).style.opacity = alpha;
      }
      i = i + 1;
    }
  }

  // Input text into canvas
  document.getElementById("title-text-input").oninput = function () {
    document.getElementById("title-text").innerHTML = this.value;
  };
  document.getElementById("name-text-input").oninput = function () {
    document.getElementById("name-text").innerHTML = this.value;
  };
  document.getElementById("color-text-input").oninput = function () {
    document.getElementById("title-text").innerHTML = this.value;
  };
  

  function randomizePositions() {
    // Get the dimensions of the canvas
    const canvasHeight = document.getElementById('canvas--artwork').offsetHeight;
    const canvasWidth = document.getElementById('canvas--artwork').offsetWidth;

    const blobs = ['blob1', 'blob2', 'blob3'];

    for(blob of blobs){
      // Set the positions of the blob elements to random coordinates
      const theBlob = document.getElementById(blob);
      theBlob.style.top = Math.random()*canvasHeight/2 + "px";
      theBlob.style.left = Math.random()*canvasWidth/2 + "px";
      // set radius
      const blobRadius = (100 + Math.random()*200) + "px";
      theBlob.style.width = blobRadius;
      theBlob.style.height = blobRadius;
    }
  }

  window.onload = () => {
    randomizePositions();
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