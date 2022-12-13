  function applyStyles() {
    // Get the values of the color inputs and range input
    const blob1Color = document.getElementById('blob1color').value;
    const blob2Color = document.getElementById('blob2color').value;
    const blob3Color = document.getElementById('blob3color').value;
    const gaussianBlur = document.getElementById('gaussianblur').value;
    const alpha = document.getElementById('alpha').value;

    // Apply the colors and styles to the blob elements
    document.getElementById('blob1').style.backgroundColor = blob1Color;
    document.getElementById('blob2').style.backgroundColor = blob2Color;
    document.getElementById('blob3').style.backgroundColor = blob3Color;
    document.getElementById('blob1').style.filter = `blur(${gaussianBlur}px)`;
    document.getElementById('blob2').style.filter = `blur(${gaussianBlur}px)`;
    document.getElementById('blob3').style.filter = `blur(${gaussianBlur}px)`;
    document.getElementById('blob1').style.opacity = alpha;
    document.getElementById('blob2').style.opacity = alpha;
    document.getElementById('blob3').style.opacity = alpha;
  }

  // Input text into canvas
  document.getElementById("title-text-input").oninput = function () {
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
      theBlob.style.top = Math.random()*canvasHeight + "px";
      theBlob.style.left = Math.random()*canvasWidth + "px";
      // set radius
      const blobRadius = (100 + Math.random()*200) + "px";
      theBlob.style.width = blobRadius;
      theBlob.style.height = blobRadius;
    }
  }
