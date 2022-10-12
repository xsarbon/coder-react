const products = [{
    id: 1,
    image: "https://pixelstore.com.ar/wp-content/uploads/2020/01/Xiaomi-Redmi-Note-8-6-3-Inch-4GB-64GB-Smartphone-Blue-876057-min.jpg",
    product: "XIAOMI REDMI NOTE 8 64GB",
    category: "celulares",
    description: "Celular xiaomi redmi note 8 de 64gb de almacenamiento + 4gb de memoria ram",
    price: 45000,
    brand: "Xiaomi",
    stock: 10,
    initial: 1,
    config: {
        color: ['Moonlight white', 'Neptune blue', 'Neptune blue'],
        sizeScreen: "6.3",
        construction: "Glass & plastic"
    }
}, {
    id: 2,
    image: "https://images.fravega.com/f1000/99255d47d5bace0b2f37460b589952a6.jpg",
    product: "XIAOMI REDMI NOTE 9 128GB",
    category: "celulares",
    description: "Celular xiaomi Redmi note 9 de 128gb de almacenamiento + 6gb de memoria ram",
    price: 65000,
    brand: "Xiaomi",
    stock: 13,
    initial: 1,
    config: {
        color: ['Aqua green', 'Pebble grey', 'Shadow black'],
        sizeScreen: "6.53",
        construction: "Plastic"
    }
}, {
    id: 3,
    image: "https://cdn-xiaomi.waugi.com.ar/567-thickbox_default/redmi-note-10-5g-4gb128gb.jpg",
    product: "XIAOMI REDMI NOTE 10 128GB",
    category: "celulares",
    description: "Celular xiaomi Redmi note 10 de 128gb de almacenamiento + 6gb de memoria ram",
    price: 78000,
    brand: "Xiaomi",
    stock: 7,
    initial: 1,
    config: {
        color: ['Azul nocturno', 'Gris grafito', 'Gris grafito', 'Verde aurora'],
        sizeScreen: "6.5",
        construction: "Plastic"
    }
}, {
    id: 4,
    image: "https://www.necxus.com.ar/products_image/26207/1000x1000_1.jpg",
    product: "XIAOMI REDMI NOTE 11 128GB",
    category: "celulares",
    description: "Celular xiaomi Redmi note 11 de 128gb de almacenamiento + 6gb de memoria ram",
    price: 96000,
    brand: "Xiaomi",
    stock: 16,
    initial: 1,
    config: {
        color: ['Azul ocaso', 'Blanco perla', 'Gris grafito'],
        sizeScreen: "6.5",
        construction: "Plastic"
    }
}, {
    id: 5,
    image: "https://grupotecargentina.com/wp-content/uploads/2021/02/se.jpg",
    product: "IPHONE SE 2DA GEN 64GB",
    category: "celulares",
    description: "Celular Iphone SE segunda generacion de 64gb de almacanamiento",
    price: 108000,
    brand: "Apple",
    stock: 21,
    initial: 1,
    config: {
        color: ['Red', 'White', 'Black'],
        sizeScreen: "4.7",
        construction: "Glass"
    }
}, {
    id: 6,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/116/601/products/x-web-black1-aa1266d4c0fe81b33a16364733191481-1024-1024.jpg",
    product: "IPHONE X 256GB",
    category: "celulares",
    description: "Celular Iphone X de 256gb de almacenamiento",
    price: 168000,
    brand: "Apple",
    stock: 11,
    initial: 1,
    config: {
        color: ['Red', 'White', 'Black'],
        sizeScreen: "4.7",
        construction: "Glass"
    }
}, {
    id: 7,
    image: "https://hiperlibertad.vteximg.com.br/arquivos/ids/198897-1000-1000/CELULAR-SAMSUNG-GALAXY-A13-128GB-BLACK-1-33531.jpg?v=637927401898500000",
    product: "SAMSUNG GALAXY A13",
    category: "celulares",
    description: "Celular samsung galaxy a13 de 128gb de almacenamiento + 4gb de memoria ram",
    price: 61000,
    brand: "Samsung",
    stock: 15,
    initial: 1,
    config: {
        color: ['Black', 'Ligth Blue', 'White'],
        sizeScreen: "6.6",
        construction: "Plastic"
    }
}, {
    id: 8,
    image: "https://unite4buy.ru/media/images/2022/03/16/galaxy-a33-5g-7_IGYozb3.jpg",
    product: "SAMSUNG A33 5G",
    category: "celulares",
    description: "Celular samsung galaxy a33 5g 128gb de almacenamiento + 6gb de memoria ram",
    price: 99000,
    brand: "Samsung",
    stock: 18,
    initial: 1,
    config: {
        color: ['Awesome Black', 'Awesome Blue', 'Awesome White'],
        sizeScreen: "6.4",
        construction: "Plastic"
    }
}, {
    id: 9,
    image: "https://mexx-img-2019.s3.amazonaws.com/Notebook-Lenovo-IdeaPad-3-Ryzen-5-8Gb-Ssd-512Gb-15-Win11_43263_1.jpeg",
    product: "NOTEBOOK LENOVO IDEAPAD 5 8GB",
    category: "notebooks",
    description: "Notebook Lenovo ideapad 5, procesador ryzen 5, 8gb + 512gb ssd",
    price: 185000,
    brand: "Lenovo",
    stock: 9,
    initial: 1,
    config: {
        color: ['Abyss blue', 'Platinum Grey'],
        sizeScreen: "15.8",
        construction: "Plastic"
    }
}, {
    id: 10,
    image: "https://images.fravega.com/f1000/cabca5b1bd1f2610c788944f374a9bbe.jpg",
    product: "NOTEBOOK LENOVO INTEL I5 8GB",
    category: "notebooks",
    description: "Notebook lenovo 14 pulgadas core i5 8gb + 512gb ssd",
    price: 127000,
    brand: "Lenovo",
    stock: 14,
    initial: 1,
    config: {
        color: ['Platinum Grey'],
        sizeScreen: "14.3",
        construction: "Plastic"
    }
}, {
    id: 11,
    image: "https://images.fravega.com/f1000/c2eb6b5562922b7862a6e6b5cfe2a1af.jpg",
    product: "NOTEBOOK HP NATURAL I5 8GB",
    category: "notebooks",
    description: "Notebook HP ",
    price: 152000,
    brand: "HP",
    stock: 7,
    initial: 1,
    config: {
        color: ['Plata'],
        sizeScreen: "14",
        construction: "Plastic"
    }
}, {
    id: 12,
    image: "https://images.fravega.com/f1000/7474efc85d5d38cb025d1e2514435d92.jpg",
    product: "NOTEBOOK ASUS CELERON 4GB",
    category: "notebooks",
    description: "Notebook Asus Intel Celeron N4020 4gb + 128gb",
    price: 62000,
    brand: "Samsung",
    stock: 24,
    initial: 1,
    config: {
        color: ['Electric Blue'],
        sizeScreen: "15.6",
        construction: "Plastic"
    }

}, {
    id: 13,
    image: "https://www.soscomputacion.com.ar/25127-thickbox_default/parlante-portatil-bluetooth-jbl-clip-4-5w.jpg",
    product: "PARLANTE PORTATIL JBL CLIP 4",
    category: "audio",
    description: "Parlante portatil, recargable JBL Clip 4, con Bluetooth",
    price: 19000,
    brand: "JBL",
    stock: 14,
    initial: 1,
    config: {
        color: ['Rojo'],
        construction: "Plastico y tela"
    }
}, {
    id: 14,
    image: "https://images.fravega.com/f1000/f20792e0c9182452979637ae6785999a.jpg",
    product: "PARLANTE PORTATIL SONY EXTRA BASS XB13",
    category: "audio",
    description: "Parlante portatil, recargable Soy Extra Bass XB13, con Bluetooth",
    price: 15000,
    brand: "Sony",
    stock: 7,
    initial: 1,
    config: {
        color: ['Negro'],
        construction: "Plastic"
    }
}, {
    id: 15,
    image: "https://images.fravega.com/f1000/95d11723d52ea94a869d3e744825e257.jpg",
    product: "AURICULARES INALAMBRICOS SONY",
    category: "audio",
    description: "Auriculares inalambricos Sony WH-CH510 con Bluetooth y Noise Cancelation",
    price: 9000,
    brand: "Sony",
    stock: 19,
    initial: 1,
    config: {
        color: ['Negro'],
        construction: "Plastico"
    }
}, {
    id: 16,
    image: "https://images.fravega.com/f1000/ac9a31f8135a4a6f8c6bf6f3feef1bbc.jpg",
    product: "AURICULARES SONY XB550APR",
    category: "audio",
    description: "Auriculares con cable Sony Extra Bass",
    price: 5900,
    brand: "Sony",
    stock: 18,
    initial: 1,
    config: {
        color: ['Rojo'],
        construction: "Plastico"
    }
}, {
    id: 17,
    image: "https://stylewatch.vtexassets.com/arquivos/ids/215443/Parlante_JBL_JBLCHARGE5BLU_02.jpg?v=637910045371070000",
    product: "PARLANTE PORTATIL JBL CHARGE 5",
    category: "audio",
    description: "Parlante portatil, recargable JBL Charge 5, con Bluetooth",
    price: 52000,
    brand: "JBL",
    stock: 6,
    initial: 1,
    config: {
        color: ['Azul oscuro'],
        construction: "Plastico y tela"
    }
}, {
    id: 18,
    image: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw48f5d684/JBL_Go2_Hero_Midnight_Black-1605x1605px.png?sw=537&sfrm=png",
    product: "PARLANTE PORTATIL JBL GO 2",
    category: "audio",
    description: "Parlante portatil, recargable JBL GO 2, con Bluetooth",
    price: 9000,
    brand: "JBL",
    stock: 28,
    initial: 1,
    config: {
        color: ['Rojo'],
        construction: "Plastico y tela"
    }
}, {
    id: 19,
    image: "https://stylewatch.vtexassets.com/arquivos/ids/204909/parlante-jbl-go-3-teal-jblgo3teal_01.jpg?v=637740774912700000",
    product: "PARLANTE PORTATIL JBL GO 3",
    category: "audio",
    description: "Parlante portatil, recargable JBL GO 3, con Bluetooth",
    price: 11900,
    brand: "JBL",
    stock: 14,
    initial: 1,
    config: {
        color: ['Rojo'],
        construction: "Plastico y tela"
    }
}, {
    id: 20,
    image: "https://images.fravega.com/f1000/a31063c7a260d8f902dc54fee1b128e3.jpg",
    product: "PARLANTE PORTATIL JBL CLIP 4",
    category: "hogar",
    description: "Lavarropas Drean, 1200RPM, Drean NEXT 8.12 ECO",
    price: 125000,
    brand: "Drean",
    stock: 13,
    initial: 1,
    config: {
        color: ['Blanco'],
        construction: "Acero",
        revoluciones: 1200
    }
}, {
    id: 21,
    image: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/8/38393-1.jpg",
    product: "LAVARROPAS LG 9KG CARGA FRONTAL",
    category: "hogar",
    description: "Lavarropas LG, 9kg de peso, con carga frontal",
    price: 196000,
    brand: "LG",
    stock: 5,
    initial: 1,
    config: {
        color: ['Blanco'],
        construction: "Acero",
        revoluciones: 1500
    }
}, {
    id: 22,
    image: "https://images.fravega.com/f1000/ea0124afb833764e3470c266596a0df1.jpg",
    product: "LAVAVAJILLAS LG D1455CF 14C",
    category: "hogar",
    description: "Lavavajillas lg para hogar, 14 cubiertos, con panel de control tactil y conexion wifi",
    price: 135000,
    brand: "LG",
    stock: 7,
    initial: 1,
    config: {
        color: ['Plateado'],
        construction: "Acero inoxidable",
        cubiertos: 14,
        litros: 9
    }
}, {
    id: 23,
    image: "https://images.fravega.com/f1000/799a8ceaf934954792eea028e9b44cfd.jpg",
    product: "SMART TV SAMSUNG 4K UHD UN55AU7000",
    category: "hogar",
    description: "Lavarropas Drean, 1200RPM, Drean NEXT 8.12 ECO",
    price: 149000,
    brand: "Samsung",
    stock: 43,
    initial: 1,
    config: {
        color: ['Negro'],
        construction: "Plastico",
        resolucion: "Ultra HD"
    }
}, {
    id: 24,
    image: "https://www.lg.com/ar/images/televisores/md06215136/gallery/DM-01.jpg",
    product: "SMART TV LG 32 PULGADAS",
    category: "hogar",
    description: "Smart tv lg con wifi",
    price: 50000,
    brand: "Drean",
    stock: 10,
    initial: 1,
    config: {
        color: ['Negro'],
        construction: "Plastico",
    }
}

]

export default products