function generarMenuFuncionalidades()
{
    const menuFuncionalidades = `<nav class="navbar navbar-expand-lg bg-light fixed-top"> <!-- Agregamos la clase "fixed-top" para fijar la barra de navegación en la parte superior -->
    <div class="container-fluid">
      
      <a class="navbar-brand" href="#"><a class="navbar-brand" href="#">
        <img src="../IMG/LOGOIX.svg" alt="Bootstrap" width="30" height="34">
      </a>
  </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 center"> <!-- Utilizamos la clase "center" para centrar los elementos -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html"><button type="button" class="btn ">INICIO</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Funcionalidades.html"><button type="button" class="btn ">PREGUNTAS 1-5</button></a>
          </li>
      
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Preguntas Frecuente.html"><button type="button" class="btn ">PREGUNTAS 6-11</button></a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>`;

  return menuFuncionalidades;
}