export default function Destaque({ titulo, texto }) {
  return (
    <div className="destaque-card">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}