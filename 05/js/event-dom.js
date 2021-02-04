        var coverImage = document.querySelector("#cover");
        coverImage.onclick = function(){
            alert('눌렀습니다');
        };
        coverImage.onmouseover = function() {
            coverImage.style.boder = "5px black solid";
        };
        coverImage.onmouseout = function(){
            coverImage.style.boder = "";
        };