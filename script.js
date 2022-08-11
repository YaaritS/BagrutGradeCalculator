'use strict';

const hideClass = document.getElementsByClassName('hide');
const points3 = document.querySelectorAll('.points3');
const points4 = document.querySelectorAll('.points4');
const points5 = document.querySelectorAll('.points5');

//buttons points selection
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btnContainer = document.getElementById('btnContainer');
const btns = btnContainer.getElementsByClassName('btn'); //define a specific area, not the whole document

let currentGradeBox = circlesSection.getElementsByClassName('active');
const gradeBoxes = document.getElementsByClassName('grade-box');
const myBtns = document.getElementsByClassName('myBtn'); //circles
const spans = document.getElementsByClassName('close');

//grade breakdown module E - 5 points
let moduleEHagashaGrade = document.getElementById('moduleEHagasha30');
let moduleEBagrutGrade = document.getElementById('moduleEBagrut70');
const moduleECalculate = document.getElementById('moduleECalculate');
let moduleEFinal = document.getElementById('moduleEFinal');

//grade breakdown module E - 4 points
let moduleEHagashaGrade4P = document.getElementById('moduleEHagasha304P');
let moduleEBagrutGrade4P = document.getElementById('moduleEBagrut704P');
const moduleECalculate4P = document.getElementById('moduleECalculate4P');
let moduleEFinal4P = document.getElementById('moduleEFinal4P');

//grade breakdown cobe - 5 points
let cobeHagashaGrade = document.getElementById('cobeHagasha30');
let cobeBagrutGrade = document.getElementById('cobeBagrut70');
const cobeCalculate = document.getElementById('cobeCalculate');
let cobeFinal = document.getElementById('cobeFinal');

//grade breakdown cobe - 4 points
let cobeHagashaGrade4P = document.getElementById('cobeHagasha304P');
let cobeBagrutGrade4P = document.getElementById('cobeBagrut704P');
const cobeCalculate4P = document.getElementById('cobeCalculate4P');
let cobeFinal4P = document.getElementById('cobeFinal4P');

//grade breakdown module G
let moduleGHagashaGrade = document.getElementById('moduleGHagasha30');
let moduleGBagrutGrade = document.getElementById('moduleGBagrut70');
const moduleGCalculate = document.getElementById('moduleGCalculate');
let moduleGFinal = document.getElementById('moduleGFinal');

//grade breakdown module C - 4 points
let moduleCHagashaGrade = document.getElementById('moduleCHagasha30');
let moduleCBagrutGrade = document.getElementById('moduleCBagrut70');
const moduleCCalculate = document.getElementById('moduleCCalculate');
let moduleCFinal = document.getElementById('moduleCFinal');

//grade breakdown module F
let literaryPieces = Array.from(
  document.getElementsByClassName('literaryPiece5P')
);
let literaryTests = Array.from(document.getElementsByClassName('litTest5P'));
let bookGrades = Array.from(document.getElementsByClassName('book5P'));
const moduleFCalculate = document.getElementById('moduleFCalculate');
let moduleFFinal = document.getElementById('moduleFFinal');

//grade breakdown module D
let literaryPieces4P = Array.from(
  document.getElementsByClassName('literaryPiece4P')
);
let literaryTests4P = Array.from(document.getElementsByClassName('litTest4P'));
let bookGrades4P = Array.from(document.getElementsByClassName('book4P'));
const moduleDCalculate = document.getElementById('moduleDCalculate');
let moduleDFinal = document.getElementById('moduleDFinal');

//grade breakdown module A - 3 points
let moduleAHagashaGrade = document.getElementById('moduleAHagasha30');
let moduleABagrutGrade = document.getElementById('moduleABagrut70');
const moduleACalculate = document.getElementById('moduleACalculate');
let moduleAFinal = document.getElementById('moduleAFinal');

