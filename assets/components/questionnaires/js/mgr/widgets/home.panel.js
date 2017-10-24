Questionnaires.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'questionnaires-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('questionnaires') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('questionnaires_items'),
                layout: 'anchor',
                items: [{
                    html: _('questionnaires_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'questionnaires-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Questionnaires.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Questionnaires.panel.Home, MODx.Panel);
Ext.reg('questionnaires-panel-home', Questionnaires.panel.Home);
