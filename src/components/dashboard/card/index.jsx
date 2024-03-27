
export function Card({ heading, info, classNames }) {
  return (
    <div className={`status-card ${classNames}`}>
      <h4>{heading}</h4>
      <p className="text">{info}</p>
    </div>
  );
}
