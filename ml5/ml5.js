let img, classifier;

function preload(){
  img = loadImage('image1.jpg'); // 원하는 이미지 넣기
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
  createCanvas(img.width, img.height+100);
  background(0);
  image(img, 0, 0);
}

function modelReady(){
  console.log('MobileNet 모델 불러오기 완료');
  classifier.classify(img, gotResult);
}

function gotResult(err, results){
  fill(255, 255, 0);
  textSize(18);
  text(results[0].label+"\n"+"acc = "+round(results[0].confidence,2)*100+"%", 2, height-36);
}
