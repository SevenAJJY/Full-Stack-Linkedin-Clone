import React, { useEffect, useRef } from "react";
import {
  Container,
  Google,
  List,
  Line,
  Form,
  Div,
  Section,
  Link,
  Nav,
} from "./LoginStyled";
import { signInAPI } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.user && navigate("/home");
  }, [props.user]);
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/assets/linkedin.svg" alt="Linkedin Logo" />
        </a>
        <List>
          <li>
            <a
              href="#"
              data-tracking-control-name="guest_homepage-basic_guest_nav_menu_discover"
              data-tracking-will-navigate=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                focusable="false"
                aria-busy="false"
              >
                <path
                  d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Discover</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="none"
                focusable="false"
                aria-busy="false"
              >
                <path
                  d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>People</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/learning/search?trk=guest_homepage-basic_guest_nav_menu_learning"
              data-tracking-control-name="guest_homepage-basic_guest_nav_menu_learning"
              data-tracking-will-navigate=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                focusable="false"
                aria-busy="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                  fill="currentColor"
                  fillOpacity=".25"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                  fill="currentColor"
                  fillOpacity=".6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Learning</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs"
              data-tracking-control-name="guest_homepage-basic_guest_nav_menu_jobs"
              data-tracking-will-navigate=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="none"
                focusable="false"
                aria-busy="false"
              >
                <path
                  d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Jobs</span>
            </a>
          </li>
        </List>
        <div>
          <Link hover="gray" border="none">
            Join now
          </Link>
          <Link hover="blue" border="blue">
            Sign in
          </Link>
        </div>
      </Nav>
      <Section>
        <Div>
          <h1>Welcome to your professional community</h1>
          <Form onClick={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email">Email or phone</label>
              <input type="text" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <a href="#">Forgot password?</a>
            </div>
            <div>
              <button type="submit">Sign in</button>
            </div>
            <Line>
              <span>or</span>
            </Line>
            <Google onClick={() => props.signIn()}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <span>Sign in with Google</span>
            </Google>
          </Form>
        </Div>
        <img src="/assets/homeImg.svg" alt="" />
      </Section>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
