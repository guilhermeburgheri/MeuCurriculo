import React from 'react';
import './App.css';

const App = () => {
  const dados = {
    nome: "Guilherme Burgheri",
    cargo: "Desenvolvedor Full Stack",
    descricao: "Sou um jovem apaixonado por programação e desenvolvimento. Sempre estudando para me aperfeiçoar e me tornar cada vez melhor, meu foco é em Back-end, mas também possuo conhecimento e projetos em Front-End. Sou uma pessoa muito tranquila, sem problemas para trabalhar em equipe, sou focado e de fácil adaptação. Qualquer curiosidade, oportunidade, dicas ou até mesmo um bate papo, estou aberto para uma conversa.",
    foto: "/FotoPerfil.jpg",
    contato: {
      email: "guilherme.burgheri@hotmail.com",
      telefone: "(11) 99942-1659",
      linkedin: "https://www.linkedin.com/in/guilherme-burgheri/",
      github: "https://github.com/guilhermeburgheri"
    },
    experiencia: [
      {
        cargo: "Analista de Pós Venda I",
        empresa: "Empresa Teleperformance",
        periodo: "Junho 2025 - Presente",
        descricao: "Suporte para empresas nos cenários de Pós-venda de softwares, programas e aplicativos."
      },
      {
        cargo: "Expert em interação",
        empresa: "Empresa Teleperformance",
        periodo: "Março 2024 - Presente",
        descricao: "Suporte técnico ao cliente nos cenários de Pós-venda de softwares, programas e aplicativos."
      }
    ],
    educacao: [
      {
        curso: "Bacharelado em Ciência da Computação",
        instituicao: "ENIAC",
        periodo: "Cursando 2025/2028"
      },
      {
        curso: "Pós-Graduação em Desenvolvimento Full Stack",
        instituicao: "FIAP / Faculdade de Informática e Administração Paulista",
        periodo: "2024/2025"
      },
      {
        curso: "Bacharelado em Design de Games",
        instituicao: "Universidade Anhembi Morumbi",
        periodo: "2020/2023"
      }
      
    ],
    habilidades: [
      { nome: "React", imagem: "/icons/react-icon.png", link: "https://reactjs.org" },
      { nome: "JavaScript", imagem: "/icons/js-icon.png", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
      { nome: "TypeScript", imagem: "/icons/ts-icon.png", link: "https://www.typescriptlang.org" },
      { nome: "CSS", imagem: "/icons/css-icon.png", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
      { nome: "Next.js", imagem: "/icons/nextjs-icon.png", link: "https://nextjs.org" },
      { nome: "Node.js", imagem: "/icons/nodejs-icon.png", link: "https://nodejs.org" },
      { nome: "C#", imagem: "/icons/csharp-icon.png", link: "https://learn.microsoft.com/pt-br/dotnet/csharp/" }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={dados.foto} alt="Foto do Perfil" className="perfil-foto" />
        <h1>{dados.nome}</h1>
        <h2>{dados.cargo}</h2>
        <p>{dados.descricao}</p>
      </header>

      <section className="contato">
        <h3>Contato</h3>
        <ul>
          <li>Email: {dados.contato.email}</li>
          <li>Telefone: {dados.contato.telefone}</li>
          <li>LinkedIn: <a href={dados.contato.linkedin} target="_blank" rel="noopener noreferrer">Perfil</a></li>
          <li>GitHub: <a href={dados.contato.github} target="_blank" rel="noopener noreferrer">Projetos</a></li>
        </ul>
      </section>

      <section className="educacao">
        <h3>Educação</h3>
        <ul>
          {dados.educacao.map((item, index) => (
            <li key={index}>
              <h4>{item.curso}</h4>
              <p>{item.instituicao} - {item.periodo}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="experiencia">
        <h3>Experiência</h3>
        <ul>
          {dados.experiencia.map((item, index) => (
            <li key={index}>
              <h4>{item.cargo} - {item.empresa}</h4>
              <p>{item.periodo}</p>
              <p>{item.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="habilidades">
        <h3>Habilidades</h3>
        <ul className="habilidades-list">
          {dados.habilidades.map((habilidade, index) => (
            <li key={index}>
              <a href={habilidade.link} target="_blank" rel="noopener noreferrer">
                <img src={habilidade.imagem} alt={habilidade.nome} className="tech-icon" />
                <p>{habilidade.nome}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;