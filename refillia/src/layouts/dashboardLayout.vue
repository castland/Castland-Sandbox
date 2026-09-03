<template>
  <div class="mainInventario mainDashboard">
    <aside class="sidebar">
      <div class="sidebarLogo">
        <img src="" alt="" class="logoApp" />
      </div>

      <slot name="sidebar"></slot>
    </aside>

    <main class="contenido">
      <slot></slot>
    </main>
  </div>
</template>
