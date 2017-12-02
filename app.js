'use strict'; /* global $ */

const state = {
    line:null,
    buttons:['elephant', 'horse', 'ass', 'drunken monkey']

}


$(function() {
    $('#boxes-container').on('click', '.boxes', function() {
        let boxType = $(this).attr('data-box-type')
        console.log(boxType)
        
    })
    $('p').click( () =>alert('Iwork'));
    $('#form').submit((e) => {
        e.preventDefault();
        let input = $('.input1').val()
        console.log('i work', input);
        // state.line = $('.input1').val();
        state.buttons.push(input)
        let obj = {test:[`${input}`]}
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

    
});

let box = ['cardboard', 'wood', 'steel', 'gold']

setTimeout(function(){

    for ( let i = 0; i < box.length; i++) {
        $('#boxes-container').append(
            `<button class='boxes ${box[i]}' data-box-type=${box[i]}>${box[i]}</button>`
        )
    }

}, 5000)
