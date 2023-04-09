# blogVacacionesBack_K
#####Necesario para correr la aplicación web, tanto en el front como en el back.

Luego de hacer el pull de ambos repositorios, se deben añadir a cada uno una archivo **".ENV"** a primer nivel que contenga la siguiente información.

+ ENV:
+ **PORT = 3004**

+ URI_CONNECT =mongodb+srv://admin:admin@develokev.gl0pbua.mongodb.net/blog?retryWrites=true&w=majority

+ BASEURL= http://localhost:3004

+ URLBASEMONGO = http://localhost:3004/api/articles/

Se debe inicializar el NPM --> **"npm init -y"**
Seguido de ello se deberán instalar las siguientes dependencias:
"cors" - "dotenv" - "ejs" - "express" - "express-validator" - "mongoose" - "multer".

Se creará automáticamente el archivo "package.json" en el que deberemos añadir a los scripts:
- [ ] "start": "node app.js",
- [ ] "dev": "nodemon".

Una vez instaladas las dependencias y definidos los scripts, a través de la terminal podemos conectar el programa con el servidor y la BBDD con el comando "npm run dev".

Ya está lista la app web para ser utilizada.

***
URLsFront USERS
**"/"
"/read-more/:id"
"/login"
"/search-results?search="palabra de búsqueda"**
URLsFront ADMIN
**/dashboard
"/create-form"
"/edit-form/:id"**

#####En caso de "app crashed", escribir en la terminal "rs" y "enter" para reinicializarlo.

Espero que la disfruten, gracias.

