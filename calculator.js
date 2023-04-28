function clearvalues() {
    document.getElementById("result").value = " ";
  }
function calculatevalues(){
      var calculatedresult = document.getElementById("result").value;
      document.getElementById("result").value= eval(calculatedresult);
  }