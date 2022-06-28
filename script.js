let facturacion1, facturacion2, facturacion3, facturacion4,facturacion5, facturacion6

do {
    facturacion1 = parseFloat(prompt("Ingrese la Facturacion de Enero"))
    facturacion2 = parseFloat(prompt("Ingrese la Facturacion de Febrero"))
    facturacion3 = parseFloat(prompt("Ingrese la Facturacion de Marzo"))
    facturacion4 = parseFloat(prompt("Ingrese la Facturacion de Abril"))
    facturacion5 = parseFloat(prompt("Ingrese la Facturacion de Mayo"))
    facturacion6 = parseFloat(prompt("Ingrese la Facturacion de Junio"))
    }while (isNaN(facturacion1) || isNaN(facturacion2) || isNaN(facturacion3) || isNaN(facturacion4) || isNaN(facturacion5) || isNaN(facturacion6)) 

   alert((facturacion1+facturacion2+facturacion3+facturacion4+facturacion5+facturacion6)/6)