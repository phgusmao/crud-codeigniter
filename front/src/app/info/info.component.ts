import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Output() submitEM = new EventEmitter();

  emailForm = new FormControl('');
  url?: 'localhost/api';
  usuarios: any;
  username: any;
  senha: any;
  email: any;
  telefone: any;
  id: any;

  form: FormGroup;


  constructor(private usuarioSerce: UsuarioService, private snackBar: MatSnackBar, private router: ActivatedRoute) {
    this.form = new FormGroup({
      email: new FormControl(),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    this.router.queryParamMap
      .subscribe((params) => {
        this.id = params.get('id');
      }
    );
    this.getUserById();
  }

  submit(){
    this.updateUsuarios();
  }

  async updateUsuarios(): Promise<void> {
    if (this.form.valid) {
      const responseUsuarios = await this.usuarioSerce.updateUser(this.id, JSON.stringify(this.form.value)).subscribe((data) => {
        alert(data.message);
      });
    }
  }

  async getUserById(): Promise<void> {
    const responseUsuarios = await this.usuarioSerce.getUserById(this.id).subscribe((data) => {
      this.form.setValue({
        "username": data.username,
        "email": data.email,
        "telefone": data.telefone,
        "password": data.password
      });
    });
  }

}