//grade breakdown oral bagrut - 3 points
let oralHagashaGrade = document.getElementById('oralHagasha30');
let oralBagrutGrade = document.getElementById('oralBagrut70');
const oralBagrutCalculate = document.getElementById('oralBagrutCalculate');
let oralBagrutFinal = document.getElementById('oralBagrutFinal');

//grade breakdown module C - 3 points
let moduleCHagashaGrade3P = document.getElementById('moduleCHagasha303P');
let moduleCBagrutGrade3P = document.getElementById('moduleCBagrut703P');
const moduleCCalculate3P = document.getElementById('moduleCCalculate3P');
let moduleCFinal3P = document.getElementById('moduleCFinal3P');

//grade breakdown module B
let literaryPieces3P = Array.from(
  document.getElementsByClassName('literaryPiece3P')
);
let literaryTests3P = Array.from(document.getElementsByClassName('litTest3P'));
let bookGrades3P = Array.from(document.getElementsByClassName('book3P'));
const moduleBCalculate = document.getElementById('moduleBCalculate');
let moduleBFinal = document.getElementById('moduleBFinal');

//final grade 5 points
const finalGradebtn5P = document.getElementById('final-grade-btn-5P');
const finalGrade5P = document.getElementById('final-grade-5P');
const doneBtn5P = document.getElementById('done-btn-5P');

//final grade 4 points
const finalGradebtn4P = document.getElementById('final-grade-btn-4P');
const finalGrade4P = document.getElementById('final-grade-4P');
const doneBtn4P = document.getElementById('done-btn-4P');

//final grade 3 points
const finalGradebtn3P = document.getElementById('final-grade-btn-3P');
const finalGrade3P = document.getElementById('final-grade-3P');
const doneBtn3P = document.getElementById('done-btn-3P');

//next step - B
const addGrades = document.getElementById('add-grades');

//To show the relevant circles
function removeClass(pointsArr) {
  pointsArr.forEach(function (point) {
    point.classList.remove('hide');
  });
}

//To show the next step B
function removeHideClass(el) {
  setTimeout(function () {
    el.classList.remove('hide');
  }, 2000);
}
//To show the next step B
function removeDisplayClass(el) {
  setTimeout(function () {
    el.classList.remove('step2');
  }, 10000);
}

//To display the final grade button after completing the input
//loop through all the submit buttons onsubmit execute an action by creating an event listener

doneBtn5P.addEventListener('click', function (evt) {
  evt.preventDefault();
  finalGradebtn5P.classList.remove('hide');
  finalGrade5P.classList.remove('hide');
  finalGradebtn4P.style.display = 'none';
  finalGrade4P.style.display = 'none';
  finalGradebtn3P.style.display = 'none';
  finalGrade3P.style.display = 'none';
});

doneBtn4P.addEventListener('click', function (evt) {
  evt.preventDefault();
  finalGradebtn4P.classList.remove('hide');
  finalGrade4P.classList.remove('hide');
  finalGradebtn3P.style.display = 'none';
  finalGrade3P.style.display = 'none';
  finalGradebtn5P.style.display = 'none';
  finalGrade5P.style.display = 'none';
});

doneBtn3P.addEventListener('click', function (evt) {
  evt.preventDefault();
  finalGradebtn3P.classList.remove('hide');
  finalGrade3P.classList.remove('hide');
  finalGradebtn4P.style.display = 'none';
  finalGrade4P.style.display = 'none';
  finalGradebtn5P.style.display = 'none';
  finalGrade5P.style.display = 'none';
});

//To remove the irrelevant circles
function addClass(pointsArr) {
  pointsArr.forEach(function (point) {
    point.classList.add('hide');
  });
}

//To add active class on buttons when clicked
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = btnContainer.getElementsByClassName('active');
    if (current.length !== 0) {
      current[0].className = current[0].className.replace(' active', ''); // remove old active
    }
    btns[i].classList.add('active'); //add active to new
  });
}

//When the user clicks the button, open the grade-box
for (let i = 0; i < myBtns.length; i++) {
  myBtns[i].addEventListener('click', function () {
    if (currentGradeBox.length !== 0) {
      currentGradeBox[0].className = currentGradeBox[0].className.replace(
        ' active',
        ''
      );
    }
    gradeBoxes[i].classList.add('active');
  });
}

