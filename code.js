var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bc61597e-3107-47cc-9f58-8a8b7410859f","47aaa860-cdd0-43cb-81ea-4370a9147bc9","efdfbf9f-0877-467f-b88b-42001cca93d7","6c8ed9aa-0edc-43cb-9d65-e8d8f55b483f","7f966a82-c6ff-40bb-99fb-b4253054c52b","6879da5b-836c-4c2e-9c1d-bb50d4428c5a","c4284900-4e09-4fab-84c0-8c16b1516b8b","e6d254b3-7840-41f3-b605-c0dec988116b","d4d23e49-bbf5-471a-bc09-bd82d510d8fc"],"propsByKey":{"bc61597e-3107-47cc-9f58-8a8b7410859f":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"47aaa860-cdd0-43cb-81ea-4370a9147bc9":{"name":"rockDown_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr/category_obstacles/rockDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sQOiaD6zNgCGsBj_o3UGU99QB6HCTlgr/category_obstacles/rockDown.png"},"efdfbf9f-0877-467f-b88b-42001cca93d7":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"6c8ed9aa-0edc-43cb-9d65-e8d8f55b483f":{"name":"crab_1","sourceUrl":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"k76J3fnUizuR.cly1ePZrTD5O0KW3BIz","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png"},"7f966a82-c6ff-40bb-99fb-b4253054c52b":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"6879da5b-836c-4c2e-9c1d-bb50d4428c5a":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"c4284900-4e09-4fab-84c0-8c16b1516b8b":{"name":"virus03_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":1,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"e6d254b3-7840-41f3-b605-c0dec988116b":{"name":"virus03_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"dHshQXiche2omlBhwWrKH5zbfEiC6doy","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png"},"d4d23e49-bbf5-471a-bc09-bd82d510d8fc":{"name":"alienBlue_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"dc4vui4_pmHrM.rep9aLGndzWtuC_cqp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//MAYOOKH'S 
var wall1 = createSprite(130, 300, 400, 7);
wall1.shapeColor = "white";
var ball = createSprite(27, 345, 10, 10);
ball.setAnimation("alienBlue_walk_1");
ball.scale = 1/3;
var laser1 = createSprite(201, 345, 3, 20);
laser1.setAnimation("rockDown_1");
laser1.scale = 1/8;
laser1.velocityY = 5;
var laser2 = createSprite(250, 345, 3, 20);
laser2.shapeColor = "red";
laser2.velocityY = 4;
var wall2 = createSprite(297, 201, 400, 7);
wall2.shapeColor = "white";
var laser3 = createSprite(198, 251, 3, 20);
laser3.velocityY = 4;
laser3.shapeColor = "red";
var laser4 = createSprite(247, 251, 3, 20);
laser4.velocityY = 5;
laser4.setAnimation("rockDown_1");
laser4.scale = 1/8;
var p = createSprite(217, 20, 10, 10);
p.setAnimation("virus03_04_1");
p.scale = 1/10;
p.velocityX = 4;
var b = createSprite(155, 64, 10, 10);
b.setAnimation("virus03_11_1");
b.scale = 1/10;
b.velocityX = -4;
var wall3 = createSprite(150, 100, 400, 7);
wall3.shapeColor = "white";
var laser5 = createSprite(193, 144, 3, 20);
laser5.velocityY = 4;
laser5.shapeColor = "red";
var laser6 = createSprite(252, 123, 3, 20);
laser6.velocityY = 4;
laser6.setAnimation("rockDown_1");
laser6.scale = 1/8;
var laser7 = createSprite(311, 196, 3, 20);
laser7.velocityY = 5;
laser7.shapeColor = "red";
var goal = createSprite(28, 30, 40, 95);
goal.setAnimation("coin_gold_1");
function draw() {
  background("lime");
  fill("yellow");
  createEdgeSprites();
  
  ball.velocityX = 0;
  ball.velocityY = 0;
  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -4;
  }
  if (keyDown("down")) {
    ball.velocityX = 0;
    ball.velocityY = 4;
  }
  if (keyDown("left")) {
    ball.velocityX = -4;
    ball.velocityY = 0;
  }
  if (keyDown("right")) {
    ball.velocityX = 4;
    ball.velocityY = 0;
  }
  
  if (ball.isTouching(laser1) || ball.isTouching(laser2)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("DEAD!! GAMEOVER", 100, 200);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
   
    ball.setVelocity(0, 0);
  }
  if (ball.isTouching(p)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("shh NEVER TOUCH A DRAGON", 100, 200);
    playSound("assets/category_animals/dinosaur.mp3", true);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
     
    ball.setVelocity(0, 0);
  }
  if (ball.isTouching(b)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("huh ha CRAB CAUGHT YOU", 100, 200);
    playSound("assets/category_animals/pig.mp3", true);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
     
    ball.setVelocity(0, 0);
  }
   if (ball.isTouching(laser3) || ball.isTouching(laser4)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("DEAD!! GAMEOVER", 100, 200);
     playSound("assets/gameover.mp3", false);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
   
    ball.setVelocity(0, 0);
  }
  if (ball.isTouching(laser5) || ball.isTouching(laser6)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("DEAD!! GAMEOVER", 100, 200);
    playSound("assets/category_male_voiceover/game_over_male.mp3", true);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
   
    ball.setVelocity(0, 0);
  }
 
 if (ball.isTouching(laser7)) {
    stroke("no");
    fill("blue");
    textSize(25);
    text("DEAD!! GAMEOVER", 100, 200);
    playSound("assets/category_male_voiceover/game_over_male.mp3", true);
    laser2.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser5.setVelocity(0, 0);
    laser6.setVelocity(0, 0);
    laser7.setVelocity(0, 0);
     
    ball.setVelocity(0, 0);
  }
  if (ball.isTouching(goal)) {
    stroke("red");
    fill("no");
    textSize(15);
    text("WOO HOO!DESTINATION REACHED", 0, 200);
    playSound("assets/category_female_voiceover/mission_completed_female.mp3", true);
    ball.setVelocity(0, 0);
    laser1.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser2.setVelocity(0, 0);
   
  }
  
  
  ball.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(wall1);
  laser5.bounceOff(wall2);
  laser3.bounceOff(edges);
  laser6.bounceOff(wall2);
  laser7.bounceOff(wall2);
  laser4.bounceOff(wall1);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges);
  laser6.bounceOff(edges);
  laser7.bounceOff(edges);
  p.bounceOff(edges);
  p.bounceOff(goal);
  b.bounceOff(edges);
  b.bounceOff(goal);
  laser1.bounceOff(wall1);
  laser3.bounceOff(wall2);
  laser4.bounceOff(wall2);
  laser5.bounceOff(wall3);
  laser6.bounceOff(wall3);
  laser7.bounceOff(wall3);
  laser2.bounceOff(wall1);
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  
  
   
 
 
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
