import { useState } from "react";
import axios from "axios";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import SignIn from "layouts/authentication/sign-in";

function SignUp() {
  const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    role: "client",
    age: 0,
    firstname: "",
    lastname: "",
    telephone: "",
    city: "",
    sexe: "",
  });
  const [error, setError] = useState(false);

  async function register() {
    console.log(info);
    const data = await axios.post("http://localhost:3001/authentication/sign-up", {
      username: info.username,
      password: info.password,
      email: info.email,
      role: info.role,
      age: parseInt(info.age),
      firstname: info.firstname,
      lastname: info.lastname,
      telephone: info.telephone,
      city: info.city,
      sexe: info.sexe,
    });
    console.log(data.data);
    if (data.data.success === true) {
      if (data.data.role === "client") {
        window.location.herf = "/dashboard";
        localStorage.setItem("user", JSON.stringify(data.data.client));
      } else if (data.data.role === "expert") {
        window.location.herf = "/expert/expertDashboard";
        localStorage.setItem("user", JSON.stringify(data.data.expert));
      }
    } else {
      setError(true);
      console.log(data.success);
    }
  }

  return (
    <BasicLayout
      title="Create Your Account!"
      description="Use your email and password."
      image={curved6}
    >
      <Card
        sx={{
          width: "130%",
          m: -7,
          my: 1,
          px: 1,
          p: 2,
        }}
      >
        <SoftBox p={3} mb={0} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                value={info.email}
                onChange={(e) => {
                  setInfo({ ...info, email: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                placeholder="Username"
                value={info.username}
                onChange={(e) => {
                  setInfo({ ...info, username: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                value={info.username}
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox px={27} pl={0}>
              <SoftInput
                placeholder="Firstname"
                value={info.firstname}
                onChange={(e) => {
                  setInfo({ ...info, firstname: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox mb={2} px={0} pl={25} mt={-5}>
              <SoftInput
                placeholder="Lastname"
                value={info.lastname}
                onChange={(e) => {
                  setInfo({ ...info, lastname: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox px={27} pl={0}>
              <SoftInput
                placeholder="Sexe"
                value={info.sexe}
                onChange={(e) => {
                  setInfo({ ...info, sexe: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox mb={2} px={0} pl={25} mt={-5}>
              <SoftInput
                placeholder="Age"
                value={info.age}
                onChange={(e) => {
                  setInfo({ ...info, age: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox px={27} pl={0}>
              <SoftInput
                placeholder="Telephone"
                value={info.telephone}
                onChange={(e) => {
                  setInfo({ ...info, telephone: e.target.value });
                }}
              />
            </SoftBox>
            <SoftBox mb={2} px={0} pl={25} mt={-5}>
              <SoftInput
                placeholder="Country City"
                value={info.city}
                onChange={(e) => {
                  setInfo({ ...info, city: e.target.value });
                }}
              />
            </SoftBox>

            <SoftBox display="flex" alignItems="center">
              <Checkbox
                type="checkbox"
                onChange={(e) => {
                  setInfo({ ...info, role: "client" });
                }}
                checked={info.role === "client"}
              />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={(e) => e.preventDefault()}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;Client&nbsp;
              </SoftTypography>
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox
                type="checkbox"
                checked={info.role === "expert"}
                onChange={(e) => {
                  setInfo({ ...info, role: "expert" });
                }}
              />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={(e) => e.preventDefault()}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;Expert&nbsp;
              </SoftTypography>
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                fullWidth
                type="button"
                onClick={register}
              >
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
