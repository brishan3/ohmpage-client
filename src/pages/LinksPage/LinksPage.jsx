import './LinksPage.scss';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import * as React from 'react';


//
// Much of the below code is adapted from example from MUI documentation,
// https://mui.com/components/data-grid/columns/
// 
function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = React.memo(function GridCellExpand( props ) {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }
    
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: 1,
        height: 1,
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: 1,
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  );
});

function renderCellExpand(params) {
  return (
    <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
  );
}


const columns = [
  {
    field: 'title', 
    headerName: 'Title',
    width: 200,
  },
  {
    field: 'url', 
    headerName: 'URL',
    width: 200,
    renderCell: (params) => (
      <a href={params.value} target='_blank'>
        {params.value}
      </a>
    )
  },
  {
    field: 'description', 
    headerName: 'Description',
    width: 250,
    renderCell: renderCellExpand
  },
  {
    field: 'category', 
    headerName: 'Category',
    width: 180,
  },
  {
    field: 'subcategory', 
    headerName: 'Subcategory',
    width: 180,
  },
]




//
// Renders MUI data grid for a searchable library of links
//
function LinksPage({linksList, theme}) {
  let color = theme === 'light' ? '#FAF8F9' : `#323232`;
  let fontColor = theme === 'light' ? `#323232` : '#FAF8F9';

  return (
      <div className='links-page__wrapper page-wrapper scale-in-center'>
        <DataGrid
          rows = {linksList}
          columns={columns}
          palette= 'dark'
          
          sx={{
            backgroundColor: color,
            width: '100%',
            boxShadow: 2,
            border: 3,
            borderRadius: 4,
            borderColor: '#71c0f5',
            fontFamily: 'Nunito',
            fontWeight: 600,
            color: fontColor
           }}
        />
      </div>
  )
}



export default LinksPage;