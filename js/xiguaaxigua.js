$(function(){
    // 代码高亮
    $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
    prettyPrint();

    $('img.caption').captionjs();

    $('img').each(function() {
        var $this = $(this);
        $this.wrap('<a href="' + $this.attr('src') + '"></a>');
    });

    // 控制台欢迎信息
    var hello = "\n\n██╗  ██╗███████╗██╗     ██╗      ██████╗ ██╗\n██║  ██║██╔════╝██║     ██║     ██╔═══██╗██║\n███████║█████╗  ██║     ██║     ██║   ██║██║\n██╔══██║██╔══╝  ██║     ██║     ██║   ██║╚═╝\n██║  ██║███████╗███████╗███████╗╚██████╔╝██╗\n╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝\n\n\n",
        world = 'Glad to see u here!';

    console.log(hello);
    console.log('%c' + world, 'color: #1d9531');
});