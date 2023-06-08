export const ProjetoService = {
  getProductsData() {
    return [
      {
        id: "01",
        foto: "src/assets/img/projeto-condominio.png",
        titulo: "App Condomínio",
        tecnologias: "React Native + React Native Elements",
        link: "https://github.com/barbara-teresa-toledo/app-condominio",
      },
      {
        id: "02",
        foto: "src/assets/img/projeto-dashboard.png",
        titulo: "Dashboard Financeiro",
        tecnologias: "Vue Js + PrimeVue",
        link: "https://github.com/barbara-teresa-toledo/dashboard",
      },
      {
        id: "03",
        foto: "../assets/img/projeto-clima.jpeg",
        titulo: "App Previsão do Tempo",
        tecnologias: "React Native",
        link: "https://github.com/barbara-teresa-toledo/app-clima",
      },
      {
        id: "04",
        foto: "src/assets/img/projeto-livros.png",
        titulo: "CRUD de Livros",
        tecnologias: "React Js + Node Js",
        link: "https://github.com/barbara-teresa-toledo/crud-livros",
      },
      {
        id: "05",
        foto: "src/assets/img/projeto-pizzaria.png",
        titulo: "Landing Page Pizzaria",
        tecnologias: "HTML + CSS",
        link: 
          "https://github.com/barbara-teresa-toledo/landing-page",
      },
    ];
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },
};
