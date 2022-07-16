import { AppBar, Avatar, Button, IconButton, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  const vector = sampleNumber !== 2;
  const raster = sampleNumber !== 1;

  const VectorPens = () => <>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_pen.png" alt="Pen" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_feather.png" alt="Felt" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_brush.png" alt="Brush" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_marker.png" alt="Marker" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_basic_brush.png" alt="Basic" />
    </IconButton>
  </>

  const RasterPens = () => <>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_pencil.png" alt="Pencil" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_water_brush.png" alt="Water Brush" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_feather.png" alt="Ink Brush" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/btn_crayon.png" alt="Crayon" />
    </IconButton>
  </>

  const RasterErasers = () => <>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/eraser.png" alt="Eraser" />
    </IconButton>
  </>

  const VectorErasers = () => <>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/eraser_delayed_partial_stroke.png" alt="Delayed Stroke Eraser" />
    </IconButton>
    <IconButton>
      <Avatar variant="rounded" src="./samples_images/btn_tools/eraser_whole_stroke.png" alt="Whole Stroke Eraser" />
    </IconButton>
  </>

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ flexWrap: "wrap" }}>
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_paper_02.jpg" alt="Paper" />
          </IconButton>
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_load.png" alt="Load" />
          </IconButton>
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_save.png" alt="Save" />
          </IconButton>
          <IconButton>
            <Avatar variant="rounded" alt="Color"> </Avatar>
          </IconButton>
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_clear.png" alt="Clear" />
          </IconButton>
          {vector ? <VectorPens /> : <></>}
          {raster ? <RasterPens /> : <></>}
          {raster ? <RasterErasers /> : <></>}
          {(vector && !raster) ? <VectorErasers /> : <></>}
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_tools/btn_selector.png" alt="Selector" />
          </IconButton>
          {(vector && !raster)
            ? <IconButton>
              <Avatar variant="rounded" src="./samples_images/btn_tools/btn_selector_whole_stroke.png" alt="Whole Stroke Selector" />
            </IconButton>
            : <></>}
          <Avatar variant="rounded" src="./samples_images/btn_tools/btn_toolconfig_tool.png" alt="Custom Tool" />
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_import_brush.png" alt="Import Tool" />
          </IconButton>
          <Button color="inherit">PP</Button>
          <Button color="inherit">DS</Button>
          <IconButton>
            <Avatar variant="rounded" src="./samples_images/btn_back.png" alt="Back to menu" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
