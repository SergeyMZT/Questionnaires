Questionnaires.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'questionnaires-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('questionnaires_item_create'),
        width: 550,
        autoHeight: true,
        url: Questionnaires.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Questionnaires.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Questionnaires.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('questionnaires_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('questionnaires_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('questionnaires_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('questionnaires-item-window-create', Questionnaires.window.CreateItem);


Questionnaires.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'questionnaires-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('questionnaires_item_update'),
        width: 550,
        autoHeight: true,
        url: Questionnaires.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Questionnaires.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Questionnaires.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('questionnaires_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('questionnaires_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('questionnaires_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('questionnaires-item-window-update', Questionnaires.window.UpdateItem);