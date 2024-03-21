

const buttonFunction = () => {
    function buttonBaby() {
        let btn = document.querySelector('.submit');
        btn.addEventListener("click", function() {
           alert("hey");
        });
    }
    buttonBaby();
};

document.addEventListener('DOMContentLoaded', function() {
    buttonFunction();
});

export default buttonFunction;