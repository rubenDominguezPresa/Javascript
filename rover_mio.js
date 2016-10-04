
var grind=new Array(10);
var x=0;
var y=0;
direccion="S";
function inicializar(){
	for(var i=0;i<10;i++){
		grind[i]=new Array(1);
	}
	for (var i=0;i<10;i++){
		for (var j=0;j<10;j++){
			grind[i][j]="vacio"
		}
	}
	grind[0][0]="rover";
	direccion="S";
}

function mover(comandos){
for (var i=0;i<comandos.length;i++){
	var orden=comandos[i];
	var movimiento=this.ordenesComando[orden];
	var estado="OK";
	estado=this[movimiento]();
	if (estado=="ERR") return;
	}
}

var ordenesComando= {
    'f': 'forward',
    'b': 'back',
    'r': 'turnRight',
    'l': 'turnLeft'
  };

function forward(){
	switch(direccion){
		case "N":
			if(x-1<=10 && x-1>=0 && grind[x-1,y]=="vacio"){
				grind[x-1][y]="rover";
				grind[x][y]="vacio";
				x--;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "S":
			if(x+1<=10 && x+1>=0 && grind[x+1][y]=="vacio"){
				grind[x+1][y]="rover";
				grind[x][y]="vacio";
				x++;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "E":
			if(y+1<=10 && y+1>=0 && grind[x][y+1]=="vacio"){
				grind[x][y+1]="rover";
				grind[x][y]="vacio";
				y++;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "O":
			if(y-1<=10 && y-1>=0 && grind[x][y-1]=="vacio"){
				grind[x][y-1]="rover";
				grind[x][y]="vacio";
				y--;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		default:
			//comando invalido
		break;
	}
}

function back(){
	switch(direccion){
		case "N":
			if(x+1<=10 && x+1>=0 && grind[x+1][y]=="vacio"){
				grind[x+1][y]="rover";
				grind[x][y]="vacio";
				x++;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "S":
			if(x-1<=10 && x-1>=0 && grind[x-1][y]=="vacio"){
				grind[x-1][y]="rover";
				grind[x][y]="vacio";
				x--;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "E":
			if(y-1<=10 && y-1>=0 && grind[x][y-1]=="vacio"){
				grind[x][y-1]="rover";
				grind[x][y]="vacio";
				y--;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "O":
			if(y+1<=10 && y+1>=0 && grind[x][y+1]=="vacio"){
				grind[x][y+1]="rover";
				grind[x][y]="vacio";
				y++;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		default:
			//comando invalido
		break;
	}
}

function turnLeft(){
	switch(direccion){
		case "N":
			direccion="E";
		break
		case "S":
			direccion="O";
		break
		case "E":
			direccion="S";
		break
		case "O":
			direccion="N";
		break
		default:
			//comando invalido
		break;
	}
}

function turnRight(){
	switch(direccion){
		case "N":
			direccion="O";
		break
		case "S":
			direccion="E";
		break
		case "E":
			direccion="N";
		break
		case "O":
			direccion="S";
		break
		default:
			//comando invalido
		break;
	}
}