<script>
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import VirtualScroller from "primevue/virtualscroller";
import Carousel from "primevue/carousel";
import { ProjetoService } from "../services/ProjetoService";

export default {
  name: "HomeView",
  data() {
    return {
      titulo: "Bárbara Toledo",
      subtitulo: "Dev Front-End | Mobile",
      sobreMim:
        "Sou uma desenvolvedora com foco em criar aplicações Front-End e Mobile. Desde 2021, venho me especializando nessa área, buscando constantemente desafios para me tornar uma profissional cada vez melhor. Com experiência em UX/UI, Vue.js e React Native, sou capaz de criar interfaces intuitivas e eficientes. Acredito no poder transformador da tecnologia e sou apaixonada por ler e ouvir música, o que me inspira e ajuda a encontrar soluções criativas. Estou animada para compartilhar meus projetos e colaborar com outras pessoas que compartilham a mesma paixão pela tecnologia.",
      products: null,
      responsiveOptions: [
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "991px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  components: {
    Button,
    Card,
    Divider,
    VirtualScroller,
    Carousel,
  },
  methods: {
    whatsapp: function () {
      window.open("https://wa.me/5512988455205");
    },
    email: function () {
      window.open("mailto:barbara-teresa@outlook.com");
    },
    linkedin: function () {
      window.open("https://www.linkedin.com/in/barbara-teresa-toledo/");
    },
    github: function () {
      window.open("https://github.com/barbara-teresa-toledo");
    },
    handleLink(link) {
      window.open(link)
    }
  },
  mounted() {
    ProjetoService.getProducts().then((data) => (this.products = data));
  },
};
</script>

<template>
  <div class="conteudo flex min-h-screen max-w-full">
    <main class="py-5 flex flex-column align-items-center justify-content-center w-full">

      <div class="mt-5 md:mb-8 mb-6 flex flex-column align-items-center justify-content-center text-center ">
        <h1 class="titulo text-5xl mb-2 md:text-6xl white-space-nowrap">
          {{ titulo }}
        </h1>
        <h2 class="titulo font-light uppercase text-xl md:text-3xl white-space-nowrap">
          {{ subtitulo }}
        </h2>
      </div>

      <div class="mb-7 flex flex-column align-items-center justify-content-center text-center w-10">
        <h3 class="titulo mb-3 md:mb-5 uppercase md:text-xl">Sobre</h3>
        <p class="text-center line-height-3 md:text-lg">{{ sobreMim }}</p>
      </div>

      <div class="mb-7 flex flex-column align-items-center justify-content-center text-center">
        <h3 class="titulo mb-3 md:mb-5 uppercase md:text-xl">Skills</h3>
        <div class="flex justify-content-center gap-3 flex-wrap">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"
            class="animacao" alt="html" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" class="animacao"
            alt="css" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"
            class="animacao" alt="javascript" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50"
            class="animacao" alt="typescript" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"
            class="animacao" alt="react" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="50"
            class="animacao" alt="vue js" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50"
            class="animacao" alt="tailwind" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="50"
            class="animacao" alt="bootstrap" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" width="50"
            class="animacao" alt="laravel" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"
            class="animacao" alt="node js" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="50"
            class="animacao" alt="nest js" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" width="50"
            class="animacao" alt="jquery" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50"
            class="animacao" alt="my sql" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="50"
            class="animacao" alt="figma" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" width="50"
            class="animacao" alt="canva" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg" width="50"
            class="animacao" alt="android" />
        </div>
      </div>

      <div class="mb-7 flex flex-column align-items-center justify-content-center">
        <h3 class="titulo mb-3 md:mb-5 uppercase md:text-xl ">Projetos</h3>

        <div class="card px-2 w-25rem md:w-full">
          <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
              <div class="border-1border-round m-2 text-center py-5 bg-gray-700 border-round-sm">
                <div class="mb-3">
                  <img :src="slotProps.data.foto" :alt="slotProps.data.titulo" class="w-6 shadow-2 border-round-sm" />
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">
                    {{ slotProps.data.titulo }}
                  </p>
                  <p class="mt-0 mb-3">{{ slotProps.data.tecnologias }}</p>
                  <div class="mt-5">
                    <Button @click="handleLink(slotProps.data.link)" icon="pi pi-github" label="Ver no GitHub"></Button>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>

      <div class="mb-3 md:mb-5 flex flex-column align-items-center justify-content-center">
        <h3 class="titulo mb-5 uppercase md:text-xl">Contatos</h3>
        <div class="flex justify-content-between gap-5">
          <Button @click="whatsapp" icon="pi pi-whatsapp" severity="primary" rounded class="animacao"></Button>

          <Button @click="email" icon="pi pi-envelope" severity="primary" rounded class="animacao"></Button>

          <Button @click="linkedin" icon="pi pi-linkedin" severity="primary" rounded class="animacao"></Button>

          <Button @click="github" icon="pi pi-github" severity="primary" rounded class="animacao"></Button>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.conteudo {
  background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23121212' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%231B1B1B'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
