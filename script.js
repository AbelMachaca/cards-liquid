
  document.getElementById("generateBtn").addEventListener("click", function() {
    // Obtener valores
    const p1_href = document.getElementById('p1_href').value;
    const p1_img = document.getElementById('p1_img').value;
    const p1_button = document.getElementById('p1_button').value;
    const p1_title = document.getElementById('p1_title').value;

    const p2_href = document.getElementById('p2_href').value;
    const p2_img = document.getElementById('p2_img').value;
    const p2_button = document.getElementById('p2_button').value;
    const p2_title = document.getElementById('p2_title').value;

    const p3_href = document.getElementById('p3_href').value;
    const p3_img = document.getElementById('p3_img').value;
    const p3_button = document.getElementById('p3_button').value;
    const p3_title = document.getElementById('p3_title').value;

    const p4_href = document.getElementById('p4_href').value;
    const p4_img = document.getElementById('p4_img').value;
    const p4_button = document.getElementById('p4_button').value;
    const p4_title = document.getElementById('p4_title').value;

    // Código base con reemplazo
    let code = `
<style>
  #custom-image-grid {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    margin: auto;
    table-layout: fixed; /* Asegura columnas de ancho fijo */
  }

  #custom-image-grid td {
    width: 50%; /* Cada columna ocupa la mitad del ancho */
    vertical-align: top;
  }

  #custom-image-grid img {
    display: block;
    width: 100%;
    height: 290px; /* Ajustar altura si se desea */
    object-fit: cover;
    border: none;
  }

  .image-caption {
    text-align: center;
    font-weight: normal;
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }

  #view-more-button {
    display: block;
    text-align: center;
    background-color: #000; 
    color: #fff; 
    padding: 10px;
    border-radius: 15px; 
    text-decoration: none;
    margin-top: 5px;
    width: 120px; 
    height: auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    font-weight: normal;
  }

  #view-more-button:hover {
    background-color: #333;
  }

  #custom-image-grid tr:first-child td {
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 900px) {
    #custom-image-grid img {
      /* Ajustes opcionales para móvil */
        #view-more-button{
    border: 2px solid rgba(128, 128, 128); /* Borde gris transparente */
  border-radius: 5px; /* Bordes redondeados */
    }
  }
</style>

<table id="custom-image-grid">
  <tr>
    <td id="img-link-1">
      <a href="${p1_href}" target="_blank">
        <img src="${p1_img}" alt="${p1_title}">
      </a>
      <div class="image-caption">${p1_title}</div>
      <a href="${p1_button}" target="_blank" id="view-more-button">Ver más</a>
    </td>
    <td id="img-link-2">
      <a href="${p2_href}" target="_blank">
        <img src="${p2_img}" alt="${p2_title}">
      </a>
      <div class="image-caption">${p2_title}</div>
      <a href="${p2_button}" target="_blank" id="view-more-button">Ver más</a>
    </td>
  </tr>
  <tr>
    <td id="img-link-3">
      <a href="${p3_href}" target="_blank">
        <img src="${p3_img}" alt="${p3_title}">
      </a>
      <div class="image-caption">${p3_title}</div>
      <a href="${p3_button}" target="_blank" id="view-more-button">Ver más</a>
    </td>
    <td id="img-link-4">
      <a href="${p4_href}" target="_blank">
        <img src="${p4_img}" alt="${p4_title}">
      </a>
      <div class="image-caption">${p4_title}</div>
      <a href="${p4_button}" target="_blank" id="view-more-button">Ver más</a>
    </td>
  </tr>
</table>

<div>
  {{ open_tracking }}
</div>

<div>
  {{ open_tracking_block }}
</div>
`;

    // Insertar el código en el textarea
    document.getElementById('result-code').value = code.trim();

    // Preparar el código para la vista previa (eliminando los tracking)
    let previewCode = code.replace('{{ open_tracking }}', '').replace('{{ open_tracking_block }}', '');

    // Insertar la vista previa
    document.getElementById('preview-box').innerHTML = previewCode;
  });

  // Copiar el código al portapapeles con una notificación tipo toast
  document.getElementById('copyBtn').addEventListener('click', function() {
    const codeContent = document.getElementById('result-code').value;
    navigator.clipboard.writeText(codeContent).then(() => {
      showToast();
    });
  });

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Muestra un toast (notificación emergente) durante 3 segundos.
   * @function
   */
/******  d0db20fc-f1f1-403a-bb2f-6f7a8d5a89e2  *******/
  function showToast() {
    const toast = document.getElementById('toast');
    toast.className = 'show';
    setTimeout(() => {
      toast.className = toast.className.replace('show', '');
    }, 3000);
  }
