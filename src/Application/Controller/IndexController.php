<?php
/**
 * Created by PhpStorm.
 * User: dinhthibc
 * Date: 12/4/18
 * Time: 10:00 PM
 */

namespace Application\Controller;


class IndexController extends BaseController
{
	public function index() {
		$this->view->setTitle('Thi Tran');
		$this->view->render('index/index');
	}
}