$(function(){
    // 代码高亮
    $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
    prettyPrint();

    $('img.caption').captionjs();

    $('img').each(function(){
        var $this = $(this);
        $this.wrap('<a href="' + $this.attr('src') + '"></a>');
    });

    console.log("博主正在重构博客，敬请期待！");
    /*index-menu color*/
    var menuLength = $(".row .menu-post").length;
    for(var i=0; i<menuLength; i++){
        var aTxt = $(".row .menu-post").eq(i).find(".tag-a:first-child").html();
        if(aTxt == '教程' || aTxt == 'jQuery' || aTxt == '读书笔记'){
            $(".row .menu-post").eq(i).find(".menu-tag").css("background-color", "#89B84C");
            $(".row .menu-post").eq(i).find(".tag-a").css("border-right-color", "#a1cc6b");
        }else if(aTxt == '工具' || aTxt == '框架' || aTxt == 'Yeoman'){
            $(".row .menu-post").eq(i).find(".menu-tag").css("background-color", "#6a847b");
            $(".row .menu-post").eq(i).find(".tag-a").css("border-right-color", "#a1afaa");
        }else if(aTxt == 'JavaScript' || aTxt == '文摘' || aTxt == '教程'){
            $(".row .menu-post").eq(i).find(".menu-tag").css("background-color", "#3ba55b");
            $(".row .menu-post").eq(i).find(".tag-a").css("border-right-color", "#6ecc8a");
        }else if(aTxt == '翻译' || aTxt == '代码规范' || aTxt == 'HTML' || aTxt == '小情绪'){
            $(".row .menu-post").eq(i).find(".menu-tag").css("background-color", "#298473");
            $(".row .menu-post").eq(i).find(".tag-a").css("border-right-color", "#79dac8");
        }else if(aTxt == '移动端' || aTxt == 'Angular' || aTxt == 'CSS' || aTxt == 'Canvas'){
            $(".row .menu-post").eq(i).find(".menu-tag").css("background-color", "#4b4221");
            $(".row .menu-post").eq(i).find(".tag-a").css("border-right-color", "#b9ab76");
        }
    }
})
;(function( $ ) {
    $(function() {
        $( '[data-js="google-search-form"]' ).on( 'submit', function( e ) {
            e.preventDefault();
            var inputVal = $( '[data-js="google-search-input"]' ).val();
            window.location.href = $( this ).attr( 'data-action' ) + ' ' + inputVal;
        });
    });
})( jQuery );