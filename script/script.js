var new_element;
var html;
var html_body;
var list_items;
var delete_buttons;

function create_element(element_name){

    new_element = document.createElement(element_name);
    return new_element;
}


function attach_element(element_parent,element_name){
    
    document.getElementsByTagName(element_parent)[0].appendChild(element_name);

}


function create_and_attach_element(element_parent,element_name){
    
    document.getElementsByTagName(
        element_parent)[0].appendChild(
            document.createElement(element_name)
    );
}

function remove_item(element_name){    
    element_name.remove();
}

function update_delete_buttons(){
    delete_buttons = document.getElementsByClassName('delete_button');
    return delete_buttons;
}

function attach_delete_button_listeners(){
    for(var i=0; i<delete_buttons.length; i++){
        delete_buttons[i].addEventListener('dblclick',function(){
            remove_item(this.parentNode);
        });
    };
};


function update_list_items(){
    list_items = document.getElementsByTagName('li');
    return list_items;
}

function attach_list_item_listeners(){
    for(var i=0; i<list_items.length; i++){
        list_items[i].addEventListener('dblclick',function(){
            this.innerText = prompt();
        });
    };
};


document.addEventListener('DOMContentLoaded',function(){

    html = document.getElementsByTagName('html');
    html = html[0];
    
    html_body = document.getElementsByTagName('body');
    html_body = html_body[0];
    
    update_delete_buttons();
    attach_delete_button_listeners();
    
    update_list_items();
    attach_list_item_listeners();
    
});