import { TRANSACTION_TYPES } from "@/components/atoms/FSelectInput/FSelectInput.constants";
import { useFilterStore } from "@/stores/FilterStore";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";

interface FFilterProps {
  onFilterChange: (filterTypes: string[]) => void;
  showSelect: boolean;
}

export function FFilter({ onFilterChange, showSelect }: FFilterProps) {
  const { filterSelected, setFilterSelected, resetFilter } = useFilterStore();

  const handleFilterChange = (
    event: SelectChangeEvent<typeof filterSelected>
  ) => {
    const {
      target: { value },
    } = event;

    const valueSelected = value?.length > 0 ? value[value.length - 1] : "";

    const selectedValues = typeof value === "string" ? value.split(",") : value;

    if (valueSelected !== "") {
      const updatedValues = selectedValues.filter((val) => val !== "");
      setFilterSelected(updatedValues);
      onFilterChange(updatedValues);
    } else {
      resetFilter();
      onFilterChange(TRANSACTION_TYPES);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="right"
      alignItems="center"
      paddingBottom={1}
      width="100%"
    >
      {showSelect && (
        <FormControl sx={{ width: "100%" }}>
          <Select
            multiple
            value={filterSelected}
            onChange={handleFilterChange}
            displayEmpty
            sx={{
              width: "100%",
              minHeight: "40px",
              overflow: "hidden",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              marginRight: 1,
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            {TRANSACTION_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}
