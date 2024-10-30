import "./style/style.scss";
const hamIcon = document.querySelector('.ham');
const hamMenu = document.querySelector('.hamMenu');
const body = document.getElementById('body');

hamIcon.addEventListener('click', () => {
    hamMenu.classList.toggle('visible');
    body.classList.toggle('hamActive');
    hamIcon.classList.toggle('active')
})


window.onload=function()
{
    var Cookie = new Object();
    
    Cookie.set = function(name, value, expires, path, domain, secure)
    {
        document.cookie = name + "=" + escape(value) +
        (expires 
         ? "; expires=" + expires 
         : "") + ( path ? "; path=" + path : "" ) +
            (domain ? "; domain=" + domain : "") +
            (secure ? "; secure" : "");
    }
    
    Cookie.get = function(name)
    {
        var prefix = name + "=";
        var cookieStartIndex = document.cookie.indexOf(prefix);
        if (cookieStartIndex == -1)
            return null;
        var cookieEndIndex = document.cookie.indexOf(
            ";", cookieStartIndex + prefix.length
        );
        if (cookieEndIndex == -1)
            cookieEndIndex = document.cookie.length;
        return unescape(document.cookie.substring(
            cookieStartIndex + prefix.length, cookieEndIndex
        ));
    }
    
    Cookie.del = function(name, path, domain)
    {
        if (getCookie(name))
            document.cookie = name + "=" +
                ( path ? "; path=" + path : "" ) +
                ( domain ? "; domain=" + domain : "" ) +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
    
    
    if(Cookie.get("proverka") == null)
    {
        document.getElementById("dialog").style.display="block"        
        document.getElementById("dialog").style.backgroundColor = "rgba(255, 255, 240)"
        document.getElementById("dialog").style.position = "fixed";
        document.getElementById("dialog").style.top = 100 + "px";
        document.getElementById("dialog").style.left = 15 + "%";
        document.getElementById("dialog").style.width = 65 + "%";
        document.getElementById("dialog").style.textAlign = "center";        
        document.getElementById("dialog").style.padding = 15 + "px";
        document.querySelector(".ham").style.opacity = 0;
        document.getElementById("dialog").style.padding = 15 + "px";
    }
    document.getElementById("yes").onclick=function()
    {
        Cookie.set("proverka", "1", "Thu, 01-Jan-2020 00:00:01 GMT")
        //todo
        document.getElementById("dialog").style.display = "none"
        document.querySelector(".ham").style.opacity = 1; 
        document.querySelector('.ham').setAttribute('enabled', '');     

        
    }
    document.getElementById("no").onclick=function()
    {
        window.location.href = "https://www.detmir.ru/catalog/index/name/klassicheskie_kukly/"
        //todo
        document.body.style.backgroundColor = "#FFF"
        document.body.style.color = "#000"
        document.getElementById("dialog").style.display = "none"
        
    }
    
}