//When the user clicks on <span> (x), close the grade-box
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function () {
    for (let i = 0; i < gradeBoxes.length; i++) {
      gradeBoxes[i].classList.remove('active');
    }
  });
}

function calcGrade3070(hagasha, bagrut) {
  return hagasha * 0.3 + bagrut * 0.7;
}

//5 Points

//5 points module E calculator
moduleECalculate.addEventListener('click', function () {
  moduleEFinal.innerText = `Your Final Grade is ${calcGrade3070(
    moduleEHagashaGrade.value,
    moduleEBagrutGrade.value
  )}`;
});
//5 points cobe calculator
cobeCalculate.addEventListener('click', function () {
  cobeFinal.innerText = `Your Final Grade is ${calcGrade3070(
    cobeHagashaGrade.value,
    cobeBagrutGrade.value
  )}`;
});
//5 points module G calculator
moduleGCalculate.addEventListener('click', function () {
  moduleGFinal.innerText = `Your Final Grade is ${calcGrade3070(
    moduleGHagashaGrade.value,
    moduleGBagrutGrade.value
  )}`;
});

//To calculate the sum of elements in the array - and also to get the average
function calcAver(Arr) {
  let sum = 0;
  for (let i = 0; i < Arr.length; i++) {
    sum += Arr[i]; // sum = sum + Arr[i];
  }
  return sum / Arr.length;
}
// let aaa = [];
// for (let i = 0; i < literaryPieces.length; i++) {
//   aaa.push(+literaryPieces[i].value);
// }

//map method on arrays(forms a new array ready with the function we attached to it)
//similar to for each, to go over the elements in the array and retrieve the value
//the +sign changes the string to a number
// calcAver(
//   literaryPieces.map(lp => {
//     return +lp.value * 0.4;
//   })
// );

moduleFCalculate.addEventListener('click', function () {
  moduleFFinal.innerText = `Your Final Grade is ${
    calcAver(
      literaryPieces.map(lp => {
        return +lp.value * 0.4;
      })
    ) +
    calcAver(
      literaryTests.map(lt => {
        return +lt.value * 0.4;
      })
    ) +
    calcAver(
      bookGrades.map(br => {
        return +br.value * 0.2;
      })
    )
  }`;
});

//final grade display 5 points
finalGradebtn5P.addEventListener('click', function () {
  finalGradebtn5P.classList.add('hide');
  finalGrade5P.classList.add('finalGradeDesign');
  finalGrade5P.innerText = `Your final grade is ${Math.round(
    calcGrade3070(moduleEHagashaGrade.value, moduleEBagrutGrade.value) * 0.27 +
      (calcAver(
        literaryPieces.map(lp => {
          return +lp.value * 0.4;
        })
      ) +
        calcAver(
          literaryTests.map(lt => {
            return +lt.value * 0.4;
          })
        ) +
        calcAver(
          bookGrades.map(br => {
            return +br.value * 0.2;
          })
        )) *
        0.26 +
      calcGrade3070(moduleGHagashaGrade.value, moduleGBagrutGrade.value) *
        0.27 +
      calcGrade3070(cobeHagashaGrade.value, cobeBagrutGrade.value) * 0.2
  )}`;
});

//4 points
//4 points module E calculator
moduleECalculate4P.addEventListener('click', function () {
  moduleEFinal4P.innerText = `Your Final Grade is ${calcGrade3070(
    moduleEHagashaGrade4P.value,
    moduleEBagrutGrade4P.value
  )}`;
});

//4 points cobe calculator
cobeCalculate4P.addEventListener('click', function () {
  cobeFinal4P.innerText = `Your Final Grade is ${calcGrade3070(
    cobeHagashaGrade4P.value,
    cobeBagrutGrade4P.value
  )}`;
});

