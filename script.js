'use strict';

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

//3-pointers next buttons
const threePointers = document.getElementById('three-pointers');
const editBtns3 = Array.from(threePointers.getElementsByClassName('edit'));
const nextBtns3 = Array.from(threePointers.getElementsByClassName('next'));
const circles3 = threePointers.querySelectorAll('.circle');
const nextBtnA = document.getElementById('btn-next-A');
const editBtnA = document.getElementById('btn-edit-A');
const nextBtnOB = document.getElementById('btn-next-OB');
const editBtnOB = document.getElementById('btn-edit-OB');
const nextBtnC3 = document.getElementById('btn-next-C3');
const editBtnC3 = document.getElementById('btn-edit-C3');
const nextBtnB = document.getElementById('btn-next-B');
const editBtnB = document.getElementById('btn-edit-B');
const formA = document.getElementById('formA');
const moduleA = document.getElementById('module-a');

//4-pointers next buttons
const fourPointers = document.getElementById('four-pointers');
const editBtns4 = Array.from(fourPointers.getElementsByClassName('edit'));
const nextBtns4 = Array.from(fourPointers.getElementsByClassName('next'));
const nextBtnC4 = document.getElementById('btn-next-C4');
const editBtnC4 = document.getElementById('btn-edit-C4');
const nextBtnCOBE4 = document.getElementById('btn-next-COBE4');
const editBtnCOBE4 = document.getElementById('btn-edit-COBE4');
const nextBtnE4 = document.getElementById('btn-next-E4');
const editBtnE3 = document.getElementById('btn-edit-E4');
const nextBtnD = document.getElementById('btn-next-D');
const editBtnD = document.getElementById('btn-edit-D');
const circles4 = fourPointers.querySelectorAll('.circle');

//5-pointers next buttons
const fivePointers = document.getElementById('five-pointers');
const editBtns5 = Array.from(fivePointers.getElementsByClassName('edit'));
const nextBtns5 = Array.from(fivePointers.getElementsByClassName('next'));
const nextBtnE5 = document.getElementById('btn-next-E5');
const editBtnE5 = document.getElementById('btn-edit-E5');
const nextBtnCOBE5 = document.getElementById('btn-next-COBE5');
const editBtnCOBE5 = document.getElementById('btn-edit-COBE5');
const nextBtnG = document.getElementById('btn-next-G');
const editBtnG = document.getElementById('btn-edit-G');
const nextBtnF = document.getElementById('btn-next-F');
const editBtnF = document.getElementById('btn-edit-F');
const circles5 = fivePointers.querySelectorAll('.circle');

let currentActive = 1;

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
  el.classList.remove('hide');
}
//To show the next step B
function removeDisplayClass(el) {
  el.classList.remove('step2');
}

let start = 360;
//To add event listener to the next button inside the grade box - 3 pointers
for (let i = 0; i < nextBtns3.length; i++) {
  nextBtns3[i].addEventListener('click', function () {
    currentActive++;
    if (currentActive > nextBtns3.length) {
      currentActive = nextBtns3.length;
      doneBtn3P.classList.remove('hide');
    }
    update3();
    start = start - 90;
    progress.style.background = `conic-gradient(#bdbdbd ${start}deg, #9c27b0 ${start}deg)`;
    gradeBoxes[i].classList.remove('active'); //to close the gradebox
  });
}

// //To add event listener to the edit button inside the grade box
// for (let i = 0; i < editBtns3.length; i++) {
//   editBtns3[i].addEventListener('click', function () {
//     currentActive--;
//     if (currentActive < 0) {
//       currentActive = 0;
//     }
//     reloadForm();
//   });
// }

// //Add active class to the circles to make them purple
// function reloadForm() {
//   circles3.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       gradeBoxes[i].classList.add('active');
//       formA.reset();
//     } else {
//       gradeBoxes[i].classList.remove('active');
//     }
//   });
// }
// // }

//Add active class to the circles to make them purple
function update3() {
  circles3.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active-circle');
    } else {
      circle.classList.remove('active-circle');
    }
  });
}

start = 360;
//To add event listener to the next button inside the grade box - 4 pointers
for (let i = 0; i < nextBtns4.length; i++) {
  nextBtns4[i].addEventListener('click', function () {
    currentActive++;
    if (currentActive > nextBtns4.length) {
      currentActive = nextBtns4.length;
      doneBtn4P.classList.remove('hide');
    }
    update4();
    start = start - 90;
    progress.style.background = `conic-gradient(#bdbdbd ${start}deg, #9c27b0 ${start}deg)`;
    for (let i = 0; i < gradeBoxes.length; i++) {
      gradeBoxes[i].classList.remove('active');
    }
  });
}

