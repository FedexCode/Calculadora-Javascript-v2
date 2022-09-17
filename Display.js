//encargada de controlar la calculadora y la clase que va a interactuar con los botones y mostrarlo en display

class Display {
    constructor(displayValorBefore, displayValorActualy) {
        this.displayValorActualy = displayValorActualy;
        this.displayValorBefore = displayValorBefore;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined; //guarda el tipo de operacion que esta usando el usuario
        this.valorActualy = '';
        this.valorBefore = '';    
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: '*',
            restar: '-',
        }
    }

    borrar() {
        this.valorActualy = this.valorActualy.toString().slice(0,-1);
        this.imprimirValoresEnPantalla();
    }

    borrarTodo() {
        this.valorActualy = '';
        this.valorBefore = '';
        this.tipoDeOperacion = undefined;
        this.imprimirValoresEnPantalla();
    }

    computar(OperacionAritmetica) {
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = OperacionAritmetica;
        this.valorBefore = this.valorActualy || this.valorBefore;
        this.valorActualy = '';
        this.imprimirValoresEnPantalla();
    }


    agregarNumero(numero) {
        if(numero === '.' && this.valorActualy.includes('.')) return
        this.valorActualy = this.valorActualy.toString() + numero.toString();
        this.imprimirValoresEnPantalla();
    }
    
    imprimirValoresEnPantalla() {
        this.displayValorActualy.textContent = this.valorActualy;
        this.displayValorBefore.textContent = `${this.valorBefore} ${this.signos[this.tipoDeOperacion] || ''}`;
    } 

    calcular () { //toma los valores que tiene cargado el display y se los da a la calculadora para que realice el calculo
        const valorBefore = parseFloat(this.valorBefore);
        const valorActualy = parseFloat(this.valorActualy);

        if( isNaN (valorActualy) || isNaN(valorBefore) ) return
        this.valorActualy = this.calculadora[this.tipoDeOperacion](valorBefore, valorActualy);
    }

}

