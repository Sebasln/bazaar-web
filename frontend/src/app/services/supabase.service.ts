import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }

    /**
     * Fetches all products from the database.
     * Professional Note: In the future, we should add pagination and filtering.
     */
    async getProducts() {
        const { data, error } = await this.supabase
            .from('Products')
            .select('*');

        if (error) {
            console.error('Error fetching products:', error.message);
            return [];
        }

        return data;
    }

    /**
     * Fetches all available product categories.
     */
    async getCategories() {
        const { data, error } = await this.supabase
            .from('Categories')
            .select('*');

        if (error) {
            console.error('Error fetching categories:', error.message);
            return [];
        }

        return data;
    }
}
