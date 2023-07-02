<template>
  <div
    class="card shadow rounded position-absolute top-50 start-50 translate-middle"
    style="max-width: 800px; width: 90%; margin: 0 auto"
  >
    <div class="row g-0">
      <div class="col-lg-4 col-md-5 d-block d-md-none mt-5">
        <img
          src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          class="img-fluid cover-image pt-5"
          style="object-fit: cover"
          alt="..."
        />
      </div>
      <div class="col-lg-5 col-md-5 d-none d-md-block">
        <img
          src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          class="img-fluid rounded-start"
          style="width: 340px; height: 100%; object-fit: cover"
          alt="..."
        />
      </div>
      <div class="col-lg-7 col-md-7">
        <div class="card-body">
          <div class="mb-5 mt-3">
            <div>
              <img src="../assets/icone.jpg" alt="" width="50" height="50" />
              <h2 class="card-title fw-bolder" style="color: green">
                DropSite
              </h2>
            </div>
            <p class="card-text">
              <small
                class="text-body-secondary fw-semibold"
                style="color: rgb(71, 71, 71)"
              >
                A melhor plataforma para criar seu site!</small
              >
            </p>
          </div>
          <div>
            <p class="fw-semibold" style="color: rgb(71, 71, 71)">
              <span class="fw-bolder text-decoration-underline">Tipo:</span>
              Estabelecimento de entrega de rações para animais.
            </p>
          </div>
          <div>
            <h6 class="card-title" style="color: green">
              Informe a quantidade de categorias de produtos:
            </h6>
          </div>
          <div class="mt-5">
            <div style="font-size: 1.1rem">
              <p
                class="card-title fw-medium"
                style="color: rgb(71, 71, 71); font-size: 0.95rem"
              >
                Quantidade de categorias:
              </p>

              <div class="form-check fw-semibold">
                <div>
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="1 a 5"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    de 1 a 5
                  </label>
                </div>
                <div class="mt-1">
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="5 a 10"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    5 a 10
                  </label>
                </div>
                <div class="mt-1">
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="10 a 15"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    10 a 15
                  </label>
                </div>
                <div class="mt-1">
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="15 a 20"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    15 a 20
                  </label>
                </div>
                <div class="mt-1">
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="20 a 25"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    20 a 25
                  </label>
                </div>
                <div class="mt-1">
                  <input
                    style="border: 1px solid rgb(90, 90, 90)"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="25+"
                    v-model="selectedOption"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    25+
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex mt-5 justify-content-md-between">
            <button
              @click="voltarRota"
              class="btn btn-primary"
              type="button"
              style="
                background-color: rgb(0, 82, 150);
                font-size: large;
                font-weight: 600;
                border: none;
              "
            >
              Voltar
            </button>
            <button
              @click="validateForm"
              class="btn btn-primary"
              type="button"
              style="
                background-color: rgb(0, 180, 0);
                font-size: large;
                font-weight: 600;
                border: none;
              "
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseCategories",
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    validateForm() {
      if (!this.selectedOption) {
        // Nenhuma opção selecionada, exibir mensagem de erro
        alert("Por favor, selecione uma opção.");
      } else {
        // Opção selecionada, continuar com a ação desejada
        this.proximaRota();
      }
    },
    proximaRota() {
      this.$router.push("/products");
    },
    voltarRota() {
      this.$router.push("/TimeOpen");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.translate-middle {
  transform: translate(-50%, -50%);
}
.cover-image {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  max-height: 600px;
}
.custom-input::placeholder {
  color: rgb(167, 167, 167);
  font-size: small;
}
</style>
