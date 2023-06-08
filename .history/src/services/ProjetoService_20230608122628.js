export const ProjetoService = {
  getProductsData() {
    return [
      {
        id: "01",
        foto: require('../assets/img/projeto-condominio.png'),
        titulo: "App Condomínio",
        tecnologias: "React Native + React Native Elements",
        link: window.open("https://github.com/barbara-teresa-toledo/crud-livros"),
      },
    ];
  },

  getProductsWithOrdersData() {
    return [
      {
        id: "01",
        dataVenc: "10/08/2023",
        dataPgto: "04/08/2023",
        tipo: "Receita",
        categoria: "Mensalidade",
        valor: "2500",
        status: "Pago",
        descricao: "Soluções Simples",
      },
      {
        id: "02",
        dataVenc: "10/08/2023",
        dataPgto: "",
        tipo: "Receita",
        categoria: "Mensalidade",
        valor: "2500",
        status: "Em aberto",
        descricao: "Inovação Fácil",
      },
      {
        id: "03",
        dataVenc: "01/08/2023",
        dataPgto: "01/08/2023",
        tipo: "Despesa",
        categoria: "Salários",
        valor: "4500",
        status: "Pago",
        descricao: "Funcionários",
      },
      {
        id: "04",
        dataVenc: "15/08/2023",
        dataPgto: "",
        tipo: "Despesa",
        categoria: "Insumos",
        valor: "300",
        status: "Em aberto",
        descricao: "Papel e Cia",
      },
      {
        id: "05",
        dataVenc: "10/07/2023",
        dataPgto: "05/07/2023",
        tipo: "Receita",
        categoria: "Contrato",
        valor: "9000",
        status: "Pago",
        descricao: "Soluções Simples",
      },
      {
        id: "06",
        dataVenc: "07/06/2023",
        dataPgto: "07/06/2023",
        tipo: "Receita",
        categoria: "Contrato",
        valor: "8000",
        status: "Pago",
        descricao: "Inovação Fácil",
      },
      {
        id: "07",
        dataVenc: "10/07/2023",
        dataPgto: "10/07/2023",
        tipo: "Receita",
        categoria: "Mensalidade",
        valor: "1500",
        status: "Pago",
        descricao: "Inovação Fácil",
      },
      {
        id: "08",
        dataVenc: "01/07/2023",
        dataPgto: "01/07/2023",
        tipo: "Despesa",
        categoria: "Salários",
        valor: "4500",
        status: "Pago",
        descricao: "Funcionários",
      },
      {
        id: "09",
        dataVenc: "01/06/2023",
        dataPgto: "01/06/2023",
        tipo: "Despesa",
        categoria: "Salários",
        valor: "4500",
        status: "Pago",
        descricao: "Funcionários",
      },
      {
        id: "10",
        dataVenc: "01/06/2023",
        dataPgto: "01/06/2023",
        tipo: "Receita",
        categoria: "Investimento",
        valor: "10000",
        status: "Pago",
        descricao: "Investidores",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
