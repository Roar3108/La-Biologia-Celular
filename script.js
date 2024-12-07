// Función para mostrar u ocultar información
function toggleInfo(id) {
    const info = document.getElementById(id);
    
    // Si la información está oculta, la mostramos
    if (info.style.display === "none") {
        info.style.display = "block";
    } 
    // Si la información está visible, la ocultamos
    else {
        info.style.display = "none";
    }
}
