import React from 'react';

function Login(props) {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-inline mb-4">
                <label className="form-label" htmlFor="form1Example13">Email address</label>
                <input type="email" id="form1Example13" className="form-control form-control-lg" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example23">Password</label>
                <input type="password" id="form1Example23" className="form-control form-control-lg" />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div>
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <div className="btn-block">
                <a className="btn btn-primary btn-lg border-0 w-100 mb-2" style={{ backgroundColor: '#3b5998' }} href="#!"
                  role="button">
                  Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg border-0 w-100 mb-2" style={{ backgroundColor: '#55acee' }} href="#!"
                  role="button">
                Continue with Twitter</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;