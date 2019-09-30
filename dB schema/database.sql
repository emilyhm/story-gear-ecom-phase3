DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS price;
DROP TABLE IF EXISTS contact;

CREATE DATABASE ecommerce;
USE ecommerce;


-- PRODUCTS
 CREATE TABLE products
(product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 product_name VARCHAR (100) NOT NULL,
 product_image VARCHAR (1000),
 product_alt_desc VARCHAR (1000), 
 category VARCHAR(50) NOT NULL,
 item_description VARCHAR(1000),
 quantity INT NOT NULL);

 INSERT INTO products (product_name, product_image, product_alt_desc, category, item_description, quantity)
 VALUES 
 ('DSMC2 BRAIN RED DRAGON-X 5K S35', 'https://www.red.com/SSP%20Applications/Red@SuiteCentric/SCA%20Kilimanjaro/img/products/710-0317_0.png?resizeid=5&resizeh=1200&resizew=1200', 'black red camera', 'cameras', 'DRAGON-X features the industry workhorse and award-winning DRAGON sensor, now with IPP2, delivering 5K cinematic imagery in a Super 35 format.', 1),
 ('Canon EOS 1D Mark IV (Used)', 'https://www.usa.canon.com/internet/wcm/connect/us/cd4520ed-0c80-401c-8532-2fa2d6b74134/1d_markiv-675x450.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-cd4520ed-0c80-401c-8532-2fa2d6b74134-l2aLV03', 'black canon camera', 'cameras', 'Offering a comprehensive combination of speed, accuracy and image quality, the EOS-1D Mark IV is the perfect choice for professional photographers and subjects on the move.', 1),
 ("EF 35mm f/1.4L USM", "https://www.usa.canon.com/internet/wcm/connect/us/923abb72-0bd7-4539-b8b7-cf4bbbaaa725/ef-35-14l-usm-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-923abb72-0bd7-4539-b8b7-cf4bbbaaa725-l0UGosv", "black 35mm lens", "lens", "L-series professional f/1.4 wide-angle lens with an Aspherical lens element to correct aberrations. The floating system enables high picture quality to be obtained over the entire focusing range. Autofocusing is quick and quiet with rear focusing and ring USM.", 1),
 ("EF 100mm f/2.8 Macro USM", "https://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/ef100_28macrousm_1_xl.jpg", "black 100mm lens", "lens", "Autofocus lens for macro photography up to life-size (1x) magnification. Inner focusing affords a long working distance of 5.9in. (149mm) at 1x. A 3-group floating system results in excellent delineation at all focusing distances.", 1),
 ("Joby GorillaPod Tripod", "https://cdn.vitecimagingsolutions.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/g/o/gorillapod-kit-5k-bentlower.jpg", "black joby gorilla tripod", "tripods", "Professional-grade GorillaPod tripod with ball head mount capable of holding 5kg of camera and zoom lens. With flexible legs & ball head that secures pro camera gear anywhere.", 1),
 ("Travel Tripod by Peak Design", "https://ksr-ugc.imgix.net/assets/025/855/992/1c00ede28eba30818fd7f52d1e5e0bad_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563493272&auto=format&frame=1&q=92&s=c1449771c3012a07d5f4611904b84b44", "black peak design tripod", "tripods", "We engineered professional-quality stability and performance. And we added thoughtful features to help you get the shot— with any gear, in any environment, from any point of view.", 1),
 ("Aputure AL-MX", "https://cdn.shopify.com/s/files/1/1343/1935/products/MX_SMD_bulb.jpg?v=1522207724", "black and red aputure light", "lights", "The AL-MX is more powerful than any other light of its size. It packs 128 SMD LED bulbs into a credit card-sized panel. With both CRI & TLCI ratings over 95, and a wide 120° beam angle that outputs 3200 lux at 0.3m, the possibilities for this light are endless.", 1),
 ("Aputure LS-mini20", "https://cdn.shopify.com/s/files/1/1343/1935/products/mini20d-05.jpg?v=1508813888", "larger black and red aputure light", "lights", "The Aputure LS-mini20 offers you completely controllable and shapeable light in any situation. Whether you’re dealing with shape-based lighting or portrait lighting, the LS-mini20 is the perfect tool to turn your vision into a reality.", 1),
 ("The Brixton by ONA", "https://www.onabags.com/media/catalog/product/b/r/brixton_smoke_front_large.jpg", "brown and grey crossbody camera bag", "camera-bags", "Handcrafted with water-resistant waxed canvas and detailed with full-grain leather, the Brixton camera bag is designed to protect a camera, two or three lenses and up to a 13-inch laptop.", 1),
 ("Waterproof Waxed Canvas Bag by Woosir", "https://cdn.shopify.com/s/files/1/0037/8683/3993/products/product-image-858069642@2x.jpg?v=1555491128", "khaki camera bag", "camera-bags", "There are two parts in this camera backpack: Top compartment can hold the travel necessity like clothes, towel, notebooks. The bottom compartment is designed for the professional DSLR digital camera (such as Canon, Nikon, Sony, Pentax).", 1),
 ("GNARBOX 2.0 SSD (1 TB)", "https://cdn.shopify.com/s/files/1/0953/0522/products/gnarbox2-productshotA_3f875b46-dbbd-4373-9031-1ce99ca333d4_800x.jpg?v=1554332554", "black gnarbox", "storage", "With single-step backup, dedicated workspaces for photographers and videographers, and integrated access to professional editing software, GNARBOX will save you time and make you a more reliable creator.", 1),
 ("Seagate 2TB Portable External Hard Drive", "https://www.seagate.com/files/www-content/product-content/backup-plus-fam/backup-plus-ultra-slim/_shared/images/bup-ultra-slim-gold-silver-family-hi-res-3000x3000.jpg", "two gold and grey slim hard drive", "storage", "An external hard drive for Mac and Windows, Backup Plus Ultra Slim offers 2TB of space for photos, music, and more.", 1);


