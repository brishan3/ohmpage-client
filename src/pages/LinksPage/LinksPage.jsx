import './LinksPage.scss';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'title', 
    headerName: 'Title',
    width: 200,
  },
  {
    field: 'url', 
    headerName: 'URL',
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <a href={params.value} target='_blank'>
        {params.value}
      </a>
    )
  },
  {
    field: 'description', 
    headerName: 'Description',
    width: 200,
  },
  {
    field: 'category', 
    headerName: 'Category',
    width: 200,
  },
  {
    field: 'subcategory', 
    headerName: 'Subcategory',
    width: 200,
  },
]

function LinksPage({linksList}) {

  return (
      <div className='links-page__wrapper page-wrapper'>
        <DataGrid
          rows = {linksList}
          columns={columns}
          pageSize={50}
          sx={{
            backgroundColor: '#FAF8F9',
            width: '100%',
            boxShadow: 2,
            border: 3,
            borderRadius: 4,
            borderColor: '#71c0f5',
           }}
        />
      </div>
  )
}



export default LinksPage;