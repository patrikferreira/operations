<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\OperacoesModel;

class OperacoesController extends BaseController
{
    public function __construct()
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-Control-Expose-Headers: Content-Length, X-JSON, FormData");
        header("Access-Control-Max-Age: 86400");
    }
    
    public function getAll() {
        $model = new OperacoesModel();
        $data = $model->findAll();
        return $this->response->setJSON($data);
    }

    public function add() {
        $model = new OperacoesModel();
        $operacoes = $this->request->getJSON();
        $model->insert(
            [
                'id' => $operacoes->id,
                'nome' => $operacoes->nome,
                'operacao' => $operacoes->operacao,
                'resultado' => $operacoes->resultado,
                'data' => $operacoes->data
              ]
        );
        return $this->response->setJSON(['sucess'=> true, 'data'=> $operacoes]);
    }
}
