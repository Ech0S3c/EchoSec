
const CardComponent = (props: { title: string, description: string, text: string }) => {
  const texto = props.text;
  const partes = texto.split('<strong>');
  const primeiraParte = partes[0];
  const segundaParte = partes.length > 1 ? partes[1].split('</strong>')[0] : '';
  const terceiraParte = partes.length > 1 ? partes[1].split('</strong>')[1] : '';
  return (
    <div className="flex flex-col gap-5 border-[1px] p-5 font-anonymous">
      <h2 className="text-4xl">
        {props.title}
      </h2>
      <h3 className="text-xl font-bold">{props.description}</h3>
      <p>
        {primeiraParte}
        <strong className="text-purple-600">{segundaParte}</strong>
        {terceiraParte}
      </p>
    </div>
  )
}

export default CardComponent;