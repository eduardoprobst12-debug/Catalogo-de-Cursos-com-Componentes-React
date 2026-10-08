export default function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <div className="card-curso">
      <h2>{nome}</h2>
      <p><strong>Duração:</strong> {duracao}</p>
      <p><strong>Modalidade:</strong> {modalidade}</p>
      <p><strong>Nível:</strong> {nivel}</p>
      <p className={`vagas ${vagas > 0 ? "disponivel" : "esgotado"}`}>
        {vagas > 0 ? `Vagas disponíveis: ${vagas}` : "Turma completa"}
      </p>
    </div>
  );
}