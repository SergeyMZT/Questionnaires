<?php

/**
 * The home manager controller for Questionnaires.
 *
 */
class QuestionnairesHomeManagerController extends modExtraManagerController
{
    /** @var Questionnaires $Questionnaires */
    public $Questionnaires;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('questionnaires_core_path', null,
                $this->modx->getOption('core_path') . 'components/questionnaires/') . 'model/questionnaires/';
        $this->Questionnaires = $this->modx->getService('questionnaires', 'Questionnaires', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('questionnaires:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('questionnaires');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Questionnaires->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->Questionnaires->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/questionnaires.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Questionnaires->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Questionnaires.config = ' . json_encode($this->Questionnaires->config) . ';
        Questionnaires.config.connector_url = "' . $this->Questionnaires->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "questionnaires-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->Questionnaires->config['templatesPath'] . 'home.tpl';
    }
}