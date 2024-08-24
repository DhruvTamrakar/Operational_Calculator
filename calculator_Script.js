const result = document.getElementById("result");

    function display(num) {
      result.value += num;
    }
    function clearscreen() {
      result.value = "";
    }
    function calculate() {
      try{
        result.value = eval(result.value);
    } catch(error) {
      result.value = "ERROR"
    }
  }