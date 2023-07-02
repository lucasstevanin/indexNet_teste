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
              Informe os horários em que o estabelecimento estará aberto:
            </h6>
          </div>
          <div class="d-flex mt-5">
            <select
              v-model="selectedOption1"
              required
              class="form-select"
              aria-label="Default select example"
              style="width: 40%"
            >
              <option value="1">06:00</option>
              <option value="2">07:00</option>
              <option value="3">08:00</option>
              <option value="4">09:00</option>
              <option value="5">10:00</option>
              <option value="6">11:00</option>
              <option value="7">12:00</option>
              <option value="8">13:00</option>
              <option value="9">14:00</option>
              <option value="10">15:00</option>
              <option value="11">16:00</option>
              <option value="12">17:00</option>
              <option value="13">18:00</option>
              <option value="14">19:00</option>
              <option value="15">20:00</option>
              <option value="16">21:00</option>
              <option value="17">22:00</option>
              <option value="18">23:00</option>
            </select>
            <p style="font-size: 1.1rem; font-weight: 700" class="mt-2">
              até as
            </p>
            <select
              required
              v-model="selectedOption2"
              class="form-select"
              aria-label="Default select example"
              style="width: 40%"
            >
              <option value="1">06:00</option>
              <option value="2">07:00</option>
              <option value="3">08:00</option>
              <option value="4">09:00</option>
              <option value="5">10:00</option>
              <option value="6">11:00</option>
              <option value="7">12:00</option>
              <option value="8">13:00</option>
              <option value="9">14:00</option>
              <option value="10">15:00</option>
              <option value="11">16:00</option>
              <option value="12">17:00</option>
              <option value="13">18:00</option>
              <option value="14">19:00</option>
              <option value="15">20:00</option>
              <option value="16">21:00</option>
              <option value="17">22:00</option>
              <option value="18">23:00</option>
            </select>
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
  name: "TimeOpen",
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
        alert("Por favor, selecione o horário de abertura da loja.");
      } else if (!this.selectedOption2) {
        // Opção selecionada, continuar com a ação desejada
        alert("Por favor, selecione o horário de fechamento.");
      } else {
        this.proximaRota();
      }
    },
    proximaRota() {
      this.$router.push("/categories");
    },
    voltarRota() {
      this.$router.push("/");
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
