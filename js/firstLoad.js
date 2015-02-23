$(document).ready(function () {
    jQuery("#list2").jqGrid({
        url: 'php/firstLoad.php', 
        datatype: "json", 
        colNames: ['id', 'usuario', 'password'], 
        colModel: [{name: 'id', index: 'id', width: 150}, 
            {name: 'usuario', index: 'usuario', width: 150}, 
            {name: 'password', index: 'password', width: 150}], 
        rowNum: 10, 
        rowList: [10, 20, 30], 
        pager: '#pager2', 
        sortname: 'id', 
        viewrecords: true, 
        sortorder: "asc", 
        caption: "JQgrid"});
    
    jQuery("#list2").jqGrid('navGrid', '#pager2', {edit: false, add: false, del: false});
});

