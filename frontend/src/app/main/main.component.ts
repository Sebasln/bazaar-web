import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, CurrencyPipe, TranslateModule],
    templateUrl: './main.html',
    styleUrl: './main.css'
})
export class MainComponent {
    welcomeMessage = 'Bienvenidos al Bazar de Crochet';

    categories = signal([
        { id: 1, name: 'Amigurumis' },
        { id: 2, name: 'Bufandas' },
        { id: 3, name: 'Decoración' }
    ])

    featuredProducts = signal([
        { id: 1, name: 'Amigurumi Gato', price: 10, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Amigurumi de gato hecho a mano' },
        { id: 2, name: 'Bufanda', price: 15, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Bufanda hecha a mano' },
        { id: 3, name: 'Decoración', price: 20, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Decoración hecha a mano' }
    ])
}
