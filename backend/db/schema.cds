namespace my.bazaar;

using { managed } from '@sap/cds/common';

entity Categories : managed {
    key ID   : Integer;
    nameEs   : String;
    nameCn   : String;
    products : Association to many Products on products.category = $self;
}

entity Products : managed {
    key ID      : Integer;
    nameEs      : String;
    nameCn      : String;
    description : String;
    price       : Decimal(10,2);
    stock       : Integer;
    image       : String;
    category    : Association to Categories;
}

entity ContactMessages : managed {
    key ID  : UUID;
    name    : String;
    email   : String;
    message : String;
}

