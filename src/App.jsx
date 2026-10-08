import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

const cursos = [
  {
    id: 1,
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    id: 2,
    nome: "Redes de Computadores",
    duracao: "800 horas",
    modalidade: "EAD",
    nivel: "Técnico",
    vagas: 0
  },
  {
    id: 3,
    nome: "Manutenção de Computadores",
    duracao: "160 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 5
  },
  {
    id: 4,
    nome: "Programação Web",
    duracao: "240 horas",
    modalidade: "EAD",
    nivel: "Aperfeiçoamento",
    vagas: 20
  },
  {
    id: 5,
    nome: "Banco de Dados",
    duracao: "120 horas",
    modalidade: "EAD",
    nivel: "Aperfeiçoamento",
    vagas: 0
  },
  {
    id: 6,
    nome: "Desenvolvimento Mobile",
    duracao: "200 horas",
    modalidade: "Presencial",
    nivel: "Aperfeiçoamento",
    vagas: 8
  }
];

const destaques = [
  {
    id: 1,
    titulo: "Aprenda fazendo",
    texto: "Desenvolva projetos práticos durante toda a sua formação."
  },
  {
    id: 2,
    titulo: "Professores no mercado",
    texto: "Aulas com profissionais atuantes na área de tecnologia."
  },
  {
    id: 3,
    titulo: "Certificação reconhecida",
    texto: "Garanta seu certificado ao concluir o treinamento."
  }
];

export default function App() {
  return (
    <div className="app-container">
      <Cabecalho />

      <main className="conteudo-principal">
        <section className="secao">
          <h2>Nossos Cursos</h2>
          <div className="grid-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.id}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao">
          <h2>Diferenciais</h2>
          <div className="grid-destaques">
            {destaques.map((item) => (
              <Destaque key={item.id} titulo={item.titulo} texto={item.texto} />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}