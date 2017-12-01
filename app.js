'use strict'; /* global $ */

const state = {
    line:null,
    buttons:['elephant', 'horse', 'ass', 'drunken monkey']

}

const post = data => {
    
} 

$(function() {
    $('#boxes-container').on('click', '.boxes', function() {
        console.log('i work here too on line 15')
    })
    $('p').click( () =>alert('Iwork'));
    $('#form').submit((e) => {
        e.preventDefault();
        console.log('i work', $('.input1').val());
        // state.line = $('.input1').val();
        let obj = {test:`${$('.input1').val()}`}
        $.post('/test/I_Love_me',obj, res => console.log(res) )
        $('.input1').val('') ; 
    })
    $('.get-state').click(() => {
        $.get('/test/get', (res) => {
            return Object.assign(state, res,{new:res} )
        })
        let buttons;
        buttons = state.buttons.map((button,index) => {
            return `<li id=${index} value=${button}> ${button} </li>`
        })
        $('.buttons').html(buttons)

    })
    $('ul').on('click', 'li', function(){
        console.log( $(this).text());
    });

    $('.boxes').on('click', function(){
        console.log('i work')
    })
});

let box = ['cardboard', 'wood', 'steel', 'gold']

setTimeout(function(){

    for ( let i = 0; i < box.length; i++) {
        $('#boxes-container').append(
            `<button class='boxes ${box[i]}'>${box[i]}</button>`
        )
    }

}, 5000)
