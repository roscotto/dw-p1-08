/**
 * Calcula y muestra el precio total a partir de precio e IVA
 * @returns 
 */
function calcular() {
    /* Pide los datos */
    let precio = pedirPrecio();
    let iva = pedirIVA();
    /* Calcula el total */
    let total = calcularTotal(precio, iva);
    /* Verifico que no haya dado mal el calculo */
    if(total === -1) { return; }
    /* Imprimo el string con los datos */
    console.log(getString(precio, iva, total));
}