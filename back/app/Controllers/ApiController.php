<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\Users;

class ApiController extends BaseController{
    use ResponseTrait;

    public function index()
    {
        $users = new Users();

        return $this->setResponseFormat('json')->respond($users->findAll(), 200);
    }

    public function create(){
        $users = new Users();
        $json = json_decode($this->request->getBody());

        $json->password = password_hash($json->password, PASSWORD_BCRYPT);

        $users->save($json);

        return $this->setResponseFormat('json')->respondCreated(['message' => "Cadastrado com sucesso"]);
    }

    public function show($id){
        $users = new Users();
        return $this->setResponseFormat('json')->respond(json_encode($users->find($id)), 200);
    }

    public function delete($id){
        $users = new Users();
        $users = $users->where('id', $id)->delete();
        return $this->setResponseFormat('json')->respondDeleted(['message' => "Deletado com sucesso"]);
    }

    public function update($id){
        $users = new Users();

        $json = json_decode($this->request->getBody());

        $users->update($id, $json);

        return $this->setResponseFormat('json')->respond(['message' => "Atualizado com sucesso"], 202);
    }
    
    public function login(){
        $AuthData = json_decode($this->request->getBody());
        $users = new Users();

        if (empty($users->where('username', $AuthData->username)->first())){
            return $this->setResponseFormat('json')->respond(['message' => "usuario não existe"], 203);
        } else {
            $user = $users->where('username', $AuthData->username)->first();
            if (password_verify($AuthData->password, $user['password'])){
                return $this->setResponseFormat('json')->respond($user, 200);
            } else {
                return $this->setResponseFormat('json')->respond(['message' => "senha invalida"], 203);
            }
        }
    }
}
