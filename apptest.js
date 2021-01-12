//global variables
let counter = 0;
let redflagsarr = [];
// Result variables
let sub_abuse = 0;
let sub_abuse_risk = false;
let mind = 0;
let mind_risk = false;
let family = 0;
let fam_risk = false;
let friends = 0;
let fri_risk = false;
let education = 0;
let edu_risk = false;
let labour = 0;
let labour_risk = false;
let aggr = 0;
let agg_risk = false
let red_flags = 0;
let redFlagsRisk = false;
/*variables for data storage
let sub_abuse = localStorage.getItem("sub_abuse");
let mind = localStorage.getItem("mind");
let family = localStorage.getItem("family");
let friends = localStorage.getItem("friends");
let education = localStorage.getItem("education");
let labour = localStorage.getItem("labour");
let aggr = localStorage.getItem("aggr");
let red_flags = localStorage.getItem("redflag");*/

//Control all functions
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded, wainting functions to execute.");
    init_test();
});
//Initial render for test interface
function init_test() {
    document.getElementById('question_card').style.display = 'none';
    document.getElementById('js-progressbar').style.display = 'none';
    document.getElementById('finish').style.display = 'none';
};

function capture_one() {
    //capture all input data
    let names = document.getElementById('iname').value;
    let procedencia = document.getElementById('iprepa').value;
    let ubicacion = document.getElementById('iubi').value;
    let folio = document.getElementById('ifol').value;
    let edad = document.getElementById('iedad').value;
    let genero = document.getElementById('igen').value;
    // convert to JSON and store in localstorage
    let personal_data = {
        'name': names, 
        'proc': procedencia, 
        'ubicacion': ubicacion, 
        'folio': folio, 
        'edad': edad, 
        'genero': genero};
    let personal_data_json = JSON.stringify(personal_data);
    //check if session storage for data JSON if empty
    let personal_json = sessionStorage.getItem('personal_data');
    if (personal_json != '' || personal_json != none || personal_json != undefined) {
        sessionStorage.setItem("personal_data", personal_data_json);
        console.log(sessionStorage.getItem("personal_data"));
        display_test();
        
    }
    else {
        localStorage.clear();
        sessionStorage.setItem("personal_data", personal_data_json);
        console.log(sessionStorage.getItem("personal_data"));
        display_test();
    }
};

function display_test() {
    document.getElementById('question_card').style.display = 'block';
    document.getElementById('js-progressbar').style.display = 'block';
    document.getElementById('datos_encuestado').style.display = 'none';
};

function next_question() {
    counter++;
    console.log(counter);
    let progressbar_val = counter * 1.25;
    let proginterface = document.getElementById('js-progressbar');
    proginterface.value = progressbar_val;
    proginterface.innerText = progressbar_val;
    let number = counter;
    question_db(number);
    //Stop counter and display send data
    if (counter === 81) {
        document.getElementById('finish').style.display = 'initial';
        document.getElementById('question_card').style.display = 'none';
    };
};

function question_db(number) {
    //fetch data API
    fetch('https://jalexmelendez.github.io/apitamizaje/api.json', {method:'GET'})
    .then(function(response) { 
        return response.json();
    })
    .then(response => {
    //get question
    let my_question = response.data[number].C;
    let alpha_function = response.data[number].A;
    let beta_function = response.data[number].B;
    //change placeholder
    const change_placeholder = document.getElementById('question');
    change_placeholder.innerText = my_question;
    //Dynamic functions
    const function_trigger_yes = document.getElementById('dynamic_fx');
    const function_trigger_no = document.getElementById('dynamic_fy');
    function_trigger_yes.setAttribute("onclick", alpha_function);
    function_trigger_no.setAttribute("onclick", beta_function);
    });
};
//
//START OF DATA PROC FUNCTIONS //
//

//uso-abuso sub
function substanceab(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            sub_abuse++;
        }
        else {
        next_question();
        sub_abuse++;
        }
    }
    else {
    next_question();
    }
};
//salud mental
function min(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            mind++;
        }
        else {
        next_question();
        mind++;
        }
    }
    else {
    next_question();
    }
};
//relaciones familiares
function fam(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            family++;
        }
        else {
        next_question();
        family++;
        }
    }
    else {
    next_question();
    }
};
//relacones con amigos
function fri(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            friends++;
        }
        else {
        next_question();
        friends++;
        }
    }
    else {
    next_question();
    }
};
//nivel educativo
function edu(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            education++;
        }
        else {
        next_question();
        education++;
        }
    }
    else {
    next_question();
    }
};
//interes laboral
function lab(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            labour++;
        }
        else {
        next_question();
        labour++;
        }
    }
    else {
    next_question();
    }
};
//conducta agresiva/delictiva
function agg(point, flag) {
    if (point == 1) {
        if (flag == true) {
            next_question();
            var redflag_num = counter;
            var arr_item = { "q":redflag_num };
            redflagsarr.push(arr_item);
            /*let fetch_aggr = localStorage.getItem('aggr');*/
            aggr++;
        }
        else {
        next_question();
        aggr++;
        }
    }
    else {
    next_question();
    }
};

//
//END OF DATA PROC FUNCTIONS //
//

function send_data() {
    let newRedflags = [];
    if (redflagsarr.length != 0) {
        for (i=0; i<redflagsarr.length; i++) {
            newRedflags.push(redflagsarr[i]['q']);
        }
        redflagsarr.splice(0, redflagsarr.length);
        redflagsarr = newRedflags;
    }
    processData();
}

function processData() {
    if (sub_abuse > 0) {
        sub_abuse_risk = true;
    }
    if (mind > 4 || redflagsarr.includes(6) == true || redflagsarr.includes(28) == true || redflagsarr.includes(55) == true || redflagsarr.includes(75) == true || redflagsarr.includes(76) == true) {
        mind_risk = true;
    }
    if (family > 2 || redflagsarr.includes(20) || redflagsarr.includes(45) || redflagsarr.includes(52)) {
        fam_risk = true;
    }
    if (friends > 0) {
        fri_risk = true;
    }
    if (education > 4 || redflagsarr.includes(26) || redflagsarr.includes(42) || redflagsarr.includes(66) || redflagsarr.includes(69) || redflagsarr.includes(72) || redflagsarr.includes(80)) {
        edu_risk = true;
    }
    if (labour > 2) {
        labour_risk = true;
    }
    if (aggr > 4 || redflagsarr.includes(24) || redflagsarr.includes(50)) {
        agg_risk = true;
    }
    if (redflagsarr.length > 33) {
        redFlagsRisk = true;
    }
    red_flags = redflagsarr.length;
    results();
}

