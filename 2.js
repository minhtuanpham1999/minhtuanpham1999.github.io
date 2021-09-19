function findLMV() {
    // lấy thông tin phần tử id t1 và gán vào biến str
    var str = document.getElementById('t1').value

    // kiểm tra chuỗi nhập vào và trả về các ký tự trong chuỗi được lập chỉ mục từ trái qua phải
    for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
    || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
    return ("Left most vowel of " + str + " is at location " + (i + 1));
    }
    // trả về "No vowels found for string " nếu nhập không đúng chuỗi 
    return ("No vowels found for string " + str);
   }
   function reverse(num) {
    rnum = 0;
    temp = num;

    // Kiểm tra điều kiện truyền vào có phải một số hợp lệ hay không
    if (isNaN(num)) {
    return "invalid number";
    }
    // cho điểu kiện để thực thi là số nhập vào khác 0 
    while (num != 0) {

    // ban đầu biến rnum = 0, vì rnum = 0*10 = 0
    rnum *= 10;
    
    // kiểm tra, đảo ngược trả về rnum 
    rnum += num % 10;
    num -= num % 10;
    num = Math.floor(num / 10);
    }
    return "Reverse of num " + temp + " is " + rnum;
   }