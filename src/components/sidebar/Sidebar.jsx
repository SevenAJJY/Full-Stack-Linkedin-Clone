import React from "react";
import {
  Container,
  IdentityCard,
  UserInfo,
  CardBg,
  Photo,
  Link,
  Widget,
  Item,
  PreApp,
} from "./SidebarStyled";
import { connect } from "react-redux";

const Sidebar = (props) => {
  // console.log(props.user.photoURL);
  return (
    <Container>
      <IdentityCard>
        <UserInfo>
          <CardBg />
          <a>
            <Photo
              img={
                // props.user.photoURL &&
                // (props.user.photoURL
                //   ? props.user.photoURL
                //   : "./assets/photo.svg")
                "./assets/photo.svg"
              }
            />
            <Link>
              <p>{props.user ? props.user.displayName : "there!"}</p>
              <span>Développeur Full Stack</span>
            </Link>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <div>
                <span>Connections</span>
                <span>101</span>
              </div>
              <span>Grow Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <PreApp>
          <a>
            <div>
              <span>Access exclusive tools & insights</span>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                <span>Get hired faster</span>
              </div>
            </div>
          </a>
        </PreApp>
        <Item>
          <span>
            <svg
              role="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="bookmark-fill-small"
            >
              <use href="#bookmark-fill-small" width="16" height="16"></use>
            </svg>
            My Items
          </span>
        </Item>
      </IdentityCard>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Sidebar);
