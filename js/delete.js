$(document).ready(function(){
    $('#DeleteButton').click(function(){
        var id = $('#list2').jqGrid('getGridParam','selrow');
        if(id){
            var datos = $('#list2').jqGrid('getRowData',id);
            //var idBorrado = datos.id;
            $.ajax({
                type:'POST',
                url:'php/delete.php',
                data:datos,
                success: function () {
                    alert("El registro fue borrado con éxito");
                    $('#list2').trigger("reloadGrid");
                },
                error: function () {
                    alert("Parece que se produjo un error al intentar borrar el dato seleccionado");
                }
            });
        }else{
            alert("Parece que no has seleccionado el dato a borrar");
        }
    });
});

