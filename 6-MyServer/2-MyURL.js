/**
 *  URL: Uniform Resource Locator
 * 
 *  Estructura: protocolo (http), subdominio (www), dominio (example), 
 *              dominio de nivel superior (org), path -> ruta de acceso (courses/programming) y 
 *              parametros de busqueda (order=views&level=1)
 */

const myURL = new URL('https://www.example.org/courses/programming?order=views&level=1');

console.log( myURL.hostname );
console.log( myURL.pathname );
console.log( myURL.searchParams );

console.log( myURL.searchParams.get('order'));