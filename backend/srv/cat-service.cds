using { my.bazaar as my } from '../db/schema';

// --- SERVICIO PARA LOS CLIENTES (Todo el mundo) ---
service CatalogService {
    @readonly entity Categories as projection on my.Categories;
    @readonly entity Products as projection on my.Products;
    
    // Cualquiera puede enviar un mensaje
    @insertonly entity ContactMessages as projection on my.ContactMessages;
}

// --- SERVICIO PARA TU SUEGRA (Solo ella) ---
// El nombre 'AdminService' es una convención, lo protegeremos luego
service AdminService {
    entity Categories as projection on my.Categories;
    entity Products as projection on my.Products;
    entity ContactMessages as projection on my.ContactMessages;
}
