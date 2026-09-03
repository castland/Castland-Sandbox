<template>
  <div class="mainLogin">
    <div class="login">
      <h3>Hola de nuevo!</h3>

      <div class="formGroup">
        <label for="usuario">Usuario</label>
        <input type="text" placeholder="Admin" />
      </div>

      <div class="formGroup">
        <label for="password">Contraseña</label>
        <input type="password" placeholder="******" />
      </div>

      <button class="botonPrimario" @click="login">
        Ingresar <img src="@/assets/icons/arrow-right.svg" class="iconoBoton" alt="" />
      </button>

      <p v-if="mensajeError" class="mensajeError">
        <img src="@/assets/icons/exclamation-triangle-fill.svg" alt="Error" />
        {{ mensajeError }}
      </p>
    </div>

    <div class="slider">
      <img :src="imagenes[indice]" class="sliderImagen" />
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/imagenes/descarga.jpg'
import img2 from '@/assets/imagenes/descarga (1).jpg'
import img3 from '@/assets/imagenes/descarga (2).jpg'

export default {
  data() {
    return {
      usuario: '',
      password: '',
      mensajeError: '',
      indice: 0,
      imagenes: [img1, img2, img3],
    }
  },
  methods: {
    login() {
      if (!this.usuario || !this.password) {
        this.mensajeError = 'Por favor, ingresa tu usuario y contraseña'
        return
      }

      if (this.usuario === 'admin' && this.password === '123456') {
        this.$router.push('/inventario')
      } else if (this.usuario === 'vendedor' && this.password === '123456') {
        this.$router.push('/vendedor')
      } else {
        this.mensajeError = 'Usuario o contraseña incorrectos'
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.indice = (this.indice + 1) % this.imagenes.length
    }, 2000)
  },
}
</script>