--PRICES
CREATE TABLE prices (
 product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 price DECIMAL(10,2) NOT NULL,
 monetary_value VARCHAR (10) NOT NULL
 );
 
 INSERT INTO prices (price, monetary_value)
 VALUES 
 (14950.00, 'high'), 
 (1199.95, 'high'),
 (1099.00, 'high'),
 (599.99, 'medium'),
 (179.95, 'low'),
 (289.00, 'low'),
 (149.00, 'low'),
 (260.00, 'low'),
 (299.00, 'low'),
 (69.99, 'low'),
 (899.00, 'medium'),
 (60.99, 'low');


-- CONTACTS
CREATE TABLE contacts
(contact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
 first_name VARCHAR(100) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 topic VARCHAR(100) NOT NULL,
 contact_comment VARCHAR(10000));

 INSERT INTO contacts (first_name, last_name, email, topic, contact_comment)
 VALUES 
 ('Emily', 'Hernandez-Mendez', 'ihopethisworks@gmail.com', 'general comment', 'i really hope this works'),
 ('Andrea', 'Sacks', 'iworkatvogue@vogue.com', 'general comment', 'I love the products that are sold here'),
 ('Harry', 'Potter', 'thechosenone@hogwarts.edu', 'The Brixton by ONA', 'Loved the design. My best friends complemented it, and so did all my other classmates.'),
 ('Quentin', 'Tarantino', 'qtarantino@gmail.com', 'DSMC2 BRAIN RED DRAGON-X 5K S35', 'Used this for my latest release. Good quality. RED does not disappoint.'),
 ('Emma', 'Stone', 'estone@gmail.com', 'Travel Tripod by Peak Design', 'Loved this tripod, used it for a summer home video.'),
 ('Peter', 'McKinnon', 'pmckinnon@gmail.com', 'Aputure AL-MX', 'One of the best small lights for any photographer or filmmaker. For emergencies, or if you need a small light this is the best pick.'),
 ('Leo', 'DiCaprio', 'dicaprio@gmail.com', 'EF 35mm f/1.4L USM', 'Bought this for a friend. He loved it. Great packaging. Would recommend'),
 ('Brad', 'Pitt', 'bpitt@hotmail.com', 'GNARBOX 2.0 SSD (1 TB)', 'Bought this for a small project, held all my footage and it was amazing.'),
 ('John', 'Wick', 'jwick@gmail.com', 'Canon EOS 1D Mark IV (Used)', 'Got this so that I could take videos of my dog. They came out so good. 10/10'),
 ('Jules', 'Winnfield', 'jules@pulpfiction.com', 'Waterproof Waxed Canvas Bag by Woosir', 'I used this for a gig I got a while back, and I have to say, it carried all my equipment exceptionally well.');