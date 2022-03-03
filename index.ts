interface marcasInterface{
    nombre: string;
    anno?: number;
    empresa: string;
} 





let nombre = "MarcasVehiculos";
let anno = 1994;
let empresa = "World";

var toyota: marcasInterface = {
    nombre: "Supra",
    anno:  1994,
    empresa: "Toyoyta SA"

};
var ferrari: marcasInterface = {
    nombre: "rojo",
    anno:  2002,
    empresa: "FerrariCompany"

};

console.log(toyota);
console.log(ferrari);

