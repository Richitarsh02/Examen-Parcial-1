import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-zA-Z ]+$')]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      alert('Formulario válido');
    } else {
      if (this.form.get('Name')?.invalid) {
        alert('Por favor, ingresa un nombre válido.');
      }
      if (this.form.get('email')?.invalid) {
        alert('Por favor, ingresa un correo electrónico válido.');
      }
      if (this.form.get('message')?.invalid) {
        alert('Por favor, el mensaje debe tener al menos 10 caracteres.');
      }
    }
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }
}