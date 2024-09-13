import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

const IconSection = () => {
    const theme= useTheme()
  return (
    <Container sx={{mt:3, bgcolor: theme.palette.mode ==="dark" ?"#000" :"fff" }}>
    <Stack
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      >
        <MyBox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subtitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmsOutlinedIcon />}
          title={"365 Days"}
          subtitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      //   className="border"
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "leftS",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
