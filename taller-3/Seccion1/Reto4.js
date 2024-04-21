const events = [];

const createEvent = () =>{
    let name = prompt("Ingrese el nombre del evento: ");
    let date = prompt("Ingrese la fecha del evento");
    let description = prompt("Ingrese la descripcion del evento");
    return {
        name,
        date,
        description
    }
}

while(confirm("desea agregar evento?")){
    const evento = createEvent();
    console.log(evento);
    Object.assign( evento , { id : events.length} ); 
    events.push(evento);
}

const eventsToShow = []
events.forEach( e =>{
    eventsToShow.push(Object.values(e))
} )

alert("Estos son los eventos creados:\n (nombre, fecha, descripcion, id)\n"+ eventsToShow.join("\n"));

while(confirm("Desea buscar un evento por nombre?:")){
    const nameToSearch = prompt("Ingrese el nombre del evento a buscar:");
    let f = false;
    events.forEach( e => {
        if( e["name"] === nameToSearch) {
            alert("Evento encontrado\n" + JSON.stringify(e)); 
            f = true;
            }
        }
    )
    !f ? alert("Evento no encontrado") : null;
}

while(confirm("Modificar un evento por id: ")){
    const idx = prompt("Ingrese el id del evento a modificar: ");
    if (idx >= 0 && idx < events.length){
        const name = confirm("Desea modificar el nombre?") ? prompt("Ingrese el nuevo nombre") : events[idx]["name"];
        const date = confirm("Desea modificar la fecha?") ? prompt("Ingrese la nueva fecha") : events[idx]["date"];
        const description = confirm("Desea modificar la descripcion?") ? prompt("Ingrese la nueva descripcion") : events[idx]["description"];
        const newEvent = {
            name,
            date,
            description,
            id : idx
        }
        Object.assign(events[idx], newEvent);
        console.log(events[idx]);
    }   
    else{
        alert("id no existe")
    }
}

while(confirm("Eliminar un evento por id: ")){
    const idx = prompt("Ingrese el id del evento a eliminar: ");
    if (idx >= 0 && idx < events.length){
        events.splice(idx, 1);
        alert("evento eliminado");
        console.log(events);
    }   
    else{
        alert("id no existe")
    }
}