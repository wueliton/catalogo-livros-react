import { FC, useEffect, useState } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { Livro } from "./modelo/Livro";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro: FC<{ livro: Livro; excluir: (codigo: number) => void }> = ({
  livro,
  excluir,
}) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores?.map((autor, i) => (
            <li key={i}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          type="button"
          onClick={() => excluir(livro.codigo)}
          className="btn btn-danger"
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

export const LivroLista: FC<{}> = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, []);

  const excluir = (codigo: number) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {livros.map((livro) => (
            <LinhaLivro livro={livro} excluir={excluir} key={livro.codigo} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
