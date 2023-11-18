import { ChangeEvent, ChangeEventHandler, EventHandler, FC, FormEvent, useState } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";
import { Livro } from "./modelo/Livro";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export const LivroDados: FC = () => {
  const opcoes = controleEditora
    .getEditoras()
    .map((editora) => ({ value: editora.codEditora, text: editora.nome }));
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  const tratarCombo = (e: ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(e.target.value));
  };

  const incluir = (e: FormEvent) => {
    e.preventDefault();
    const livro = new Livro(
      0,
      codEditora!,
      titulo,
      resumo,
      autores.split(/\r?\n|\r|\n/g)
    );
    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Resumo</label>
          <textarea
            className="form-control"
            rows={3}
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Editora</label>
          <select
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((editora) => <option key={editora.value} value={editora.value}>{editora.text}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Autores (1 por linha)</label>
          <textarea
            className="form-control"
            rows={3}
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </>
  );
};

export default LivroDados;
