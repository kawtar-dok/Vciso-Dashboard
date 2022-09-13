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

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
 
  const [error, setError] = useState(false);
  const router = useRouter();

  
  async function login() {
    const data = await axios.post("http://localhost:3001/authentication/sign-in", {
      data: {
        username: info.username,
        password: info.password,
      },
    });
    if (data.data.success) {
      localStorage.setItem("user", JSON.stringify(data.data));
      
      if (data.data.role === "expert") {
        router.push("/expert/exportDashboard");
      } else if (data.data.role === "client") {
        router.push("/dashbord");
      }
    } else {
      setError(true);
      console.log(error);
      //console.log(data.success)
    }
  }

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" 
        //  onChange={(e)=>{console.log(e.target.value)}}
                      value={info.email}
                      onChange={(e) => {
                        setInfo({ ...info, email: e.target.value });
                        setError(false);
                      }}
            />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password"
                      value={info.password}
                      onChange={(e) => {
                        setInfo({ ...info, password: e.target.value });
                        setError(false);
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
          <SoftButton 
          variant="gradient" 
          color="info" 
          fullWidth
          type="button" 
          onClick={login}
           >
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
  );
}

export default SignIn;
