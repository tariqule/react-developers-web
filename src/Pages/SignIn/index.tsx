import React from "react";
import { Alert, Container } from "react-bootstrap";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import loadingAnim from "../../assets/anim/loading.json";
import FormX from "../../components/form";
import "./styles.css";

function SignIn() {
  const router = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const _onSubmit = () => {
    if (email === "test@mybeeapp.ca" && password === "mybee") {
      setSuccess(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/apps");
      }, 3000);
    } else {
      setError(true);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container style={{ overflow: "hidden" }}>
      {error && <Alert variant="danger">Wrong Email or Password</Alert>}
      {success && <Alert variant="success">Successfully Logged in!</Alert>}

      {!loading ? (
        <div>
          <h1 className="mt-3">Sign In</h1>
          <hr />
          <div className="Center mt-5">
            <FormX
              onChangeEmail={(e: any) => {
                setEmail(e);
                setError(false);
              }}
              onChangePassword={(e: any) => setPassword(e)}
              onPressSubmit={() => _onSubmit()}
            />
          </div>
          <h6 className="mt-5 " style={{ fontWeight: "lighter" }}>
            **If your email address or password not working contact admin.**
          </h6>
        </div>
      ) : (
        <Lottie options={defaultOptions} height={300} width={300} />
      )}
    </Container>
  );
}

export default SignIn;
