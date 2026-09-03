<template>
  <Dashboard>
    <template #sidebar>
      <h1>CONTENIDO SIDEBAR</h1>
    </template>

    <div class="inventario">
      <div class="inventarioAcciones">
        <div class="accionesContenedor">
          <h2>Inventario</h2>
        </div>

        <div class="accionesContenedor">
          <div class="alerta"><img src="" alt="" class="iconoAlerta" />productos en alerta</div>
        </div>

        <div class="accionesContenedor">
          <button class="botonPrimario" @click="modalNuevoProducto = true">
            <img src="" alt="" class="iconoBoton" />Nuevo Producto
          </button>
        </div>

        <div class="inventarioTabla">
          <table class="tablaInventario">
            <thead>
              <tr>
                <th># Articulo</th>
                <th>Categoria</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Unidad</th>
                <th>Cantidad</th>
                <th>Minimo</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(prod, index) in productos" :key="index">
                <td>{{ prod.articulo }}</td>
                <td>{{ prod.categoria }}</td>
                <td>{{ prod.nombre }}</td>
                <td>{{ prod.precio }}</td>
                <td>{{ prod.unidad }}</td>
                <td>{{ prod.cantidad }}</td>
                <td>{{ prod.minimo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal" v-if="modalNuevoProducto">
      <div class="modalContenido">
        <h2>Nuevo Producto</h2>

        <form @submit.prevent="agregarProducto">
          <label for="">Articulo</label>
          <input type="text" v-model="nuevoProducto.articulo" />

          <label for="">Categoria</label>
          <input type="text" v-model="nuevoProducto.categoria" />

          <label for="">Nombre</label>
          <input type="text" v-model="nuevoProducto.nombre" />

          <label for="">Precio</label>
          <input type="number" v-model="nuevoProducto.precio" />

          <label for="">Unidad</label>
          <input type="text" v-model="nuevoProducto.unidad" />

          <label for="">Cantidad</label>
          <input type="number" v-model="nuevoProducto.cantidad" />

          <label for="">Minimo</label>
          <input type="number" v-model="nuevoProducto.minimo" />

          <button type="submit">Guardar</button>
          <button type="button" @click="modalNuevoProducto = false">Cancelar</button>
        </form>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from '@/layouts/dashboardLayout.vue'

export default {
  components: {
    Dashboard,
  },

  data() {
    return {
      modalNuevoProducto: false,

      error: '',

      nuevoProducto: {
        articulo: '',
        categoria: '',
        nombre: '',
        precio: '',
        unidad: '',
        cantidad: '',
        minimo: '',
      },

      productos: [
        {
          articulo: '001',
          categoria: 'Ejemplo',
          nombre: 'Producto de Prueba',
          precio: '100',
          unidad: 'kg',
          cantidad: '10',
          minimo: '2',
        },
      ],
    }
  },

  methods: {
    agregarProducto() {
      this.productos.push({
        articulo: this.nuevoProducto.articulo,
        categoria: this.nuevoProducto.categoria,
        nombre: this.nuevoProducto.nombre,
        precio: this.nuevoProducto.precio,
        unidad: this.nuevoProducto.unidad,
        cantidad: this.nuevoProducto.cantidad,
        minimo: this.nuevoProducto.minimo,
        editando: false,
      })

      this.nuevoProducto = {
        articulo: '',
        categoria: '',
        nombre: '',
        precio: '',
        unidad: '',
        cantidad: '',
        minimo: '',
      }

      this.modalNuevoProducto = false
    },

    productosFiltrados() {
      let resultado = this.productos
      if (this.filtrarAlertas) {
        resultado = resultado.filter((prod) => prod.cantidad <= prod.minimo)
      }
      if (this.filtroCategoria) {
        resultado = resultado.filter((prod) => prod.categoria === this.filtroCategoria)
      }
      return resultado
    },
  },
}
</script>
