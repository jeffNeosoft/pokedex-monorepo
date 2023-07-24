import { TGridColumnDef, Typography,TRowData } from "@pokedex/components";

export const POKEDEX_COLUMNS : TGridColumnDef[] = [
  {
    field: "id",
    flex: 1,
    align:"center",
    headerAlign:"center",
    renderHeader:()=>{
      return <Typography variant={"h5"}>Poke-Id</Typography>
    }
  },
    {
      field: "name",
      flex: 3,
      align:"center",
      headerAlign:"center",
      renderHeader:()=>{
        return <Typography variant={"h5"}>Pokemon Name</Typography>
      }
    }
];

  export const DATA_TABLE_MOCK_DATA = {
    rows: [
      {name: 'Charmander',id:1 },
      {name: 'Charmeleon' ,id:2},
      {name: 'Charizard',id:3},
      {name: 'Bulbasaur',id:4},
      {name: 'IvySaur',id:5},
      {name: 'VenaSaur',id:6},
    ],
    column: POKEDEX_COLUMNS,
    paginationModel: { page: 1, pageSize: 10 },
    isLoading: false,
    rowCount: 2,
    getRowId: (row:TRowData) => row.name,
  };
  export const MOCK_STORE_DATA = {
    pokemonListing: {
      allData: [],
      data: [
        {
          name: "bulbasaur",
          url: 1,
        },
        { name: "ivysaur", id: 2 },
      ],
      count: 0,
      pagination: {
        page: 0,
        pageSize: 15,
      },
    },
    pokemonData: {
      name: "Pikachu",
      height: "100",
      weight: "250",
      location_area_encounters: "https://pokeapi.co/api/v2/pokemon/3/encounters",
    },
  };