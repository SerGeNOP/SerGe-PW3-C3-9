const input_city = document.querySelector('.my_city');
const message_city = document.querySelector('.message-city');
const reset_link = document.querySelector('.reset-link');
const agree_btn = document.querySelector('.my-agree');

// чекбоксы
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');
const a6 = document.querySelector('#a6');


// устанавливает "галочки" на чекбоксы и делает их неизменяемыми
function set_chk_boxes(obj) {
    obj.setAttribute("checked", "");
}

// вводим новый город и сохраняем в куки
input_city.oninput = () => {
    localStorage.setItem('area', input_city.value)
};

// сбрасываем введенный ранее город, очищаем куки, возвращаем поле ввода
reset_link.onclick = () =>{
    localStorage.removeItem('area');
    input_city.value = input_city.placeholder;
    input_city.classList.remove("hidden-field");
    message_city.innerHTML ='';
};

// по нажатию кнопки "Сохранить" пишем состояния в куки
agree_btn.onclick = () =>{
    localStorage.setItem('a1', a1.checked);
    localStorage.setItem('a2', a2.checked);
    localStorage.setItem('a3', a3.checked);
    localStorage.setItem('a4', a4.checked);
    localStorage.setItem('a5', a5.checked);
    localStorage.setItem('a6', a6.checked);
    localStorage.setItem('changed', 'true');
};

document.addEventListener("DOMContentLoaded", function() {
    let _city = localStorage.getItem('area');
    if (_city) {
        input_city.classList.add("hidden-field");
        message_city.innerHTML = `Ваш город: ${_city}`;
    }
    if (localStorage.getItem('changed') === 'true') {
        if (localStorage.getItem('a1') === 'true') { set_chk_boxes(a1); }
        if (localStorage.getItem('a2') === 'true') { set_chk_boxes(a2); }
        if (localStorage.getItem('a3') === 'true') { set_chk_boxes(a3); }
        if (localStorage.getItem('a4') === 'true') { set_chk_boxes(a4); }
        if (localStorage.getItem('a5') === 'true') { set_chk_boxes(a5); }
        if (localStorage.getItem('a6') === 'true') { set_chk_boxes(a6); }
        agree_btn.setAttribute("disabled", "");
        a1.setAttribute("disabled", "");
        a2.setAttribute("disabled", "");
        a3.setAttribute("disabled", "");
        a4.setAttribute("disabled", "");
        a5.setAttribute("disabled", "");
        a6.setAttribute("disabled", "");

    }
});
