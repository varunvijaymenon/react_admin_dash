import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { faFaceLaughWink, faGaugeHigh, faGear, faWrench, faFolder, faTable, faAreaChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 240;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(28)} + 1px)`
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(14)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(14)} + 1px)`
  }
});

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function PermanentDrawerLeft() {
  const [open, setOpen] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleDrawerToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(to top, #385ECE, #4E73DE)",
            color: "white"
          }
        }}
      >
        <List>
          <ListItemButton
            button
            key={"SB ADMIN"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              display: "flex",
              flexDirection: open ? "row" : "column"
            }}
          >
            <ListItemIcon
              sx={{
                mr: open ? 3 : "auto",
                justifyContent: "center",
                margin: 0,
                paddingRight: open ? "0.5em" : "auto",
                '& svg': {
                  fontSize: "2.25em",
                  color: "white",
                  transform: 'rotate(345deg)'
                }
              }}
            >
              <FontAwesomeIcon icon={ faFaceLaughWink }/>
            </ListItemIcon>
            <div className='ListTextContainer' style={{display: 'flex'}}>
              <ListItemText
                primary={"SB ADMIN"}
                primaryTypographyProps={{
                  fontSize: "1.1em",
                  fontWeight: "bold"
                }}
                
                sx={{display: open ? 'block' : 'none', paddingRight: '0.25em'}}
              />
              
              {/* <div className='ListSecondaryText' style={{position: 'relative',bottom: '0.5em', left: '0.5em'}}> */}
                  <ListItemText primary={'2'} primaryTypographyProps={{fontSize: '0.85em', fontWeight: 'bold'}} sx={{display: open ? 'block' : 'none'}} />
              {/* </div> */}
              </div>
          </ListItemButton>
        </List>

        <Divider
          sx={{
            background: "white",
            opacity: "0.25",
            marginLeft: "1em",
            marginRight: "1em"
          }}
        />
        <List>
          <ListItemButton
            button
            key={"Dashboard"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              display: "flex",
              flexDirection: open ? "row" : "column"
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                margin: 0,
                paddingRight: open ? "0.5em" : "auto",
                color: "white",
                // border: "1px solid",
                '& svg':{
                  fontSize: '1.1em',
                }
              }}
            >
              <FontAwesomeIcon icon={faGaugeHigh}/>
              
            </ListItemIcon>
            <ListItemText
              primary={"Dashboard"}
              primaryTypographyProps={{
                fontSize: open ? "0.90em" : "0.70em",
                fontWeight: "bold"
              }}
            />
          </ListItemButton>
        </List>

        <Divider
          sx={{
            background: "white",
            opacity: "0.25",
            marginLeft: "1em",
            marginRight: "1em"
          }}
        />

        <List>
          <Typography
            sx={{
              minWidth: 0,
              textAlign: open ? "left" : "center",
              paddingLeft: open ? "1em" : "0em",
              justifyContent: open ? "initial" : "center",
              fontWeight: "bold",
              fontSize: "0.70em",
              color: "#D8E0F8",
              opacity: "0.75"
            }}
          >
            INTERFACE
          </Typography>
          {["Components", "Utilities"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                opacity: "0.85",
                display: "flex",
                flexDirection: open ? "row" : "column"
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  opacity: "0.5",
                  margin: 0,
                  paddingRight: open ? "0.5em" : "auto",
                  color: "white",
                  '& svg': {
                    fontSize: '0.85em'
                  }
                }}
              >
                {index % 2 === 0 ? <FontAwesomeIcon icon={faGear} /> : <FontAwesomeIcon icon={faWrench} />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ display: "block" }}
                primaryTypographyProps={{
                  fontSize: open ? "0.90em" : "0.70em",
                  fontWeight: "400"
                }}
              />
              <ChevronRightIcon sx={{ display: open ? "block" : "none" }} />
            </ListItemButton>
              
          ))}
        </List>

        <Divider
          sx={{
            background: "white",
            opacity: "0.25",
            marginLeft: "1em",
            marginRight: "1em"
          }}
        />

        <List>
          <Typography
            sx={{
              minWidth: 0,
              textAlign: open ? "left" : "center",
              paddingLeft: open ? "1em" : "0em",
              justifyContent: open ? "initial" : "center",
              fontWeight: "bold",
              fontSize: "0.70em",
              color: "#D8E0F8",
              opacity: "0.75"
            }}
          >
            ADDONS
          </Typography>
          {["Pages", "Charts", "Tables"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                opacity: "0.85",
                display: "flex",
                flexDirection: open ? "row" : "column"
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  opacity: "0.5",
                  margin: 0,
                  paddingRight: open ? "0.5em" : "auto",
                  color: "white",
                  '& svg': {
                    fontSize: '0.85em'
                  }
                }}
              >
                {index === 0 ? <FontAwesomeIcon icon={faFolder} /> : 
                 index === 1 ? <FontAwesomeIcon icon={faAreaChart} /> :
                 index === 2 ? <FontAwesomeIcon icon={faTable} /> : ''}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ display: "block" }}
                primaryTypographyProps={{
                  fontSize: open ? "0.90em" : "0.70em",
                  fontWeight: "400"
                }}
              />
              {index ===0 ? <ChevronRightIcon sx={{ display: open ? "block" : "none" }} /> : ''}
              
            </ListItemButton>
          ))}
        </List>

        <Divider
          sx={{
            background: "white",
            opacity: "0.25",
            marginLeft: "1em",
            marginRight: "1em"
          }}
        />

        <DrawerFooter>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: "50%",
              background: "#6A87DF",
              opacity: "0.85",
              width: "1.75em",
              height: "1.75em",
              outline: "0",
              filter: `brightness(95%)`,
              "&:hover": {
                background: "#6A87DF",
                filter: `brightness(100%)`
              }
            }}
          >
            {open ? (
              <ChevronLeftIcon sx={{ color: "white" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerFooter>
      </Drawer>
    </Box>
  );
}
