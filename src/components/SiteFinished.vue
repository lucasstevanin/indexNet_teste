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
      <div class="col-lg-7 col-md-7 position-relative">
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
          <div class="">
            <h1 class="card-title" style="color: green">
              Obrigado<br />
              por criar seu site conosco!
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFinished",
  methods: {
    voltarRota() {
      this.$router.push("/products");
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
