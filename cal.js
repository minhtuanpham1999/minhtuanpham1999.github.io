function f(d) {

    // kiểm tra chuỗi c có = tham số d ? và lấy tới phần tử ID 'res'
    if (d == 'c') {
    document.getElementById('res').value = "";
    return;
    }
    // gán phần tử nhập vào cho biến res
    res = document.getElementById('res').value;

  
    if (res == 0 && d == 0)
    return;

    // kiểm tra d có phải là 1 trong 4 toán tử và gán cho biến orp
    if (d == '+' || d == '-' || d == '*' || d == '/') {
    opr = d;

    // đổi về kiểu số thực cho biến res và gán vào num
    num = parseFloat(res);
    document.getElementById('res').value = d;
    return;
    }
    if (d == '=') {
    num1 = parseFloat(res);
    switch (opr) {
    // gán vào các toán tử tương ứng vào ans
    case '+': ans = num + num1; break;
    case '-': ans = num - num1; break;
    case '*': ans = num * num1; break;
    case '/': ans = parseInt(num / num1); break;
    }
    // gán ans vào phần tử res và nhập vào giá trị 
    document.getElementById('res').value = ans;
    return;
    }

    // kiểm tra nếu đối số d = --1 thì giá trị nhập vào value = value * -1 
    if (d == '--') {
    document.getElementById('res').value *= -1;
    return;
    }
    // kiểm tra nếu giá trị truyền vao ko phải là 1 số hợp lệ thì thực hiện phép tính value+=d 
    if (!isNaN(document.getElementById('res').value))
    document.getElementById('res').value += d;

    //ngược lại nếu hợp lệ thì trả về phần tử có thuộc tính ID 'res'
    else
    document.getElementById('res').value = d;
   }