//4 points module C calculator
moduleCCalculate.addEventListener('click', function () {
  moduleCFinal.innerText = `Your Final Grade is ${calcGrade3070(
    moduleCHagashaGrade.value,
    moduleCBagrutGrade.value
  )}`;
});

//4 points module d calculator
moduleDCalculate.addEventListener('click', function () {
  moduleDFinal.innerText = `Your Final Grade is ${
    calcAver(
      literaryPieces4P.map(lp => {
        return +lp.value * 0.4;
      })
    ) +
    calcAver(
      literaryTests4P.map(lt => {
        return +lt.value * 0.4;
      })
    ) +
    calcAver(
      bookGrades4P.map(br => {
        return +br.value * 0.2;
      })
    )
  }`;
});

//final grade display 4 points
finalGradebtn4P.addEventListener('click', function () {
  finalGradebtn4P.classList.add('hide');
  finalGrade4P.classList.add('finalGradeDesign');
  finalGrade4P.innerText = `Your final grade is ${Math.round(
    calcGrade3070(moduleEHagashaGrade4P.value, moduleEBagrutGrade4P.value) *
      0.27 +
      (calcAver(
        literaryPieces4P.map(lp => {
          return +lp.value * 0.4;
        })
      ) +
        calcAver(
          literaryTests4P.map(lt => {
            return +lt.value * 0.4;
          })
        ) +
        calcAver(
          bookGrades4P.map(br => {
            return +br.value * 0.2;
          })
        )) *
        0.26 +
      calcGrade3070(moduleCHagashaGrade.value, moduleCBagrutGrade.value) *
        0.27 +
      calcGrade3070(cobeHagashaGrade4P.value, cobeBagrutGrade4P.value) * 0.2
  )}`;
});

//3 points
//3 points module A calculator
moduleACalculate.addEventListener('click', function () {
  moduleAFinal.innerText = `Your Final Grade is ${calcGrade3070(
    moduleAHagashaGrade.value,
    moduleABagrutGrade.value
  )}`;
});

//3 points oral bagrut calculator
oralBagrutCalculate.addEventListener('click', function () {
  oralBagrutFinal.innerText = `Your Final Grade is ${calcGrade3070(
    oralHagashaGrade.value,
    oralBagrutGrade.value
  )}`;
});

//3 points module C calculator
moduleCCalculate3P.addEventListener('click', function () {
  moduleCFinal3P.innerText = `Your Final Grade is ${calcGrade3070(
    moduleCHagashaGrade3P.value,
    moduleCBagrutGrade3P.value
  )}`;
});

//3 points module b calculator
moduleBCalculate.addEventListener('click', function () {
  moduleBFinal.innerText = `Your Final Grade is ${
    calcAver(
      literaryPieces3P.map(lp => {
        return +lp.value * 0.5;
      })
    ) +
    calcAver(
      literaryTests3P.map(lt => {
        return +lt.value * 0.3;
      })
    ) +
    calcAver(
      bookGrades3P.map(br => {
        return +br.value * 0.2;
      })
    )
  }`;
});

//final grade display 3 points
finalGradebtn3P.addEventListener('click', function () {
  finalGradebtn3P.classList.add('hide');
  finalGrade3P.classList.add('finalGradeDesign');
  finalGrade3P.innerText = `Your final grade is ${Math.round(
    calcGrade3070(moduleAHagashaGrade.value, moduleABagrutGrade.value) * 0.27 +
      (calcAver(
        literaryPieces3P.map(lp => {
          return +lp.value * 0.5;
        })
      ) +
        calcAver(
          literaryTests3P.map(lt => {
            return +lt.value * 0.3;
          })
        ) +
        calcAver(
          bookGrades3P.map(br => {
            return +br.value * 0.2;
          })
        )) *
        0.26 +
      calcGrade3070(moduleCHagashaGrade3P.value, moduleCBagrutGrade3P.value) *
        0.27 +
      calcGrade3070(oralHagashaGrade.value, oralBagrutGrade.value) * 0.2
  )}`;
});
