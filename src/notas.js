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
