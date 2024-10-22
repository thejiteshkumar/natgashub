import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Sidenav.css";

export const Sidenav = () => {
  return (
    <>
      <div className="sidenav">
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#13395e", // Background for active item
                  color: "#b6c8d9", // Text color for active item
                },
              },
            }}
          >
            <div>
              <img src="https://test.natgashub.com/Assets/NatGasHub-Logo1.svg" />
              {/* <hr /> */}
            </div>

            <MenuItem component={<Link to="/" />} >Dashboard</MenuItem>
            <MenuItem component={<Link to="/noms" />}>Noms</MenuItem>
            <MenuItem component={<Link to="/schedqty" />}>Sched Qty</MenuItem>
            <MenuItem component={<Link to="/unsubscribedCapacity" />}>
              Unsubscribed Capacity
            </MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>
            <MenuItem component={<Link to="/notices" />}>Notices</MenuItem>

            <SubMenu label="Tariff">
              <MenuItem component={<Link to="/tariff" />}> All Tariff</MenuItem>
              <MenuItem component={<Link to="/negotiatedRates" />}>
                Negotiated Rates
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
