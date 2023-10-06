const data = {
    transition: [
      {
        title: "Programa de Formação Elas Na Tech",
        link: "",
        linkTitle: "Elas na Tech",
        description:
          "Programa de Formação Elas na Tech, onde tive oportunidade de me sentir parte de uma comunidade de mulheres negras que estão em busca de conhecimento mais amplo no mundo da tecnologia. Nesta formação foram abordados? HTML, CSS, JAVASCRIPT, PYTHON, GIT e GITHUB. ",
        image: "",
        class: "",
      },
      {
        title: "Ciclo formativo O Poder do Futuro",
        link: "",
        linkTitle: "Pretalab Olabi",
        description:
          "Ciclo Formativo o Poder do Futuro, onde tive oportunidade de me sentir parte de uma comunidade de mulheres negras que fizeram e outras que estão fazendo a transição de carreira para a área da tecnologia. O principal resultado na minha carreira, foi exatamente pensar em carreira tendo em vista minha própria identidade e contexto social. A ideia deste portfolio foi o requisito para conclusão deste respectivo ciclo formativo. Principais aprendizados: HTML, CSS, JAVASCRIPT, Desenvolvimento de carreira.",
        image: "",
        class: "",
      },
      {
        title: "Programa Desenvolve",
        link: "",
        linkTitle: "Grupo Boticário",
        description:
          "Programa Desenvolve edição 2022, de janeiro a outubro de 2023. Foi através da seleção para estudar a Trilha FullStack que dei os primeiros passos na programação. Fiz aulas na Alura e na Labenu, durante o período do Programa. Contratada para exercer o cargo de Developer I, sendo o marco da minha inserção no mercado. Principais aprendizados: HTML, CSS, JAVASCRIPT, REACT, NODE, SQL, trabalho em grupo e desenvolvimento de carreira.",
        image: "",
        class: "",
      },
      {
        title: "Produtora cultural",
        link: "",
        linkTitle: "Especialista em Linguagens artísticas, cultura e educação",
        description:
          "De 2013 a 2022 atuei como produtora independente e assistente de produção em eventos nacionais e internacionais. Foi meu interesse  pelas artes que me levou a criar o blog 'Arte, cultura e ciência', pelo qual procurei partilhar conhecimento na área, de acordo com meus aprendizados e experiências. Principais aprendizados: teoria cultural, produção de eventos, trabalho sobre pressão. Desenvolvi também artigos científicos durante minhas formações na área, que podem ser consultados com mais detalhes no meu perfil no CurriculoLattes*.",
        image: "",
        class: "",
      },
    ],
    projects: [
      {
        title: "Menu",
        link: "https://menu-by-wanuzia-elasnatech.netlify.app/",
        linkTitle: "Menu by Wanuzia",
        description:
          "Menu feito apenas com HTML e CSS, com design responsivo, desafio da formação em desenvolvimento Web do Programa Elas na Tech.",
        image: "",
        class: "",
      },
      {
        title: "Player de Música",
        link: "https://player-musica-olive.vercel.app/",
        linkTitle: "Player by Wanuzia",
        description:
          "Player de Música - Desafio 1 #boracodar - Rocketseat. Desenvolvido em React. O Desafio 1 consistia em replicar o layout do Figma. Extras: o site é funcional, possui 15 músicas que podem ser ouvidas em sequências, com autoplay. Deploy usando surge.sh.",
        image: "",
        class: "",
      },
      {
        title: "Cubo - FullStack",
        link: "http://cubo-challenge-wanuzia.surge.sh/",
        linkTitle: "Cubo by Wanuzia",
        description:
          "Projeto FullStack um dos cases para conclusão de formação FullStack na Labenu. Backend com documentação criada no Postman, deploy realizado com surge.sh. Front end feito com React.",
        image: "",
        class: "",
      },
      {
        title: "The Movie DB - Front",
        link: "https://themoviedb-challenge-wanuzia.surge.sh/",
        linkTitle: "The Movie DB by Wanuzia",
        description:
          "Projeto Frontend com React que consistiu em consumir a API do themoviedb e criar o frontend com base em um layout do Figma. Deploy realizado com surge.sh. Pretendo retomar o desenvolvimento deste projeto, adicionando novas funcionalidades e melhorando detalhes do layout.",
        image: "",
        class: "",
      },
      {
        title: "Blog Arte, cultura e Ciência - Wordpress",
        link: "https://arteculturaeciencia.wordpress.com/",
        linkTitle: "Blog feito no Wordpress",
        description:
          "Iniciado em 2015, quando estava em Moçambique. Durante a pandemia, devido ao isolamento social que me dediquei mais à criação de conteúdo para o blog. Então,na tentativa de mudar a exibição do conteúdo na tela, comecei a me interessar por programação, sem saber que se tratava de programação na época 😁. Atualmente tenho procurado entender mais o wordpress, utilizando HTML e demais ferramentas disponíveis para estilizar as postagens.",
        image: "",
        class: "",
      },
    ],
  };
  data.transition.forEach((item) => {
    const carouselContainer = document.querySelector("#transition-container");
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carrossel-item");
  
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");
  
    const newTitle = document.createElement("p");
    newTitle.classList.add("item-title");
  
    const itemLink = document.createElement("a");
    itemLink.classList.add("item-link");
    itemLink.classList.add("disabled");
  
    const newDescription = document.createElement("p");
    newDescription.classList.add("item-description");
  
    newTitle.textContent = item.title;
    itemLink.textContent = item.linkTitle;
    // itemLink.href = item.link;
    // itemLink.target = "_blank";
    newDescription.textContent = item.description;
  
    carouselContainer.appendChild(carouselItem);
    carouselItem.appendChild(itemDetails);
    carouselItem.appendChild(newDescription);
    itemDetails.appendChild(newTitle);
    itemDetails.appendChild(itemLink);
  });
  data.projects.forEach((item) => {
    const carouselContainer = document.querySelector("#projects-container");
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carrossel-item");
  
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");
  
  
    const newTitle = document.createElement("p");
      newTitle.classList.add("item-title");
      
    const button = document.createElement("div");
      button.classList.add("button-link");
      
    const itemLink = document.createElement("a");
    itemLink.classList.add("item-link");
  
    const descriptionContainer = document.createElement("div")
    descriptionContainer.classList.add("item-container");
  
    const newDescription = document.createElement("p");
    newDescription.classList.add("item-description");
    newDescription.classList.add("item");
  
    const carrosselTeste = document.createElement("div")
    carrosselTeste.classList.add("carrossel-teste");
  
    const btnPrev = document.createElement("button")
    btnPrev.classList.add("prev");
    const btnNext = document.createElement("button")
    btnNext.classList.add("next");
  
  
    // const description2 = document.createElement("p");
    // description2.classList.add("item-description");
    // description2.classList.add("item");
    btnPrev.textContent = "Anterior";
    btnNext.textContent = "Próximo";
  
    newTitle.textContent = item.title;
    itemLink.textContent = item.linkTitle;
    itemLink.href = item.link;
    itemLink.target = "_blank";
    newDescription.textContent = item.description;
      
    carouselContainer.appendChild(carouselItem);
    carouselItem.appendChild(itemDetails);
    carouselItem.appendChild(descriptionContainer);
    descriptionContainer.appendChild(newDescription)
    // descriptionContainer.appendChild(description2)
    descriptionContainer.appendChild(carrosselTeste);
    descriptionContainer.appendChild(btnPrev);
    descriptionContainer.appendChild(btnNext);
  
    itemDetails.appendChild(newTitle);
    itemDetails.appendChild(button);
  
    button.appendChild(itemLink);
  });
  