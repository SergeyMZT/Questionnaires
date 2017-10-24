var Questionnaires = function (config) {
    config = config || {};
    Questionnaires.superclass.constructor.call(this, config);
};
Ext.extend(Questionnaires, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('questionnaires', Questionnaires);

Questionnaires = new Questionnaires();