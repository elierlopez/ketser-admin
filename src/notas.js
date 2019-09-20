/*
domingo 14 de enero '19
Un error muy estupido de los que cometi
en el store.js
estaba haciendo este import:
    import thunk from 'react-thunk' q
    que me installa alguna cosa que no se para que sierve pero no es para las funciones async
    el que debo installar es
    import thunk from 'redux-thunk'

    Lo que sigue es llamar al url de ketser y ver si se trae los datos
*/

/* Lunes 22 de Enero

Access to XMLHttpRequest at 'http://localhost:58949/api/Service/Save' from origin 'http://localhost:3000' 
has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.

*/

/* Miercoles 30 de Enero

El problema se soluciono en el backen haciendo uso de un paquete http.cors 
y poniendo la linea enableCors() en el webApiConfig del backend 

En los reducers, el principio de inmutabilidad se cumple EVITANDO ALTERAR EL ESTADO,
para ellos basta crear una copia del estado antes de modificarlo, 
Si el reducer tiene que modificar un elmento de un arreglo, 
no es necesario hacer una copia del elemento si ya se hizo una copia de todo el arreglo.
 
*/


/* Miercoles 06 de febrero

Ya funciona el popup que me sirve para editar servicios

Para poder hacer funcionar los componente de react boostrap en un form (el del popup)
tuve que usar el inpuRef
    inputRef={NameInput => this.NameInput = NameInput}/>
 Cosa que no es reciomendable segun un comentario que lei
 1) Hay que ver la forma de hacerlo mas limpio
 2) hay que arreglar el look de las imagenes en el service list
 
*/

/* Martes 12 Marzo 

TODO: CUando cambias la imagen de un person no se carga la nueva imagen en el control de image
TODO: Incluso despues de refrescar semuestra la imagen anterior, parece se un problema de cache

*/

/* Martes 12 Marzo 

Revisar bien la forma de hacer el post al GetToken endpoint
probablemente ese es el problema y no el cors

*/

/* Miercoles 23 de mayo 2019 

-Revisar bien la forma de usar el localStorage para almacenar el token y el expirationTime 
como en el tutorial de udemy

*/


/* DOm 02 de Junio 2019 

Lista la parte del auth
Hay que mandar el token a todos los endpoints protejidos en el backend

*/

/* Miercoles 27 de Junio 2019

Hacer que el routing me permita escribir el url BarProp
es todo un desmadre tengo ya mucho tiempo atorado con esta mierda
lo unico que me falta es leer este post:

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually?rq=1

y luego a la mierda a seguir con lo que sigue porque
ya malgaste mucho 

Siguiente paso:
1: cargar los datos de los projectos en el grid
2: al seleccionar un projecto mostrar todos sus quotes
3: Poder crear un project
4: Poder crear un quote
*/

/* Miercoles Aug 31 2019

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually?rq=1

Siguiente paso:
0: Pasar el token a los metodos con [Auth] del backend [LISTO EN EL PROJECT ACTIONS, LOS SACO DEL LOCAL STORAGE]
1: cargar los datos de los projectos en el grid [LISTO]
2: al seleccionar un projecto mostrar todos sus quotes [LISTO]
3: Poder crear un project
4: Poder crear un quote
*/


/* LUNES Aug 1 2019

La pagina de los quotes ya esta lista 
y deplsiega los quotes basado en el project ID
Arregle el asunto de los vulnerabilites a traves de npm audit fix (pero aun hay vuknerabilities al parecer)
por alfuna razon en el componentwillmount o el coimponentdidmount no puedo setear el estado con setState, no lo guarda
Hay que averiguar porque

Siguiente paso:
3: Poder crear un project
4: Poder crear un quote
5: deployar el sitio
6: poder crear persons
*/

/* Miercoles Sep 11 2019

Hoy termine el update project en el componente projectForm.
No pude usar el react-datepicker en un stateless component, despues de mis prurbas 
supongo supongo porque su metodo onchange
depende de un re-render para actualizar el valor que despliega

Otra observacion es que cuando el valor viene del backend 
para desplegarlo en el react-datepicker hay que convertirlo de UTC a local time
para esto use el moment en mi funcion dateAndDefaultTimeFormat
Pero para mandar la fecha del UI al backend no es necesario convertirla a UTC
sino que ya va en formato UTC

Siguiente paso:
3: Agregar estilo al projectForm 
y terminar pendientes del LUNES Aug 1 2019
*/

// poner un control por linea 
// (lap roxima vez usare forms y form groups para ordenar los controles)

/* Martes Sep 17 2019

Usar el modal service no es buena idea 
ya que los actions y el body se insertan por separado
pero al usar forms para salvar modelos tuve que sacar el modelo 
atravez del onchange de los controles. Revisar createQuote.js
talvez la proxima vex use un Modal normal, como en el caso del personModal.js
Y usar un form y los buttons en el mismo archivo.js 
y manejar las validaciones y todo alli mismo 

para el protected routes
https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146
*/


/*
  Jueves Sep 19 2019

  La sugerencia del Misa entorno a crear una propiedad isINitialized en el Store
  ya que el ComponentDidMount ocurre despues del Render
  y en el App.js el render es el que define el switch con todos mis routes

  Ahora, en el componentDIdMount es donde llamo al tryAUtoLogin; que verifica si el token ya se creo
  y en el render es donde defino el Switch con todos mis routes
  pero, los routes que tengo tienen dependencia del State.token; para ver si se permite ir a la ruta o no

  Por lo tanto necesito que un prop isInitialized para renderizar los routes solo despues de que 
  la tryAUtoLogin ya se haya ejecutado y se haya determonado si hay i no token  
 
 */