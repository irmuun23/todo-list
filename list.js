const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const outputbox = document.getElementById("outputbox")

function add() {
  const output = document.createElement("div")
  output.id = "output"
  const todo = document.createElement("div");
  todo.id = "todo";
  const value = input.value;
  todo.innerHTML = value;
  outputbox.appendChild(output)
  output.appendChild(todo);
  
  const buttons = document.createElement("div");
  output.appendChild(buttons);
  
  const dltbtn = document.createElement("button");
  dltbtn.innerHTML = "delete";
  dltbtn.className = "buttons";
  buttons.appendChild(dltbtn);
  function deletebtn() {
    outputbox.removeChild(output);
    outputbox.removeChild(time)
  }
  
  dltbtn.addEventListener("click", function () {
    deletebtn();
  });
  output.appendChild(buttons)
  
  const edtbtn = document.createElement("button");
  edtbtn.innerHTML = "edit";
  edtbtn.className = "buttons";
  buttons.appendChild(edtbtn);
  
  function editbtn() {
    const edtinput = document.createElement("input");
    buttons.appendChild(edtinput);
    const ok = document.createElement("button");
    ok.innerHTML = "ok";
    buttons.appendChild(ok);
    function okbtn() {
      const value = edtinput.value;
      todo.innerHTML = value;
      output.appendChild(buttons);
      buttons.removeChild(edtinput);
      buttons.removeChild(ok);
    }
    ok.addEventListener("click", function () {
      okbtn();
    });
  }
  
  edtbtn.addEventListener("click", function () {
    editbtn();
  });
  
  const dnbtn = document.createElement("button");
  dnbtn.innerHTML = "done";
  dnbtn.className = "buttons";
  buttons.appendChild(dnbtn);
  
  function donebtn() {
    buttons.removeChild(dnbtn);
    buttons.removeChild(dltbtn);
    buttons.removeChild(edtbtn);
    output.style.backgroundColor = "white";
  }
  
  dnbtn.addEventListener("click", function () {
    donebtn();
  });
  
  const time = document.createElement("div")
  outputbox.appendChild(time)

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const formattedTime = formatter.format(date);
  console.log(formattedTime);
  time.innerHTML = formattedTime
}
addBtn.addEventListener("click", function () {
  add();
});
