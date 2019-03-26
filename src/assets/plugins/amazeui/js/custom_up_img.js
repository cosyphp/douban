$(function() {
    'use strict';
    // 初始化
    var $image = $('#image');
    $image.cropper({
        aspectRatio: '1',
        autoCropArea:0.8,
        preview: '.up-pre-after',
    });

    // 上传图片
    var $inputImage = $('#inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;

            if (files && files.length) {
               file = files[0];

               if (/^image\/\w+$/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function () {
                       URL.revokeObjectURL(blobURL);
                    }).cropper('reset').cropper('replace', blobURL);
                    $inputImage.val('');
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }

    //绑定上传事件
    $('#up-btn-ok').on('click',function(){
    	var img_src = $image.attr("src");
    	if(img_src == ""){
    	    layer.msg("没有选择上传的图片", {icon: 5});
    		return false;
    	}

    	var url = $(this).attr("url");
    	var canvas = $("#image").cropper('getCroppedCanvas', {width: 300, height: 300, maxWidth: 300, maxHeight: 300});
    	var data = canvas.toDataURL(); //转成base64
        $.ajax({
            url:url,
            dataType:'json',
            type: "POST",
            data: {"image":data.toString()},
            success: function(jsonText){
                if(jsonText.code == '100100') {
                    layer.msg(jsonText.msg, {time: 1500, icon: 6}, function(){
                        parent.location.reload(); // 父页面刷新
                        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                        parent.layer.close(index); //再执行关闭
                    });
                } else {
                    layer.msg(jsonText.msg, {icon: 5});
                    return false;
                }
            },
            error: function(){
                layer.msg("上传文件失败了！", {icon: 5});
            }
         });
    });
});

function rotateimgright() {
    $("#image").cropper('rotate', 90);
}

function rotateimgleft() {
    $("#image").cropper('rotate', -90);
}

