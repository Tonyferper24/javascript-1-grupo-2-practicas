datosUsuario.push(dataUsuario);
nuevoProductoForm.reset();
console.log(dataUsuario);

imprimirDatos();


const imprimirDatos = () => {
  const Datos = document.getElementById('Datos');
  Datos.innerHTML = '';

  datosUsuario.forEach((datos) => {
    const id = document.createElement('h2');
    const email = document.createElement('p');
    const age = document.createElement('p');
    const userAcoount = document.createElement('h4');
    const first_name = document.createElement('h3');
    const last_name = document.createElement('h3');
    const descripcion = document.createElement('p');
    
  
    id.textContent = `id: ${ datos.nombre } `;
    email.textContent = `email: ${ datos.email } `;
    age.textContent = `Precio: $ ${ datos.age } `;
    userAcoount.textContent = `Cantidad: $ ${ datos.userAcoount} `;
    first_name.textContent = `Categoría ${ datos.first_name } `;
    last_name.textContent = `last_name ${datos.last_name}`;
    descripcion.textContent = `Descripcion: ${datos.descripcion} `;

    contenedor.append(id,email,age,userAcoount,first_name,last_name);

    Datos.appendChild(contenedor);
});

}
