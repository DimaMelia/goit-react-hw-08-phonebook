import s from './Container.module.css';

function Container({ title, children }) {
  return (
    <section className={s.container}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Container;
