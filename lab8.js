function procces_response(data){
    console.log(data)
    for(i = 0; i < data.results.length ; i++){
        $('#results').append('Title: ' + data.results[i].original_title + '</br>' );
        $('#results').append('Description: ' + data.results[i].overview + '</br>'+ '</br>');
        x = data.results[i].poster_path

        image_box = `<img src='https://image.tmdb.org/t/p/w500/${x}' width="100"%>`
        $('#results').append(image_box + '</br>'+ '</br>');
        z = `<button id="${data.results[i].backdrop_path} "class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");
    }
    
}
function call_ajax(){
    w = $('#movie_name').val();
    $.ajax({
        'url': `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
        'type': 'GET',
        'success': procces_response
    })
}
function display_back_drop() {
    w = $(this).attr("id");
    console.log('display called')
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`);
    $("#right_div").append(`<div><img src="https://image.tmdb.org/t/p/w300/${w} " width="100%"></div>`)


}

function setup(){
    console.log("test")
    $('#movie_info').click(call_ajax);

    $('body').on('click', '.backdrop_button' ,display_back_drop)

}
$(document).ready(setup)