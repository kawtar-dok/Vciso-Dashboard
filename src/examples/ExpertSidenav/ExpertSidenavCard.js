// @mui material components
import Card from "@mui/material/Card";

// Custom styles for the SidenavCard
import { card,} from "examples/ExpertSidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function ExpertSidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      
    </Card>
  );
}

export default ExpertSidenavCard;
