window.onload=()=>{
    ajax();
}

function ajax(){
    let ajaxoption={};
    ajaxoption["url"] = "http://localhost:7500/visit";
    ajaxoption["dataType"]="json";
    ajaxoption["type"] = "get";
    ajaxoption["data"] = {};
    let x = $.ajax(ajaxoption);
    x.done(function(status){$("#content").html(status.info);});
    x.fail(function(status){console.log(status);});
    x.always(function(status){});
}