function agregarComentario() {
    let nombre = document.getElementById("nombrePaciente").value.trim();
    let comentario = document.getElementById("comentarioPaciente").value.trim();
    
    if (nombre === "" || comentario === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let comentariosContainer = document.getElementById("comentariosContainer");
    
    let nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("col-md-4");
    nuevoComentario.innerHTML = `
        <div class="card p-3 shadow">
            <h5>${nombre}</h5>
            <p>"${comentario}"</p>
            <span class="text-muted">Consulta: ${new Date().toLocaleDateString()}</span>
            <button class="btn btn-danger btn-sm mt-2" onclick="eliminarComentario(this)">Eliminar</button>
        </div>
    `;

    comentariosContainer.appendChild(nuevoComentario);
    document.getElementById("nombrePaciente").value = "";
    document.getElementById("comentarioPaciente").value = "";
}

function eliminarComentario(boton) {
    boton.parentElement.parentElement.remove();
}