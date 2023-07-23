

var checkPass = 0;
var checkTK = 0;
function resign() {
    const data = [
        {
            account : "name1",
            pass:"123456"
        },
        {
            account : "name2",
            pass:"123456"
        },
    ];
    var data1 = JSON.stringify(data)
    window.localStorage.setItem('user',data1)
    var username = window.localStorage.getItem('user')
    var listAccount = JSON.parse(username)
    checkTK =  0
    if(document.getElementById("saveAccount").value == "" || document.getElementById("savePass").value == ""|| document.getElementById("againPass").value == "" ){
        alert("Bạn Cần Nhập Đầy Đủ Thông Tin");
        return;
       }
       if(document.getElementById("savePass").value != document.getElementById("againPass").value )   {
       alert("Mật Khẩu Không Khớp");
       return;
       }
       for(var i=0 ;i<listAccount.length;i++){
        if(document.getElementById("saveAccount").value == listAccount[i].account ){
 checkTK = 1;
}
}
if(checkTK == 0){
   listAccount.push({account:document.getElementById("saveAccount").value,pass:document.getElementById("savePass").value})
   var json = JSON.stringify(listAccount)
   window.localStorage.setItem('user',json)
   alert("Đăng Ký Tài Khoản Thành Công")
}
   else{
    alert("Tài Khoản Đã Tồn Tại")
    return;
   }

}
   function login() {
    var username = window.localStorage.getItem('user')
    var listAccount = JSON.parse(username)
   checkPass =0;
    for(var i=0 ;i<listAccount.length;i++){

        if(document.getElementById("account").value == listAccount[i].account && document.getElementById("pass").value == listAccount[i].pass ){
 checkPass = 1;
}
}
   if(checkPass == 1){
    window.open("http://127.0.0.1:5501/danhsachsanpham.html")
    console.log(1)
   }
   else{
    alert("Sai Tên Đăng Nhập Hoặc Mật Khẩu")
    console.log(2)
}

    }



    