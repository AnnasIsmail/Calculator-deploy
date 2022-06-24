let currentValue = $("#output").html();
let result = false;
let bilangan1 = false;
let bilangan2 = false;
let operator = false;
let samaDengan = false;

$("span").click(function(e) {
    let identifier = e.target.innerHTML

    if(identifier === "÷"){
        identifier = '/';
    }
    
    if(identifier === "Result"){
        identifier = '=';

        count();
        bilangan1 = false;
        bilangan2 = false;
        operator = false;
        samaDengan = true;
    }

    if(identifier == "AC"){
        $("#output").html(null);
        currentValue = "";

    }else{
        if( identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "+"|| identifier === "1"|| identifier === "2"|| identifier === "3"|| identifier === "4"|| identifier === "5"|| identifier === "6"|| identifier === "7"|| identifier === "8"|| identifier === "9"|| identifier === "0"|| identifier === "." ){

            if(samaDengan === true){
                samaDengan = false;
                result = false;
                currentValue = "";
            }

            if(identifier === "=" || identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "+" ){
                if(operator === false){
                    operator = identifier;
                }else if(bilangan2 === false){
                    operator = identifier;

                }else{
                    count();
                    operator = identifier
                }
            }else{
                if(operator === false){
                    if(bilangan1 === false){
                        bilangan1 = "";
                    }
                    bilangan1 += identifier
                }else{
                    if(bilangan2 === false){
                        bilangan2 = "";
                    }
                    bilangan2 += identifier
                }
            }

            if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('+') === true ){
                if(identifier === "=" || identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "." ||  identifier === "+" ){
                    erase();
                    currentValue = currentValue + identifier
                    $("#output").html(currentValue);
                    changeValue();
                }else{
                    currentValue = currentValue + identifier
                    $("#output").html(currentValue);
                    changeValue();
                }
            }else if($("#output").html() === "" && identifier === "=" || $("#output").html() === "" && identifier === "%" || $("#output").html() === "" && identifier === "/" || $("#output").html() === "" && identifier === "x" || $("#output").html() === "" && identifier === "-" || $("#output").html() === "" && identifier === "+" || $("#output").html() === "" && identifier === "." ){

            }else{
                currentValue = currentValue + identifier
                $("#output").html(currentValue);
                changeValue();
            }
        }
    }
  });
  
  $(document).keypress(function(e) {
      let inputKeyboard = e.key;
      if(isNaN(inputKeyboard) === false || inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "+" ){
          
          if(samaDengan === true){
              samaDengan = false;
              result = false;
              currentValue = "";
              bilangan1 = false;
            }

            if(inputKeyboard === "="){
                count();
                bilangan1 = false;
                bilangan2 = false;
                operator = false;
                samaDengan = true;
            }

        if( inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" ||  inputKeyboard === "+" ){
            if(operator === false){
                operator = inputKeyboard;
            }else if(bilangan2 === false){

            }else{
                count();
                operator = inputKeyboard
            }
        }else{
            if(operator === false){
                if(bilangan1 === false){
                    bilangan1 = "";
                }
                bilangan1 += inputKeyboard
            }else{
                if(bilangan2 === false){
                    bilangan2 = "";
                }
                bilangan2 += inputKeyboard
            }
        }

          if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('.') === true || currentValue.endsWith('+') === true){
            if(inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "." ||  inputKeyboard === "+" ){
                erase();
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }else{
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }
        }else if($("#output").html() === "" && inputKeyboard === "=" || $("#output").html() === "" && inputKeyboard === "%" || $("#output").html() === "" && inputKeyboard === "/" || $("#output").html() === "" && inputKeyboard === "x" || $("#output").html() === "" && inputKeyboard === "-" || $("#output").html() === "" && inputKeyboard === "+" ||  $("#output").html() === "" && inputKeyboard === "." ){

        }else{
            currentValue = currentValue + inputKeyboard
            $("#output").html(currentValue);
            changeValue();
        }
    }
    });
    
    function erase(){
        $("#output").html(currentValue.slice(0, currentValue.length-1));
        currentValue = $("#output").html();
    }
    
    function changeValue(){
      let value = $("#output").html();
      currentValue = value;
    }
    
    function count(){
        if(bilangan1.toString().split('.').length > 1 || bilangan2.toString().split('.').length > 1){

            if(operator === '+'){
                result = parseFloat(bilangan1) + parseFloat(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '-'){
                result = parseFloat(bilangan1) - parseFloat(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '/'){
                result = parseFloat(bilangan1) / parseFloat(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '%'){
                result = parseFloat(bilangan1) % parseFloat(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === 'x'){
                result = parseFloat(bilangan1) * parseFloat(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }

        }else{
            if(operator === '+'){
                result = parseInt(bilangan1) + parseInt(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '-'){
                result = parseInt(bilangan1) - parseInt(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '/'){
                result = parseInt(bilangan1) / parseInt(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === '%'){
                result = parseInt(bilangan1) % parseInt(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }else if(operator === 'x'){
                result = parseInt(bilangan1) * parseInt(bilangan2);
                bilangan1 = result;
                bilangan2 = false;
            }

        }
        showResult();
    }

    function showResult(){
        if(result !== false){
            $("#result").html(result);
        }
    }

    function changeTheme(){
        if(localStorage.theme === undefined){
            localStorage.theme = 'light';
            $("#themeDesc").html('Light Mode');
            $(".background").addClass('background-light');
            $(".primary").addClass('primary-light');
            $(".secondary").addClass('secondary-light');
            $('.ui.compact.menu .item:last-child').addClass('button-anchor-light');
            $('.ui.compact').addClass('container-button-anchor-light');
        }else if(localStorage.theme === 'dark'){
            $('.toggleTheme')[0].checked = true 
            $("#themeDesc").html('Dark Mode');
            $(".background").addClass('background-dark');
            $(".primary").addClass('primary-dark');
            $(".secondary").addClass('secondary-dark');
            $('.ui.compact.menu .item:last-child').addClass('button-anchor-dark');
            $('.ui.compact').addClass('container-button-anchor-dark');
        }else if(localStorage.theme === 'light'){
            $("#themeDesc").html('Light Mode');
            $(".background").addClass('background-light');
            $(".primary").addClass('primary-light');
            $(".secondary").addClass('secondary-light');
            $('.ui.compact.menu .item:last-child').addClass('button-anchor-light');
            $('.ui.compact').addClass('container-button-anchor-light');
        }
    }

$('.toggleTheme').click((e)=>{

   if(localStorage.theme === 'light'){
        localStorage.theme = 'dark';
        e.target.checked = true  

        $("#themeDesc").html('Dark Mode');
        $(".background").removeClass('background-light');
        $(".primary").removeClass('primary-light');
        $(".secondary").removeClass('secondary-light');
        $('.ui.compact.menu .item:last-child').removeClass('button-anchor-light');
        $('.ui.compact').removeClass('container-button-anchor-light');

        $(".background").addClass('background-dark');
        $(".primary").addClass('primary-dark');
        $(".secondary").addClass('secondary-dark');
        $('.ui.compact.menu .item:last-child').addClass('button-anchor-dark');
        $('.ui.compact').addClass('container-button-anchor-dark');
    }else if(localStorage.theme === 'dark'){
        localStorage.theme = 'light';
        e.target.checked = false  

        $(".background").removeClass('background-dark');
        $(".primary").removeClass('primary-dark');
        $(".secondary").removeClass('secondary-dark');
        $('.ui.compact.menu .item:last-child').removeClass('button-anchor-dark');
        $('.ui.compact').removeClass('container-button-anchor-dark');

        $("#themeDesc").html('Light Mode');
        $(".background").addClass('background-light');
        $(".primary").addClass('primary-light');
        $(".secondary").addClass('secondary-light');
        $('.ui.compact.menu .item:last-child').addClass('button-anchor-light');
        $('.ui.compact').addClass('container-button-anchor-light');
    }

    });

    changeTheme();