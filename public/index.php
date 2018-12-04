<?php
define('ROOT_PATH', dirname(__DIR__));

$loader = require ROOT_PATH . '/vendor/autoload.php';
$loader->addPsr4('', ROOT_PATH . '/src');

$config = new \Feazy\Common\Configuration(ROOT_PATH . '/feazy.ini');
\Feazy\Common\DIManager::add('config', $config);
\Feazy\Common\DIManager::add('view', new \Feazy\Common\View($config->get('template')));

$request = new \Feazy\Common\Request(isset($_GET['route']) ? $_GET['route'] : '');
\Feazy\Common\DIManager::add('request', $request);

$router = new \Feazy\Common\Router($request->getParameter('route', '/'));

$router->get('/', 'IndexController@index');

$router->notFound(function() {
	echo 'I could not find the page you were looking for.';
});