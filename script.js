let box = document.body.querySelectorAll(".box");

// let box1=document.body.querySelector(".box1")
// let box2=document.body.querySelector(".box2")

// for (let i = 0; i < box.length; i++) {

//   box[i].textContent="Hello"

// }

// for (const key in box) {
//     const element = box[key]
//     element.textContent="Hello"
// }

let reset_Game = document.body.querySelector(".Reset_Game");
reset_Game.addEventListener("click", (params) => {
  disableButtons();
  msg.textContent = "";


}

)

function disableButtons() {
  for (const iterator of box) {
    iterator.textContent = "";
    iterator.disabled = false;
  }

}


let new_game = document.body.querySelector(".New_Game");
new_game.addEventListener("click", (params) => {
  disableButtons()

  hi.classList.add("hide");
  reset_Game.classList.remove("hide");

}
)


let arr = [[0, 1, 2], [4, 5, 3], [7, 8, 6], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

let hi = document.body.querySelector(".hide");
let msg= document.body.querySelector(".message");

function check(item) {


  let var1 = box[item[0]].textContent;
  let var2 = box[item[1]].textContent;
  let var3 = box[item[2]].textContent;


  if ((var1 === var2 && var2 === var3) && (var1 != "")) {

    hi.classList.remove("hide");
    msg.insertAdjacentText("afterbegin", `${var1} wala bandaa jeet gya bhai...!!🙌🙌`);
    reset_Game.classList.add("hide");
    for (const iterator of box) {
      iterator.disabled = true;

    }

    return true;
  }

  return false;

}

function CheckWinner(arr) {
  for (const item of arr) {
    check(item);


  }
};

let flag = true,
  cont;
for (const iterator of box) {
  iterator.addEventListener("click", (e) => {
    if (flag) {
      // iterator.style.Color="red"
      iterator.textContent = "X";
      // iterator.style.backgroundColorColor="red"
      flag = false;
      ;
    } else {
      iterator.textContent = "O";
      flag = true;
    }

    CheckWinner(arr);

    iterator.disabled = true;
  });
};








