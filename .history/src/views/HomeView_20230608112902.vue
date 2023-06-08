<script>
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import VirtualScroller from "primevue/virtualscroller";

export default {
  name: "HomeView",
  components: {
    Button,
    Card,
    Divider,
    VirtualScroller,
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
    repositorioCondominio: function () {
      window.open("https://github.com/barbara-teresa-toledo/app-condominio");
    },
    repositorioClima: function () {
      window.open("https://github.com/barbara-teresa-toledo/app-clima");
    },
    repositorioDashboard: function () {
      window.open("https://github.com/barbara-teresa-toledo/dashboard");
    },
    repositorioPizza: function () {
      window.open("https://github.com/barbara-teresa-toledo/landing-page");
    },
    repositorioLivros: function () {
      window.open("https://github.com/barbara-teresa-toledo/crud-livros");
    },
  },
};
</script>

<template>
  <main
    class="gradiente md:px-8 px-4 py-5 flex flex-column align-items-center justify-content-center"
  >
    <div
      class="mt-5 md:mb-8 mb-6 flex flex-column align-items-center justify-content-center text-center"
    >
      <h1 class="titulo text-5xl mb-2 md:text-6xl white-space-nowrap">
        Bárbara Toledo
      </h1>
      <h2 class="font-light uppercase text-xl md:text-3xl white-space-nowrap">
        Dev Front-End | Mobile
      </h2>
    </div>

    <div
      class="mb-7 flex flex-column align-items-center justify-content-center"
    >
      <h3 class="titulo mb-3 md:mb-5 font-light uppercase">Sobre</h3>
      <p class="text-center line-height-3">
        Sou uma desenvolvedora com foco em criar aplicações Front-End e Mobile.
        Desde 2021, venho me especializando nessa área, buscando constantemente
        desafios para me tornar uma profissional ainda melhor. Com experiência
        em UX/UI, Vue.js e React Native, sou capaz de criar interfaces
        intuitivas e eficientes. Acredito no poder transformador da tecnologia e
        sou apaixonada por ler e ouvir música, o que me inspira e ajuda a
        encontrar soluções criativas. Estou animada para compartilhar meus
        projetos e colaborar com outras pessoas que compartilham a mesma paixão
        pela tecnologia.
      </p>
    </div>

    <div
      class="mb-7 flex flex-column align-items-center justify-content-center"
    >
      <h3 class="titulo mb-3 md:mb-5 font-light uppercase">Skills</h3>
      <div class="flex justify-content-between gap-3 flex-wrap">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          width="50"
          class="animacao"
          alt="html"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          width="50"
          class="animacao"
          alt="css"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          width="50"
          class="animacao"
          alt="javascript"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          width="50"
          class="animacao"
          alt="typescript"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="50"
          class="animacao"
          alt="react"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          width="50"
          class="animacao"
          alt="vue js"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          width="50"
          class="animacao"
          alt="tailwind"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          width="50"
          class="animacao"
          alt="bootstrap"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
          width="50"
          class="animacao"
          alt="laravel"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          width="50"
          class="animacao"
          alt="node js"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
          width="50"
          class="animacao"
          alt="nest js"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
          width="50"
          class="animacao"
          alt="jquery"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          width="50"
          class="animacao"
          alt="my sql"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          width="50"
          class="animacao"
          alt="figma"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          width="50"
          class="animacao"
          alt="canva"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg"
          width="50"
          class="animacao"
          alt="android"
        />
      </div>
    </div>

    <div
      class="mb-7 flex flex-column align-items-center justify-content-center"
    >
      <h3 class="titulo mb-3 md:mb-5 font-light uppercase">Projetos</h3>
      <div class="flex flex-row gap-2 flex-wrap justify-content-center">
        <Card style="width: 18em" class="m-2">
          <template #header>
            <img
              alt="foto do projeto"
              src="../assets/img/projeto-condominio.png"
              class="w-full border-round-md border-noround-bottom"
            />
          </template>
          <template #title>App Condomínio</template>
          <template #content>React Native + React Native Elements</template>
          <template #footer class="justify-content-center">
            <Button
              @click="repositorioCondominio"
              icon="pi pi-github"
              label="Ver no GitHub"
            ></Button>
          </template>
        </Card>

        <Card style="width: 18em" class="m-2">
          <template #header>
            <img
              alt="foto do projeto"
              src="../assets/img/projeto-clima.jpeg"
              class="w-full border-round-md border-noround-bottom"
            />
          </template>
          <template #title>App Previsão do Tempo</template>
          <template #content>React Native</template>
          <template #footer class="justify-content-center">
            <Button
              @click="repositorioClima"
              icon="pi pi-github"
              label="Ver no GitHub"
            ></Button>
          </template>
        </Card>

        <Card style="width: 18em" class="m-2">
          <template #header>
            <img
              alt="foto do projeto"
              src="../assets/img/projeto-dashboard.png"
              class="w-full border-round-md border-noround-bottom"
            />
          </template>
          <template #title>Dashboard Financeiro</template>
          <template #content>Vue Js + PrimeVue</template>
          <template #footer class="justify-content-center">
            <Button
              @click="repositorioDashboard"
              icon="pi pi-github"
              label="Ver no GitHub"
            ></Button>
          </template>
        </Card>

        <Card style="width: 18em" class="m-2">
          <template #header>
            <img
              alt="foto do projeto"
              src="../assets/img/projeto-livros.jpg"
              class="w-full border-round-md border-noround-bottom"
            />
          </template>
          <template #title>CRUD de Livros</template>
          <template #content>React Js + Node Js</template>
          <template #footer class="justify-content-center">
            <Button
              @click="repositorioLivros"
              icon="pi pi-github"
              label="Ver no GitHub"
            ></Button>
          </template>
        </Card>

        <Card style="width: 18em" class="m-2">
          <template #header>
            <img
              alt="foto do projeto"
              src="../assets/img/projeto-pizzaria.jpg"
              class="w-full border-round-md border-noround-bottom"
            />
          </template>
          <template #title>Landing Page de Pizzaria</template>
          <template #content>HTML + CSS</template>
          <template #footer class="justify-content-center">
            <Button
              @click="repositorioPizza"
              icon="pi pi-github"
              label="Ver no GitHub"
            ></Button>
          </template>
        </Card>
      </div>
    </div>

    <div
      class="mb-3 md:mb-5 flex flex-column align-items-center justify-content-center"
    >
      <h3 class="titulo mb-5 font-light uppercase">Contatos</h3>
      <div class="flex justify-content-between gap-5">
        <Button
          @click="whatsapp"
          icon="pi pi-whatsapp"
          severity="primary"
          rounded
          class="animacao"
        ></Button>

        <Button
          @click="email"
          icon="pi pi-envelope"
          severity="primary"
          rounded
          class="animacao"
        ></Button>

        <Button
          @click="linkedin"
          icon="pi pi-linkedin"
          severity="primary"
          rounded
          class="animacao"
        ></Button>

        <Button
          @click="github"
          icon="pi pi-github"
          severity="primary"
          rounded
          class="animacao"
        ></Button>
      </div>
    </div>
  </main>
</template>

<style>
.gradiente {
  background-image: linear-gradient(-45deg, #00116b 0%, #780e35 100%);
}
</style>
