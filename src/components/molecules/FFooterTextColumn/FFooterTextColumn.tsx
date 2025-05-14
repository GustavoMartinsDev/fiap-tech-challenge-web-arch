import { Stack, Typography } from "@mui/material";

export interface FFooterTextColumnProps {
  textHeader?: string;
  listItems?: string[];
}

export function FFooterTextColumn(props: FFooterTextColumnProps) {
  return (
    <Stack spacing={1} sx={{ wordWrap: "break-word" }}>
      <Typography
        fontWeight={700}
        lineHeight={"19.2px"}
        color="light"
        height={"31px"}
        fontSize={16}
      >
        {props.textHeader}
      </Typography>
      {props?.listItems?.map((item, index) => (
        <Typography
          key={`item-${index}`}
          fontWeight={400}
          lineHeight={"19.2px"}
          color="light"
          height={"31px"}
          fontSize={16}
        >
          {item}
        </Typography>
      ))}
    </Stack>
  );
}
