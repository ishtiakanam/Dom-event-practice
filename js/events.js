function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//adding blue botton
const blueBotton = document.getElementById("make-blue-button");
blueBotton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

     //anonymous images are

      const greenButton = document.getElementById("make-green-button");
      greenButton.onclick = function makeGreen(){
          document.body.style.backgroundColor = 'green';
      }

      //hendeling by adding golden rod botton
      const goldenBotton = document.getElementById('male-golde-rod');
      goldenBotton.addEventListener('click',makeGoldenRod)
      function makeGoldenRod(){
        document.body.style.backgroundColor = 'goldenrod'
      }

      //add evenListenr
      const  hotPinkBottn = document.getElementById("make-hotpink"); 
      hotPinkBottn.addEventListener('click',function malePink(){
          document.body.style.backgroundColor = "hotpink"
      })

      //direct shortCut
      document.getElementById("light-blue").addEventListener('click',function(){
        document.body.style.backgroundColor = ' lightblue'
    })