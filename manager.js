window.onload=()=>{
    data={};
    ajax(data,"get",function(status){$("#content").html(status.info);},"http://localhost:7500/visit");
}

function send(){
    data={};
    data.content = document.querySelector("#new").value;
    data.password = document.querySelector("#password").value;
    ajax(data,"post",function(status){ajax(data,"get",function(status){$("#content").html(status.info);},"http://localhost:7500/visit");},"http://localhost:7500/post");
}

function ajax(data,method,success,url){
    let ajaxoption={};
    ajaxoption["url"] = url;
    ajaxoption["dataType"]="json";
    ajaxoption["type"] = method;
    ajaxoption["data"] = data;
    let x = $.ajax(ajaxoption);
    x.done(success);
    x.fail(function(status){console.log(status);alert("Error,please check the console.")});
    x.always(function(status){});
}