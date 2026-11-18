
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <br></br><br></br>
      <form>
        <label htmlFor="username">Username </label>
        <input id="username" type="text" required />
        <br></br><br></br>
        <label htmlFor="password">Password </label>
        <input id="password" type="password" required />
        <br></br><br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;