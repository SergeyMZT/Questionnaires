<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var Questionnaires $Questionnaires */
$Questionnaires = $modx->getService('questionnaires', 'Questionnaires', $modx->getOption('questionnaires_core_path', null,
        $modx->getOption('core_path') . 'components/questionnaires/') . 'model/questionnaires/'
);
$modx->lexicon->load('questionnaires:default');

// handle request
$corePath = $modx->getOption('questionnaires_core_path', null, $modx->getOption('core_path') . 'components/questionnaires/');
$path = $modx->getOption('processorsPath', $Questionnaires->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));