import { useState } from "react";
import axios from "axios";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

import io from "socket.io-client";
import Dashboard from "layouts/dashboard";
const socket = io.connect("http://localhost:3001");

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showDash, setShowDash] = useState(false);
  const [error, setError] = useState(false);

  const login = async () => {
    try {
      const data = await axios.post("http://localhost:3001/auth/login", {
        email: username,
        password: password,
      });
      if (data.status === 200) {
        if (data.data.user.role === "Client") {
          window.location.href = "/dashboard";
          localStorage.setItem("user", JSON.stringify(data.data.user));
        } else if (data.data.user.role === "Expert") {
          window.location.href = "/expert/expertDashboard";
          localStorage.setItem("user", JSON.stringify(data.data.user));
        }
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {!showDash ? (
        <CoverLayout
          title="Welcome back"
          description="Enter your email and password to sign in"
          image={curved9}
        >
          {error && (
            <SoftBox display="flex" alignItems="center" justifyContent="center" mb={3}>
              <SoftTypography
                variant="button"
                fontWeight="bold"
                textTransform="uppercase"
                color="error"
                fontSize="12px"
              >
                Invalid username or password
              </SoftTypography>
            </SoftBox>
          )}

          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Email
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="email"
                placeholder="Email"
                //  onChange={(e)=>{console.log(e.target.value)}}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Password
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth type="button" onClick={login}>
                sign in
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Don&apos;t have an account?{" "}
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </CoverLayout>
      ) : (
        <Dashboard socket={socket} username={username} password={password} />
      )}
    </>
  );
}

export default SignIn;
