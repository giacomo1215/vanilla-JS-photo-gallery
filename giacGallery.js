$(document).ready(function(){
    var IdArticolo = '<%=InstanceIdSelezionato%>';
    var mainImageSrc = "../public/Tessera/products/<%=InstanceIdSelezionato%>/<%=InstanceIdSelezionato%>.jpg";
    
    var url = "../Pickup/ImgProd.aspx?cod=" + IdArticolo;

    $.getJSON(url, function(data) {

        if (data.length > 0) {
            $('#mainImage').attr('src', data[0].href);
            var thumbnailsHtml = '';

            $.each(data, function(index, image) {
                thumbnailsHtml += '<div class="col"><img src="' + image.href + '" alt="Thumbnail" class="thumbnail shadow-sm rounded" onclick="changeMainImage(\'' + image.href + '\')"></div>';
            });

            thumbnailsHtml += '<div class="col"><img src="' + mainImageSrc + '" alt="Thumbnail" class="thumbnail shadow-sm rounded" onclick="changeMainImage(\'' + mainImageSrc + '\')"></div>';
            
            $('#thumbnailGallery').html(thumbnailsHtml);
        }
        
    });
});

function changeMainImage(src) {
    $('#mainImage').attr('src', src);
}