//changing atributes in js

document.getElementById("android").addEventListener("click", showAndroid);
function showAndroid(){
    document.getElementById("logo").src = "images/Android-Logo.jpg";
    document.getElementById("explore").innerHTML = "Android Home";
    document.getElementById("homePage").href = "https://android.com";
    document.getElementById("explore").style.backgroundColor = "#a4c93b";
    document.getElementById("body").style.backgroundColor = "#a4c03b";
    //font family
    document.getElementById("android").classList.add("active");
    document.getElementById("apple").classList.remove("active");
}

document.getElementById("apple").addEventListener("click", showApple);

function showApple(){
    document.getElementById("logo").src = "images/Apple-logo.jpg"
    document.getElementById("explore").innerHTML = "Apple Home";
    document.getElementById("homePage").href = "https://www.apple.com/ca/store?cid=aos-ca-kwgo-brand";
    document.getElementById("explore").style.backgroundColor = "#b6bcca";
    document.getElementById("body").style.background = "#b6bcca";
    //font family
    document.getElementById("apple").classList.add("active");
    document.getElementById("android").classList.remove("active");
}