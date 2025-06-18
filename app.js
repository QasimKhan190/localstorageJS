function f() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('fn').value;
    let c = document.getElementById('mn').value;
    let d = document.getElementById('pass').value;

    let obj = {
        names: a,
        fathername: b,
        mobilenumber: c,
        password: d
    };

    localStorage.setItem("formData", JSON.stringify(obj));
    console.log("Data saved in localStorage:", obj);
}





function g() {
    
    const savedData = localStorage.getItem("formData");
    
    const parsedData = JSON.parse(savedData);

    console.log("Saved data from localStorage:", parsedData);
}