//To add event listener to the prev button inside the grade box
for (let i = 0; i < editBtns4.length; i++) {}

function update4() {
  circles4.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active-circle');
    } else {
      circle.classList.remove('active-circle');
    }
  });
}
start = 360;
//To add event listener to the next button inside the grade box - 5 pointers
for (let i = 0; i < nextBtns5.length; i++) {
  nextBtns5[i].addEventListener('click', function () {
    currentActive++;
    if (currentActive > nextBtns5.length) {
      currentActive = nextBtns5.length;
      doneBtn5P.classList.remove('hide');
    }
    update5();
    start = start - 90;
    progress.style.background = `conic-gradient(#bdbdbd ${start}deg, #9c27b0 ${start}deg)`;
    for (let i = 0; i < gradeBoxes.length; i++) {
      gradeBoxes[i].classList.remove('active');
    }
  });
}

//To add event listener to the prev button inside the grade box
for (let i = 0; i < editBtns5.length; i++) {}

function update5() {
  circles5.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active-circle');
    } else {
      circle.classList.remove('active-circle');
    }
  });
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

//When the user clicks on the circle, open the grade-box
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

//When the user clicks on <span> (x) close the grade-box
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

/// Adding Step Progress Bar

//5 Points

//5 points module E calculator
moduleECalculate.addEventListener('click', function () {
  moduleEFinal.innerText = `Your Module E Grade is ${calcGrade3070(
    moduleEHagashaGrade.value,
    moduleEBagrutGrade.value
  )}`;
  removeHideClass(nextBtnE5);
});

//5 points cobe calculator
cobeCalculate.addEventListener('click', function () {
  cobeFinal.innerText = `Your COBE Grade is ${calcGrade3070(
    cobeHagashaGrade.value,
    cobeBagrutGrade.value
  )}`;
  removeHideClass(nextBtnCOBE5);
});
//5 points module G calculator
moduleGCalculate.addEventListener('click', function () {
  moduleGFinal.innerText = `Your Module G Grade is ${calcGrade3070(
    moduleGHagashaGrade.value,
    moduleGBagrutGrade.value
  )}`;
  removeHideClass(nextBtnG);
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
  moduleFFinal.innerText = `Your Module F Grade is ${
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
  removeHideClass(nextBtnF);
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
  moduleEFinal4P.innerText = `Your Module E Grade is ${calcGrade3070(
    moduleEHagashaGrade4P.value,
    moduleEBagrutGrade4P.value
  )}`;
  removeHideClass(nextBtnE4);
});

//4 points cobe calculator
cobeCalculate4P.addEventListener('click', function () {
  cobeFinal4P.innerText = `Your COBE Grade is ${calcGrade3070(
    cobeHagashaGrade4P.value,
    cobeBagrutGrade4P.value
  )}`;
  removeHideClass(nextBtnCOBE4);
});

//4 points module C calculator
moduleCCalculate.addEventListener('click', function () {
  moduleCFinal.innerText = `Your Module C Grade is ${calcGrade3070(
    moduleCHagashaGrade.value,
    moduleCBagrutGrade.value
  )}`;
  removeHideClass(nextBtnC4);
});

//4 points module d calculator
moduleDCalculate.addEventListener('click', function () {
  moduleDFinal.innerText = `Your Module D Grade is ${
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
  removeHideClass(nextBtnD);
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
  moduleAFinal.innerText = `Your Module A Grade is ${calcGrade3070(
    moduleAHagashaGrade.value,
    moduleABagrutGrade.value
  )}`;
  removeHideClass(nextBtnA);
});

//3 points oral bagrut calculator
oralBagrutCalculate.addEventListener('click', function () {
  oralBagrutFinal.innerText = `Your Oral Bagrut Grade is ${calcGrade3070(
    oralHagashaGrade.value,
    oralBagrutGrade.value
  )}`;
  removeHideClass(nextBtnOB);
});

//3 points module C calculator
moduleCCalculate3P.addEventListener('click', function () {
  moduleCFinal3P.innerText = `Your Module C Grade is ${calcGrade3070(
    moduleCHagashaGrade3P.value,
    moduleCBagrutGrade3P.value
  )}`;
  removeHideClass(nextBtnC3);
});

//3 points module b calculator
moduleBCalculate.addEventListener('click', function () {
  moduleBFinal.innerText = `Your Module B Grade is ${
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
  removeHideClass(nextBtnB);
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
