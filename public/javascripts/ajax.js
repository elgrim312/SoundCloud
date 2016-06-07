/**
 * Created by constantin on 05/06/2016.
 */
// Fonction Ajax qui incremente les données au clic
function incrementData() {
    var id = $(this).prev('input').data('id');
    console.log(id);
    $.ajax({
        url: '/api/up/' + id,
        type: "PUT",
        error: function (xhr, text, err) {
            console.log('error: ', err);
            console.log('text: ', text);
            console.log('xhr: ', xhr);
        }
    });
}