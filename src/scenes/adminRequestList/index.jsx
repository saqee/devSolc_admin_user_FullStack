import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';

const RequestList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //field represent the property in real data, headerName is alias in DataGrid
    const columns = [
      { field: 'id', headerName: 'ID', flex: 0.5 },
      { field: 'registrarId', headerName: 'Registrar ID' },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        //custom className
        cellClassName: 'name-column--cell',
      },
      {
        field: 'email',
        headerName: 'Email',
        flex: 1,
      },
      {
        field: 'address',
        headerName: 'URL Address',
        flex: 1,
      },
      {
        field: 'address2',
        headerName: 'Sub url Address',
        flex: 1,
      },
      {
        field: 'zipCode',
        headerName: 'Current Status',
        flex: 1,
      },
    ];
  
    return (
      <Box m="20px">
        <Header
          title="Request List"
          subtitle="List of All request for Pattern check"
        />
        <Box
          height="80vh"
          //overwrite mui DataGrid default css
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              border: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              boderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            //rows take data source
            rows={mockDataContacts}
            columns={columns}
            //components take MUI components as parameter
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    );
  };

export default RequestList;