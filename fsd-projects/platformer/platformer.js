$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150,685,100,20, "pink");
    createPlatform(375,585,100,20, "pink");
    createPlatform(585,490,100,20, "pink");
    createPlatform(800,585,100,20, "pink");
    createPlatform(1055,685,100,20, "pink");
    



    // TODO 3 - Create Collectables
    createCollectable("diamond", 150, 500, 0.5, 0.7);
    createCollectable("grace", 375, 500, 0.5, 0.7);
    createCollectable("kennedi", 585, 450, 0.5, 0.7);
    createCollectable("max", 800, 535, 0.5, 0.7);
    createCollectable("steve", 1055, 635, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2500);
    createCannon("right", 475, 2300);
    createCannon("top", 1100, 2000);
    createCannon("left", 500, 2100);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
