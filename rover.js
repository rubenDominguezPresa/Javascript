
var grind=new Array(10);
var rovers=[];

function inicializar(){
	for(var i=0;i<10;i++){
		grind[i]=new Array(1);
	}
	for (var i=0;i<10;i++){
		for (var j=0;j<10;j++){
			grind[i][j]="vacio"
		}
	}
	//grind[0][0]="rover";
	//direccion="S";
}

function inicializarRover(nombre,x, y, direccion){
  if (grind[x][y]=="vacio"){
    rovers[nombre]=[x,y,direccion];
    grind[x][y]=nombre;
  }
  else{
    console.log("espacio ocupado por "+grind[x][y]);
  }
}

function mover(nombre, comandos){
  var i=0;
  var estado="OK";
  var x=rovers[nombre][0];
  var y=rovers[nombre][1];
  var direccion=rovers[nombre][2];
while(estado!="ERR" && i<comandos.length){
	var orden=comandos[i];
	var movimiento=this.ordenesComando[orden];
	estado=this[movimiento](nombre);
  i++;
	}
  console.log("ubicacion del rover: ("+nombre+"  "+rovers[nombre][0]+","+rovers[nombre][1]+") Direccion: "+rovers[nombre][2]);
}

var ordenesComando= {
    'f': 'forward',
    'b': 'back',
    'r': 'turnRight',
    'l': 'turnLeft'
  };

function forward(nombre){
	var x=rovers[nombre][0];
  var y=rovers[nombre][1];
  switch(rovers[nombre][2]){
		case "N":
			if(x-1<=10 && x-1>=0 && grind[x-1][y]=="vacio"){
				grind[x-1][y]=nombre;
				grind[x][y]="vacio";
				x--;
        rovers[nombre][0]=x;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "S":
			if(x+1<=10 && x+1>=0 && grind[x+1][y]=="vacio"){
				grind[x+1][y]=nombre;
				grind[x][y]="vacio";
				x++;
        rovers[nombre][0]=x;
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
        rovers[nombre][1]=y;
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
        rovers[nombre][1]=y;
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

function back(nombre){
	var x=rovers[nombre][0];
  var y=rovers[nombre][1];
  switch(rovers[nombre][2]){
		case "N":
			if(x+1<=10 && x+1>=0 && grind[x+1][y]=="vacio"){
				grind[x+1][y]=nombre;
				grind[x][y]="vacio";
				x++;
        rovers[nombre][0]=x;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "S":
			if(x-1<=10 && x-1>=0 && grind[x-1][y]=="vacio"){
				grind[x-1][y]=nombre;
				grind[x][y]="vacio";
				x--;
        rovers[nombre][0]=x;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "E":
			if(y-1<=10 && y-1>=0 && grind[x][y-1]=="vacio"){
				grind[x][y-1]=nombre;
				grind[x][y]="vacio";
				y--;
        rovers[nombre][1]=y;
			} 
			else{
				alert('movimiento invalido');
				return "ERR";
			}
		break
		case "O":
			if(y+1<=10 && y+1>=0 && grind[x][y+1]=="vacio"){
				grind[x][y+1]=nombre;
				grind[x][y]="vacio";
				y++;
        rovers[nombre][1]=y;
			} 
			else{
				console.log('movimiento invalido');
				return "ERR";
			}
		break
		default:
			//comando invalido
		break;
	}
}

function turnLeft(nombre){
	
  switch(rovers[nombre][2]){
		case "N":
			rovers[nombre][2]="E";
		break
		case "S":
			rovers[nombre][2]="O";
		break
		case "E":
			rovers[nombre][2]="S";
		break
		case "O":
			rovers[nombre][2]="N";
		break
		default:
			//comando invalido
		break;
	}
}

function turnRight(nombre){
  switch(rovers[nombre][2]){
		case "N":
			rovers[nombre][2]="O";
		break
		case "S":
			rovers[nombre][2]="E";
		break
		case "E":
			rovers[nombre][2]="N";
		break
		case "O":
			rovers[nombre][2]="S";
		break
		default:
			//comando invalido
		break;
	}
}