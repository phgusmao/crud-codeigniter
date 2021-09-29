import { Usuario } from './../models/usuario.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @Output() submitEM = new EventEmitter();

  emailForm = new FormControl('');
  url?: 'localhost/api';
  usuarios: any;
  username: any;
  senha: any;
  email: any;
  telefone: any;

  form: FormGroup;


  constructor(private usuarioSerce: UsuarioService, private snackBar: MatSnackBar) {
    this.form = new FormGroup({
      email: new FormControl(),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    //this.createUsuarios();

  }

  submit(){
    this.createUsuarios();
  }

  async createUsuarios(): Promise<void> {
    if (this.form.valid) {
      const responseUsuarios = await this.usuarioSerce.createUser(JSON.stringify(this.form.value)).subscribe((data) => {
        alert(data.message);
      });
    }
  }

}
