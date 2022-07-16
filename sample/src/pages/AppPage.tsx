import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.svg';
import "./AppPage.css";

export function AppPage() {
  const { sample } = useParams();
  const navigate = useNavigate();

  const sampleNumber = Number(sample);
  const isParamValid = Number.isSafeInteger(sampleNumber);

  useEffect(() => {
    if (!isParamValid) {
      navigate("/", { replace: true });
    }
  }, [isParamValid, navigate]);

  if (!isParamValid) return <></>

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample {sampleNumber}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}
