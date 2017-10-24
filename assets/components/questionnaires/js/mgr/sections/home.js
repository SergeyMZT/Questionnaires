Questionnaires.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'questionnaires-panel-home',
            renderTo: 'questionnaires-panel-home-div'
        }]
    });
    Questionnaires.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Questionnaires.page.Home, MODx.Component);
Ext.reg('questionnaires-page-home', Questionnaires.page.Home);