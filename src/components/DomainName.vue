<template>
  <div
    class="card shadow rounded position-absolute top-50 start-50 translate-middle"
    style="max-width: 800px; width: 90%; margin: 0 auto"
  >
    <div class="row g-0">
      <div class="col-lg-4 col-md-5 d-block d-md-none">
        <img
          src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          class="img-fluid cover-image"
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
          <div class="mb-3 mt-3">
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
              Escolha o nome e dominio do seu site
            </h6>
            <div class="mt-4">
              <p
                class="card-title fw-medium"
                style="color: rgb(71, 71, 71); font-size: 0.95rem"
              >
                Nome do site:
              </p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  placeholder="exemplo: Lojas Brasil"
                  class="form-control custom-input"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  v-model="selectedOption1"
                />
              </div>
            </div>
            <div class="mt-3">
              <p
                class="card-title fw-medium"
                style="color: rgb(71, 71, 71); font-size: 0.95rem"
              >
                Domínio:
              </p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  placeholder="nomedasualoja"
                  class="form-control custom-input"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  v-model="selectedOption2"
                />
                <span
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                  style="font-size: 0.9rem"
                  >.dropsite.com.br</span
                >
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex mb-3 justify-content-md-end">
            <button
              @click="validateForm"
              class="btn btn-primary me-md-2 mt-3"
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
  name: "DomainName",
  data() {
    return {
      selectedOption1: null,
      selectedOption2: null,
    };
  },
  methods: {
    validateForm() {
      if (!this.selectedOption1) {
        // Nenhuma opção selecionada, exibir mensagem de erro
        alert("Por favor, preencha o nome do site.");
      } else if (!this.selectedOption2) {
        // Opção selecionada, continuar com a ação desejada
        alert("Por favor, preencha o domínio do site.");
      } else {
        this.proximaRota();
      }
    },
    proximaRota() {
      this.$router.push("/timeOpen");
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
