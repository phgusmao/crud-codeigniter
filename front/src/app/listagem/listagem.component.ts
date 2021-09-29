import { Usuario } from './../models/usuario.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  emailForm = new FormControl('');
  url?: 'localhost/api';
  usuarios: any;
  username: any;
  senha: any;
  email: any;
  telefone: any;
  id: any;

  form: FormGroup;


  constructor(private usuarioSerce: UsuarioService) {
    this.form = new FormGroup({
      email: new FormControl(),
      usuario: new FormControl(),
      senha: new FormControl(),
      telefone: new FormControl()
    })
   }

  ngOnInit(): void {
    this.getUsuarios();
  }

  deletar(UserID: any){
    this.id = UserID;
    this.deletarUsuario();
    this.getUsuarios();
  }

  async getUsuarios(): Promise<void> {
    const responseUsuarios = await this.usuarioSerce.getAllUser().subscribe((data: Usuario) => {
      this.usuarios = data;
      console.log(data);
    });
  }

  async deletarUsuario(): Promise<void> {
    const responseUsuarios = await this.usuarioSerce.deleteUserById(this.id).subscribe((data) => {
      alert(data.message);
    });
  }

  async getUsuariosById(): Promise<void> {
    const responseUsuarios = await this.usuarioSerce.getUserById(this.id).subscribe((data: Usuario) => {
      this.usuarios = data;
      console.log(data);
    });
  }

}
