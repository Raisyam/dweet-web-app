const LogIn = () => {
	return (
		<div id="login-signup-page">
			<div id="login-signup-component" className="shadow-effect">
				<h3>Log In</h3>

				<div>
					<h4>Username</h4>
					<input />
				</div>

				<div>
					<h4>Password</h4>
					<input type="password"/>
				</div>

				<button className="button-effect button-yellow">Log In</button>

				<hr />

				<p>Need an account? <a href="/signup">Sign Up</a></p>
			</div>
		</div>
	)
}

export default LogIn