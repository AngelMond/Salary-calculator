


/*
calculadora de salario

    1-Pedir nombre del empleado 
    2-Cuanto gana por dia 
    3-Cuantos dias trabajo

    hacer el calculo de su salario y mostrarlo 
*/

//Mensaje inicio
alert("Salary calculator")

//Solicitud para ingresar tu nombre
var  nombreEmpleado = prompt("Please enter the employee name");

var empleado = nombreEmpleado;

var pagoPorDia = parseInt(prompt(" How much earn per day? "));
var diasTrabajados = parseInt(prompt(" How many days you worked last month?"));

var salario = pagoPorDia * diasTrabajados;



alert(empleado + " earn: " + salario + " this month ")