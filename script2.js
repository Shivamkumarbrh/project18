let pcl1 = document.querySelector('.photo-container1-left');
let pcl2 = document.querySelector('.photo-container2-left');
let pcl3 = document.querySelector('.photo-container3-left');
let para2 = document.querySelector('.photo-container2-left-box p');
let pclbtn1 = document.getElementById('p-c-l-btn1');
let pclbtn2 = document.getElementById('p-c-l-btn2');
let pclbtn3 = document.getElementById('p-c-l-btn3');
let pcrbtn1 = document.getElementById('p-c-r-btn1');
let pcrbtn2 = document.getElementById('p-c-r-btn2');
let pcrbtn3 = document.getElementById('p-c-r-btn3');
let bg = document.querySelector('.photo-container');
pcl1.onmouseover = function(){
    pcl1.style.backgroundColor = 'black';
    pcl1.style.color ='white';
    pclbtn1.style.background = 'green';  

}
pcl1.onmouseleave = function(){
    pcl1.style.backgroundColor = ' rgba(0, 0, 0, 0.402)';
    pcl1.style.color ='rgba(255, 255, 255, 0.802)'
    pclbtn1.style.background = 'rgba(0, 128, 0, 0.66)';

}
pcl2.onmouseover = function(){
    pcl2.style.backgroundColor = 'black';
    pcl2.style.color ='red';
    para2.style.color = 'white';
    pclbtn2.style.background = 'red';  

}
pcl2.onmouseleave = function(){
    pcl2.style.backgroundColor = ' rgba(0, 0, 0, 0.602)';
    pcl2.style.color ='rgba(255, 0, 0, 0.801)';
    para2.style.color = 'rgba(255, 255, 255, 0.5)';
    pclbtn2.style.background = 'rgba(255, 0, 0, 0.601)';

}
pcl3.onmouseover = function(){
    pclbtn3.style.background = 'blue';  

}
pcl3.onmouseleave = function(){
    pclbtn3.style.background = 'rgba(13, 0, 128, 0.66)';

}
pclbtn1.onmouseenter = function(){
    pclbtn1.style.backgroundColor = '#ddd';
    pclbtn1.style.color = "black"
}
pclbtn2.onmouseenter = function(){
    pclbtn2.style.backgroundColor = '#ddd';
    pclbtn2.style.color = "black"
}
pclbtn3.onmouseenter = function(){
    pclbtn3.style.backgroundColor = '#ddd';
    pclbtn3.style.color = "black"
}
pcrbtn1.onclick = function(){
    bg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg')";
    pcl2.style.display ='none';
    pcl3.style.display ='none';
    pcl1.style.display = 'block'
}
pcrbtn2.onclick = function(){
    bg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg')";
    pcl1.style.display ='none';
    pcl2.style.display ='block';
    pcl3.style.display ='none';
}
pcrbtn3.onclick = function(){
    bg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg')";
    pcl1.style.display ='none';
    pcl2.style.display ='none';
    pcl3.style.display ='block';
}