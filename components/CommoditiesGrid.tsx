import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const CommoditiesGrid: React.FC = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    editable: true,
  });

  return (
    <div className="w-full h-full md:w-2/3 card p-4">
        <DataGrid
          {...data}
          id="commodities"
          loading={data.rows.length === 0}
          rowHeight={25}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                status: false,
                traderName: false,
                desk: false,
                traderEmail: false,
                pnl: false,
                subTotal: false,
                feeRate: false,
                feeAmount: false,
                isFilled: false,
                unitPriceCurrency: false,
                incoTerm: false,
                brokerId: false,
                brokerName: false,
                tradeDate: false,
                maturityDate: false,
                counterPartyAddress: false,
                counterPartyCity: false,
                counterPartyCountry: false,
                taxCode: false,
                lastUpdated: false,
                dateCreated: false,
                unitPriceCurrency: false,
                contractType: false
              },
            },
            pagination: {
              paginationModel: {
                pageSize: 12
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
    </div>

  );
}
export default  CommoditiesGrid;