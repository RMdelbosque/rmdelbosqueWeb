import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],   // 👈 IMPORTANTE para usar [(ngModel)]
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  // Modelo del formulario
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  sending = false;
  success: string | null = null;
  error: string | null = null;

  async sendEmail(event: Event) {
    event.preventDefault();
    this.sending = true;
    this.success = null;
    this.error = null;

    try {
      await emailjs.sendForm(
        'service_xq28ikv',        // tu Service ID
        'template_9p4weod',       // tu Template ID
        event.target as HTMLFormElement,
        { publicKey: 'ansYCIC8EmfbKWDVi' }  // tu Public Key
      );

      this.success = '✅ ¡Mensaje enviado con éxito!';
      this.formData = { name: '', email: '', phone: '', message: '' }; // limpiar
    } catch (err) {
      this.error = '❌ Error al enviar el mensaje. Inténtalo más tarde.';
      console.error(err);
    } finally {
      this.sending = false;
    }
  }

  callPhone() {
    const phoneNumber = '+34654849387';
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(`📞 Mi número de teléfono: ${phoneNumber}`);
    }
  }
}


