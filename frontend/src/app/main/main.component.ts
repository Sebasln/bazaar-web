import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../models/product.model';

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

    featuredProducts = signal<Product[]>([
        { id: 1, nameEs: 'Amigurumi Gato', nameCn: '猫咪玩偶', price: 10, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Amigurumi de gato hecho a mano' },
        { id: 2, nameEs: 'Bufanda', nameCn: '围巾', price: 15, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Bufanda hecha a mano' },
        { id: 3, nameEs: 'Decoración', nameCn: '装饰', price: 20, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000', description: 'Decoración hecha a mano' }
    ])


}
