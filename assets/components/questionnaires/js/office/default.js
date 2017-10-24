Ext.onReady(function () {
    Questionnaires.config.connector_url = OfficeConfig.actionUrl;

    var grid = new Questionnaires.panel.Home();
    grid.render('office-questionnaires-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});