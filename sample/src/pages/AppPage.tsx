import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToolBar } from '../components/ToolBar';
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


  return (
    <>
      <ToolBar sample={sampleNumber} />
    </>
  );
}
