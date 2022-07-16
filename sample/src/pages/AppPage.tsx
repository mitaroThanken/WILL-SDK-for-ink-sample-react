import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.svg';
import "./AppPage.css";

export function AppPage() {
  // sample
  // 1: Vector Ink Demo
  // 2: Raster Ink Demo
  // 3: Mixed Ink Demo (Vector canvas + Raster brush)
  // 4: Mixed Ink Demo (Raster canvas + Vector brush)
  const { sample } = useParams();

  const navigate = useNavigate();

  const sampleNumber = Number(sample);
  const isParamValid = Number.isSafeInteger(sampleNumber) && (1 <= sampleNumber) && (sampleNumber <= 4);

  useEffect(() => {
    if (!isParamValid) {
      navigate("/", { replace: true });
    }
  }, [isParamValid, navigate]);

  if (!isParamValid) return <></>

  let className = "app-page";
  if (sampleNumber !== 2) className += " vector";
  if (sampleNumber !== 1) className += " raster";

  return (
    <div className={className}>
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
    </div>
  );
}
