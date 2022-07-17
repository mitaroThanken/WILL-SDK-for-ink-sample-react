import React from 'react';
import { Avatar, Button, Divider, Paper, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ColorPicker } from './ColorPicker';

export interface Tool {
  id: string;
  image: string;
}

const vectorPens: Tool[] = [
  {
    id: "Pen",
    image: "./samples_images/btn_tools/btn_pen.png",
  },
  {
    id: "Felt",
    image: "./samples_images/btn_tools/btn_feather.png"
  },
  {
    id: "Brush",
    image: "./samples_images/btn_tools/btn_brush.png"
  },
  {
    id: "Marker",
    image: "./samples_images/btn_tools/btn_marker.png"
  },
  {
    id: "Basic",
    image: "./samples_images/btn_tools/btn_basic_brush.png"
  }
];

const rasterPens: Tool[] = [
  {
    id: "Pencil",
    image: "./samples_images/btn_tools/btn_pencil.png"
  },
  {
    id: "Water Brush",
    image: "./samples_images/btn_tools/btn_water_brush.png"
  },
  {
    id: "Ink Brush",
    image: "./samples_images/btn_tools/btn_feather.png"
  },
  {
    id: "Crayon",
    image: "./samples_images/btn_tools/btn_crayon.png"
  }
];

const vectorErasers: Tool[] = [
  {
    id: "Delayed Stroke Eraser",
    image: "./samples_images/btn_tools/eraser_delayed_partial_stroke.png"
  },
  {
    id: "Whole Stroke Eraser",
    image: "./samples_images/btn_tools/eraser_whole_stroke.png"
  }
];

const rasterErasers: Tool[] = [
  {
    id: "Eraser",
    image: "./samples_images/btn_tools/eraser.png"
  }
];

const selector: Tool[] = [
  {
    id: "Selector",
    image: "./samples_images/btn_tools/btn_selector.png"
  }
];

const selectorForVecotr: Tool[] = [
  {
    id: "Whole Stroke Selector",
    image: "./samples_images/btn_tools/btn_selector_whole_stroke.png"
  }
];

const ToolButtons = (tools: Tool[]) => tools.map((tool, index) => (
  <ToggleButton key={`${index}-${tool.id}`} value={tool.id} aria-label={tool.id}>
    <Avatar variant="rounded" alt={tool.id} src={tool.image} />
  </ToggleButton>
));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

interface ToolBarProps {
  sample: number;
}

export const ToolBar = ({ sample }: ToolBarProps) => {
  // sample
  // 1: Vector Ink Demo
  // 2: Raster Ink Demo
  // 3: Mixed Ink Demo (Vector canvas + Raster brush)
  // 4: Mixed Ink Demo (Raster canvas + Vector brush)
  const vector = sample !== 2;
  const raster = sample !== 1;

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          margin: (theme) => theme.spacing(1),
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_paper_02.jpg" alt="Paper" />
        </Button>
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_load.png" alt="Load" />
        </Button>
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_save.png" alt="Save" />
        </Button>
        <ColorPicker />
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_clear.png" alt="Clear" />
        </Button>
        {vector
          ? <>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <StyledToggleButtonGroup exclusive>
              {ToolButtons(vectorPens)}
            </StyledToggleButtonGroup>
          </>
          : <></>}
        {raster
          ? <>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <StyledToggleButtonGroup exclusive>
              {ToolButtons(rasterPens)}
            </StyledToggleButtonGroup>
          </>
          : <></>}
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        {raster
          ? <StyledToggleButtonGroup exclusive>
            {ToolButtons(rasterErasers)}
          </StyledToggleButtonGroup>
          : <></>}
        {(vector && !raster)
          ? <StyledToggleButtonGroup exclusive>
            {ToolButtons(vectorErasers)}
          </StyledToggleButtonGroup>
          : <></>}
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup exclusive>
          {ToolButtons(selector)}
          {(vector && !raster)
            ? ToolButtons(selectorForVecotr)
            : []}
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Button disabled>
          <Avatar variant="rounded" src="./samples_images/btn_tools/btn_toolconfig_tool.png" alt="Custom Tool" />
        </Button>
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_import_brush.png" alt="Import Tool" />
        </Button>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Button color="inherit">PP</Button>
        <Button color="inherit">DS</Button>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <Button>
          <Avatar variant="rounded" src="./samples_images/btn_back.png" alt="Back to menu" />
        </Button>
      </Paper>
    </div>
  );
};
