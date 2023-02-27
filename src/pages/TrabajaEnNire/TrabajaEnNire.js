import React from "react";

export default function TrabajaEnNire() {
  return (
    <div className="contanier-fluid mt-5">
      <h1 className="text-center">Trabajá en Ñire</h1>
      <h3 className="text-center">
        Llená el formulario y pronto nos contactaremos
      </h3>
      <form class="container-fluid mt-5 pt-3 pb-3 row g-3 bg-light">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            value=""
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            value=""
            required
          />
        </div>
        <div class="col-md-4">
        <label for="floatingInput" class="form-label">Email</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label">Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">
            Subí tu Curriculum
          </label>
          <input type="file" class="form-control" aria-label="file example" required/>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-dark" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}
