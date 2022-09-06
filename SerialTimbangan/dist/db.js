var _this = this;
this.sendButton = document.getElementById('send-button');
//
this.sendButton.forEach(function () {
    if (berat == "") {
        console.log = "Pengiriman batal";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","send.php?berat="+berat,true);
        xmlhttp.send();
        console.log = "Pengiriman batal berhasil dengan nilai :" + berat;
      }
});