<template>
  <div>
    <nav class="guiaNavBar">
      <div class="guiaBrandLogo"><img src="@/assets/img/the-set-list-logo-light.svg" alt="" /></div>
    </nav>
    <div class="guia">
      <!-- COLORES -->
      <section class="guiaSeccion">
        <p class="subtitulo">Cromatica</p>
        <h2 class="h2">Colores</h2>

        <p class="caption">Brand</p>
        <div class="guiaMuestras">
          <div class="muestra muestraNegro"><span>#030303</span></div>
          <div class="muestra muestraClaro"><span>#E4E4E4</span></div>
          <div class="muestra muestraAmbar"><span>#F2B705</span></div>
          <div class="muestra muestraPurpura"><span>#4330BE</span></div>
          <div class="muestra muestraRojo"><span>#F21A05</span></div>
        </div>

        <p class="caption">Aplicados</p>
        <div class="guiaMuestras">
          <div class="muestra muestraFondo"><span>--color-bg-primary</span></div>
          <div class="muestra muestraSuperficie"><span>--color-bg-surface</span></div>
          <div class="muestra muestraAcento"><span>--color-acento-primary</span></div>
          <div class="muestra muestraSecundario"><span>--color-acento-secundario</span></div>
          <div class="muestra muestraExito"><span>--color-exito</span></div>
          <div class="muestra muestraTerciario"><span>--color-acento-terciario</span></div>
        </div>

        <p class="caption">Opacidad</p>
        <div class="guiaMuestras">
          <div class="muestra muestraSmall muestraAcentoOpacidad">
            <span>--color-acento-opacity</span>
          </div>
          <div class="muestra muestraSmall muestraSecundarioOpacidad">
            <span>--color-secundario-opacity</span>
          </div>
          <div class="muestra muestraSmall muestraTerciarioOpacidad">
            <span>--color-terciario-opacity</span>
          </div>
          <div class="muestra muestraSmall muestraExitoOpacidad">
            <span>--color-exito-opacity</span>
          </div>
        </div>
      </section>

      <!-- TIPOGRAFIA -->
      <section class="guiaSeccion">
        <p class="subtitulo">Tipografía</p>
        <div class="guiaTipoFila">
          <span class="caption">H1 · Montserrat Bold 64px</span>
          <h1 class="h1">The Setlist</h1>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">H2 · Montserrat Bold 32px</span>
          <h2 class="h2">Servicios para tu evento</h2>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">H3 · Montserrat Bold 24px</span>
          <h3 class="h3">Paquete Premium</h3>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">H4 · Montserrat SemiBold 18px</span>
          <h4 class="h4">Detalles del servicio</h4>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">H5 · Montserrat SemiBold 16px</span>
          <h5 class="h4">Barra de Cócteles</h5>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">Cuerpo · Montserrat 16px</span>
          <p>
            Ofrecemos una experiencia musical única para bodas, corporativos y eventos sociales.
          </p>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">Cuerpo Small · Montserrat 14px</span>
          <p class="cuerpoSm">Consulta disponibilidad con al menos 4 semanas de anticipación.</p>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">Caption · Montserrat 12px</span>
          <p class="caption">Categoría · Música en vivo</p>
        </div>
        <div class="guiaTipoFila">
          <span class="caption">Subtitulo · Montserrat 12px</span>
          <p class="subtitulo">Destacado</p>
        </div>
      </section>

      <!-- BOTONES -->
      <section class="guiaSeccion">
        <p class="subtitulo">Botones</p>
        <div class="guiaFila">
          <button class="btn btnPrimario">Reservar</button>
          <button class="btn btnSecundario">Ver paquetes</button>
          <button class="btn btnContorno">Más info</button>
          <button class="btn btnFantasma">Cancelar</button>
          <button class="btn btnPeligro">Eliminar</button>
        </div>
        <div class="guiaFila">
          <button class="btn btnPrimario btnSm">SM</button>
          <button class="btn btnPrimario">Normal</button>
          <button class="btn btnPrimario btnLg">LG</button>
          <button class="btn btnPrimario" disabled>Deshabilitado</button>
        </div>
      </section>

      <!-- ETIQUETAS -->
      <section class="guiaSeccion">
        <p class="subtitulo">Etiquetas</p>
        <div class="guiaFila">
          <span class="etiqueta etiquetaActivo">Activo</span>
          <span class="etiqueta etiquetaInactivo">Inactivo</span>
          <span class="etiqueta etiquetaPendiente">Pendiente</span>
          <span class="etiqueta etiquetaInfo">Info</span>
        </div>
      </section>

      <!-- TARJETAS -->
      <section class="guiaSeccion">
        <p class="subtitulo">Tarjetas</p>
        <div class="guiaTarjetas">
          <div class="tarjeta">
            <div class="guiaImagenTarjeta">
              <img src="@/assets/img/mariachi.jpg" alt="Mariachi" />
            </div>
            <div class="tarjetaCuerpo">
              <p class="subtitulo">Música en vivo</p>
              <h3 class="h3">Mariachi Completo</h3>
              <p class="cuerpoSm">Músicos profesionales.</p>
            </div>
            <div class="tarjetaPie">
              <span class="guiaPrecio">₡250.000</span>
              <button class="btn btnContorno btnSm">Agregar</button>
            </div>
          </div>
          <div class="tarjeta tarjetaSeleccionada">
            <div class="guiaImagenTarjeta">
              <img src="@/assets/img/barra-coctel.jpg" alt="Barra de Cócteles" />
            </div>
            <div class="tarjetaCuerpo">
              <p class="subtitulo">Catering</p>
              <h3 class="h3">Barra de Cócteles</h3>
              <p class="cuerpoSm">Bartender profesional con carta de cócteles clásicos.</p>
            </div>
            <div class="tarjetaPie">
              <span class="guiaPrecio">₡280.000</span>
              <button class="btn btnPrimario btnSm">Agregado ✓</button>
            </div>
          </div>
        </div>
      </section>

      <!-- FORMULARIOS -->
      <section class="guiaSeccion">
        <p class="subtitulo">Formularios</p>
        <div class="guiaFormulario">
          <div class="campoFormulario">
            <label>Nombre Completo</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div class="campoFormulario">
            <label>Tipo de evento</label>
            <select>
              <option>Boda</option>
              <option>Corporativo</option>
            </select>
          </div>
          <div class="campoFormulario">
            <label>Detalles Adicionales</label>
            <textarea rows="2" placeholder="Cuéntanos más..."></textarea>
          </div>
        </div>
      </section>

      <!-- INTERRUPTORES -->
      <section class="guiaSeccion">
        <p class="subtitulo">Toggle</p>
        <div class="guiaFila">
          <label class="interruptor"
            ><input type="checkbox" /><span class="interruptorDeslizador"></span
          ></label>
          <label class="interruptor"
            ><input type="checkbox" checked /><span class="interruptorDeslizador"></span
          ></label>
        </div>
      </section>

      <!-- ESPACIADO -->
      <section class="guiaSeccion">
        <p class="subtitulo">Espaciado</p>
        <div class="guiaEspaciado">
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp</span>
            <div class="guiaBarraEsp guiaBarraSp"></div>
            <span class="cuerpoSm">2px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-1</span>
            <div class="guiaBarraEsp guiaBarraSp1"></div>
            <span class="cuerpoSm">8px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-2</span>
            <div class="guiaBarraEsp guiaBarraSp2"></div>
            <span class="cuerpoSm">16px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-3</span>
            <div class="guiaBarraEsp guiaBarraSp3"></div>
            <span class="cuerpoSm">24px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-4</span>
            <div class="guiaBarraEsp guiaBarraSp4"></div>
            <span class="cuerpoSm">32px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-6</span>
            <div class="guiaBarraEsp guiaBarraSp6"></div>
            <span class="cuerpoSm">48px</span>
          </div>
          <div class="guiaFilaEsp">
            <span class="caption guiaEtiquetaEsp">--sp-8</span>
            <div class="guiaBarraEsp guiaBarraSp8"></div>
            <span class="cuerpoSm">64px</span>
          </div>
        </div>
      </section>

      <!-- ICONOS -->
      <section class="guiaSeccion">
        <p class="subtitulo">Iconos — Heroicons</p>
        <div class="guiaFila">
          <div class="guiaIcono"><MusicalNoteIcon /><span class="caption">música</span></div>
          <div class="guiaIcono"><CalendarDaysIcon /><span class="caption">fecha</span></div>
          <div class="guiaIcono"><UserIcon /><span class="caption">usuario</span></div>
          <div class="guiaIcono"><MapPinIcon /><span class="caption">ubicación</span></div>
          <div class="guiaIcono"><PhoneIcon /><span class="caption">teléfono</span></div>
          <div class="guiaIcono"><EnvelopeIcon /><span class="caption">correo</span></div>
          <div class="guiaIcono"><Cog6ToothIcon /><span class="caption">ajustes</span></div>
          <div class="guiaIcono"><ArrowRightIcon /><span class="caption">siguiente</span></div>
          <div class="guiaIcono"><CheckIcon /><span class="caption">confirmar</span></div>
          <div class="guiaIcono"><XMarkIcon /><span class="caption">cerrar</span></div>
          <div class="guiaIcono"><TrashIcon /><span class="caption">eliminar</span></div>
          <div class="guiaIcono"><PencilIcon /><span class="caption">editar</span></div>
          <div class="guiaIcono"><PlusIcon /><span class="caption">agregar</span></div>
        </div>
      </section>

      <!-- SOMBRAS Y RADIOS -->
      <section class="guiaSeccion">
        <p class="subtitulo">Sombras</p>
        <div class="guiaFila">
          <div class="guiaCajaSombra guiaCajaSombraSm">sm</div>
          <div class="guiaCajaSombra guiaCajaSombraMd">md</div>
          <div class="guiaCajaSombra guiaCajaSombraAcento">acento</div>
        </div>

        <p class="subtitulo">Radio de Borde</p>
        <div class="guiaFila">
          <div class="guiaCajaRadio guiaCajaRadioSm">sm</div>
          <div class="guiaCajaRadio guiaCajaRadioMd">md</div>
          <div class="guiaCajaRadio guiaCajaRadioLg">lg</div>
          <div class="guiaCajaRadio guiaCajaRadioPill">pill</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
/* ICONOS */
import {
  MusicalNoteIcon,
  CalendarDaysIcon,
  UserIcon,
  ShoppingCartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline'
</script>