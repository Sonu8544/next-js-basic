export default function Parlelroute({ children, login, logout }) {
  const isLogin = true;
  return (
    <section>
      {children}
      {isLogin ? login : logout}
      {/* {login}
      {logout} */}
    </section>
  );
}
