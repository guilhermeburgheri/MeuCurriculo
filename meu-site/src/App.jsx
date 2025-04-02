import React from 'react';
import './App.css';

const App = () => {
  const dados = {
    nome: "Guilherme Burgheri",
    cargo: "Desenvolvedor Full Stack",
    descricao: "Sobre mim.",
    foto: "/Teste.jpeg",
    contato: {
      email: "guilherme.burgheri@hotmail.com",
      telefone: "(11) 99942-1659",
      linkedin: "https://www.linkedin.com/in/guilherme-burgheri/",
      github: "https://github.com/guilhermeburgheri"
    },
    experiencia: [
      {
        cargo: "Expert em interação",
        empresa: "Empresa Teleperformance",
        periodo: "Março 2024 - Presente",
        descricao: "Atendimento ao cliente nos cenários de Pós-venda de softwares/programas/aplicativos."
      }
    ],
    educacao: [
      {
        curso: "Bacharelado em Ciência da Computação",
        instituicao: "ENIAC",
        periodo: "2025 - 2028"
      },
      {
        curso: "Pós-Graduação em Desenvolvimento Full Stack",
        instituicao: "FIAP / Faculdade de Informática e Administração Paulista",
        periodo: "2024 - 2025"
      },
      {
        curso: "Bacharelado em Design de Games",
        instituicao: "Universidade Anhembi Morumbi",
        periodo: "2020 - 2023"
      }
      
    ],
    habilidades: [
      { nome: "React", imagem: "/icons/react-icon.png" },
      { nome: "JavaScript", imagem: "/icons/js-icon.png" },
      { nome: "TypeScript", imagem: "/icons/ts-icon.png" },
      { nome: "CSS", imagem: "/icons/css-icon.png" },
      { nome: "Next.js", imagem: "/icons/nextjs-icon.png" },
      { nome: "Node.js", imagem: "/icons/nodejs-icon.png" },
      { nome: "C#", imagem: "/icons/csharp-icon.png" }
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
              <img src={habilidade.imagem} alt={habilidade.nome} className="tech-icon" />
              <p>{habilidade.nome}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;