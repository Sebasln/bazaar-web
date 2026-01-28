import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule, FormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class ContactComponent {
    // Definimos los campos del formulario como "Signals" (Cajas reactivas)
    name = signal('');
    email = signal('');
    message = signal('');
    
    isSending = signal(false);
    showSuccess = signal(false);

    constructor(private contactService: ContactService) {}

    onSubmit() {
        this.isSending.set(true);
        
        const data = {
            name: this.name(),
            email: this.email(),
            message: this.message()
        };

        // LLAMADA A LA API (a través del servicio)
        this.contactService.sendMessage(data).subscribe({
            next: (res) => {
                this.isSending.set(false);
                this.showSuccess.set(true);
                // Limpiar formulario
                this.name.set('');
                this.email.set('');
                this.message.set('');
            }
        });
    }
}
