var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello World!';

// 切换图片
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg'){
        myImage.setAttribute('src', 'images/test2.jpg');
    }else{
        myImage.setAttribute('src', 'images/test.jpg');
    }
}

// 抓取按钮
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "加油！" + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "加油！" + storedName;
}

myButton.onclick = function(){
    setUserName();
}