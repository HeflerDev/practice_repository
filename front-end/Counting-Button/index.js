var myButton = document.getElementById('btn');
var counter = 0 ;

myButton.onclick = () => {
    counter++;
    myButton.innerHTML = counter ;
};
