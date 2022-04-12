import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Wallet from "../components/Wallet";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { IconButton, makeStyles } from "@material-ui/core";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [walletOpen, setWalletOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setWalletOpen(false)
  };
  const goTo = page => {
    navigate(page)
    handleClick();
  };
  const handleDrawerToggle = () => {
    setWalletOpen(!walletOpen);
  };
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{zIndex: 1400, background: "white" }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <a onClick={() => goTo("/")}><img
              alt="Entrepot"
              src="/logo.jpg"
              style={{ height: 64, cursor: "pointer" }}
            /></a>
          </Typography>
          <div className={classes.grow} />
          <Button
            onClick={() => goTo("/sale")}
            className={(props.view === "sale" ? "selected " : "")+[classes.button].join(' ')}
            color="inherit"
          >
            Launchpad
          </Button>
          <Button
            onClick={() => {
              navigate("/marketplace");
              handleClick();
            }}
            className={(props.view === "marketplace" ? "selected " : "")+[classes.button].join(' ')}
            color="inherit"
          >
            Marketplace
          </Button>
          <Button
            onClick={() => {
              navigate("/pawnshop");
              handleClick();
            }}
            className={(props.view === "pawnshop" ? "selected " : "")+[classes.button].join(' ')}
            color="inherit"
          >
            Pawnshop
          </Button>
          <Button
            onClick={() => goTo("/create")}
            className={(props.view === "create" ? "selected " : "")+[classes.button].join(' ')}
            color="inherit"
          >
            Create
          </Button>
          <Button
            onClick={() => goTo("/contact")}
            className={(props.view === "contact" ? "selected " : "")+[classes.button].join(' ')}
            color="inherit"
          >
            Support
          </Button>
          <Button
            onClick={handleDrawerToggle}
            color="inherit"
            className={[classes.button].join(' ')}
          >
          <AccountBalanceWalletIcon fontSize="large" />
          </Button>

          <IconButton className={classes.hidden}>
            <AccountBalanceWalletIcon onClick={() => {setOpen(false); setWalletOpen(!walletOpen)}} />
          </IconButton>
          <IconButton className={classes.hidden}>
            <MenuIcon onClick={() => {setOpen(!open); setWalletOpen(false)}} />
          </IconButton>
          {open && (
            <div className={classes.smNav} onClick={() => setOpen(false)}>
              <Button
                onClick={() => goTo("/sale")}
                className={classes.button1}
                style={{
                  color: props.view === "sale" ? "#00d092" : "#000",
                  borderBottom:
                    props.view === "sale"
                      ? "3px solid #00d092"
                      : "3px solid transparent",
                }}
                color="inherit"
              >
                Launchpad
              </Button>
              <Button
                onClick={() => goTo("/marketplace")}
                className={classes.button1}
                style={{
                  color: props.view === "marketplace" ? "#00d092" : "#000",
                  borderBottom:
                    props.view === "marketplace"
                      ? "3px solid #00d092"
                      : "3px solid transparent",
                }}
                color="inherit"
              >
                Marketplace
              </Button>
              <Button
                onClick={() => goTo("/pawnshop")}
                className={classes.button1}
                style={{
                  color: props.view === "pawnshop" ? "#00d092" : "#000",
                  borderBottom:
                    props.view === "pawnshop"
                      ? "3px solid #00d092"
                      : "3px solid transparent",
                }}
                color="inherit"
              >
                Pawnshop
              </Button>
              <Button
                onClick={() => goTo("/create")}
                className={classes.button1}
                style={{
                  color: props.view === "create" ? "#00d092" : "#000",
                  borderBottom:
                    props.view === "create"
                      ? "3px solid #00d092"
                      : "3px solid transparent",
                }}
                color="inherit"
              >
                Create
              </Button>
              <Button
                onClick={() => goTo("/contact")}
                className={classes.button1}
                style={{
                  color: props.view === "contact" ? "#00d092" : "#000",
                  borderBottom:
                    props.view === "contact"
                      ? "3px solid #00d092"
                      : "3px solid transparent",
                }}
                color="inherit"
              >
                Support
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
    
    <Wallet
      processPayments={props.processPayments}
      view={props.view}
      setBalance={props.setBalance}
      identity={props.identity}
      account={props.account}
      loader={props.loader}
      logout={props.logout}
      login={props.login}
      collection={props.collection}
      collections={props.collections}
      currentAccount={props.currentAccount}
      changeAccount={props.changeAccount}
      accounts={props.accounts}
      close={() => setWalletOpen(false)}
      open={walletOpen}
    />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  hidden: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  smNav: {
    position: "absolute",
    top: 72,
    width: "250px",
    display: "flex",
    right: 0,
    backgroundColor: "white",
    height: "100vh",
    justifyContent: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  toolbarButtons: {
    marginLeft: "auto",
  },
  content: {
    flexGrow: 1,
  },
  sale: {
    backgroundImage : "url('/icon/anchor.png')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px",
    backgroundPosition: "0 49%",
    paddingLeft : 30,
    "&:hover, &.selected": {
      backgroundImage : "url('/icon/anchor-g.png')",      
    },
  },
  marketplace: {
    backgroundImage : "url('/icon/marketplace.png')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px",
    backgroundPosition: "0 49%",
    paddingLeft : 30,
    "&:hover, &.selected": {
      backgroundImage : "url('/icon/marketplace-g.png')",      
    },
  },
  create: {
    backgroundImage : "url('/icon/create.png')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px",
    backgroundPosition: "0 49%",
    paddingLeft : 30,
    "&:hover, &.selected": {
      backgroundImage : "url('/icon/create-g.png')",      
    },
  },
  contact: {
    backgroundImage : "url('/icon/support.png')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px",
    backgroundPosition: "0 49%",
    paddingLeft : 30,
    "&:hover, &.selected": {
      backgroundImage : "url('/icon/support-g.png')",      
    },
  },
  watchlist: {
    backgroundImage : "url('/icon/watchlist.png')",
    backgroundRepeat : "no-repeat",
    backgroundSize : "20px",
    backgroundPosition: "0 49%",
    paddingLeft : 30,
    "&:hover, &.selected": {
      backgroundImage : "url('/icon/watchlist-g.png')",      
    },
  },
  button: {
    marginLeft: 30,
    fontSize: "1.1em",
    fontWeight: "bold",
    borderBottom: "3px solid transparent",
    borderRadius: 0,
    height: 73,
    "&:hover, &.selected": {
      color: "#00d092 !important",
      backgroundColor: "#fff",
      borderBottom: "3px solid #00d092 !important",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button1: {
    fontSize: "1.1em",
    fontWeight: "bold",
    borderBottom: "3px solid transparent",
    borderRadius: 0,
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "30px",
    paddingTop: "40px",
    height: 73,
    "&:hover": {
      color: "#00d092 !important",
      backgroundColor: "#fff",
      borderBottom: "3px solid #00d092 !important",
    },
  },
}));
