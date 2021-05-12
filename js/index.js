/*******
 * Bài tập tính tiền cáp
 * 
 * input 
 *  - Mã khách hàng, loại khách hàng
 *  - Hiển thị số kết nối nếu là doanh nghiệp, kênh cao cấp
 *  
 * process:
 *  1. Lấy input
 *  2. Kiểm tra loại khách hàng
 *  2. Tính tiền cáp
 *  3. In kết quả ra màn hình
 * 
 * output: Total
 */

//Hiển thị số kết nối nếu là Doanh nghiệp
function show(){
    document.getElementById("numberNetwork").style.display = "block";
    document.getElementById("numberConnect").style.display = "block";
}    
function hide(){
    document.getElementById("numberNetwork").style.display = "none";
    document.getElementById("numberConnect").style.display = "none";
}    
// Kiểm tra loại khách hàng
function checkUserType(){
    var isNhaDan = document.getElementById("nhaDan").checked;
    var isDoanhNghiep = document.getElementById("doanhNghiep").checked;
    if(isNhaDan === true) return "nhaDan";
    if(isDoanhNghiep === true) return "doanhNghiep";
}
// Main
function calcNetworkCable(){
    var user = document.getElementById("userID").value;
    var userType = checkUserType();
    var countNetwork = +document.getElementById("numberNetwork").value;
    var countPremiumNetwork = +document.getElementById("premiumNetwork").value;
    var tenNetwork;

    if (countNetwork <= 10) {
        tenNetwork = countNetwork * 7.5;
    } else {
        tenNetwork = (countNetwork - 10) * 5 + 75;
    }
    var totalAmount = 0;

    switch (userType){
        case "nhaDan":
            totalAmount = 4.5 + 20.5 + countPremiumNetwork * 7.5 + countNetwork * 0 ;
            document.getElementById("userCode").innerHTML = user;
            document.getElementById("userTypeShow").innerHTML = userType;
            document.getElementById("countNetwork").innerHTML = countNetwork;
            document.getElementById("countPremiumNetwork").innerHTML = countPremiumNetwork;
            document.getElementById("total").innerHTML = totalAmount;
            document.getElementById("message1").style.display = "block";
            document.getElementById("message2").style.display = "none";
            document.getElementById("message3").style.display = "block";
            break;
        case "doanhNghiep":
            totalAmount = 15 + tenNetwork + countPremiumNetwork * 50;
            document.getElementById("userCode").innerHTML = user;
            document.getElementById("userTypeShow").innerHTML = userType;
            document.getElementById("countNetwork").innerHTML = countNetwork;
            document.getElementById("countPremiumNetwork").innerHTML = countPremiumNetwork;
            document.getElementById("total").innerHTML = totalAmount.toLocaleString();
            document.getElementById("message1").style.display = "block";
            document.getElementById("message2").style.display = "block";
            document.getElementById("message3").style.display = "block";
            break;
        default:
            alert("Vui lòng nhập đầy đủ thông tin");
            break;
    }
}



