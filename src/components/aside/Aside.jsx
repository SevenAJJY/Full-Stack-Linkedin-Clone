import React from "react";
import {
  Container,
  FollowCard,
  Title,
  FeedList,
  Avatar,
  Recommendation,
  BannerCard,
} from "./AsideStyled";

const Aside = () => {
  return (
    <div>
      <Container>
        <FollowCard>
          <Title>
            <h2>Add to your feed</h2>
            <svg
              role="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="signal-notice-small"
            >
              <use href="#signal-notice-small" width="16" height="16"></use>
            </svg>
          </Title>
          <FeedList>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#linkedin</span>
                <button>Follow</button>
              </div>
            </li>
            <li>
              <a>
                <Avatar />
              </a>
              <div>
                <span>#video</span>
                <button>Follow</button>
              </div>
            </li>
          </FeedList>
          <Recommendation>
            View all recommendation
            <svg
              role="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              data-test-icon="arrow-right-small"
            >
              <use href="#arrow-right-small" width="16" height="16"></use>
            </svg>
          </Recommendation>
        </FollowCard>
        <BannerCard>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
          />
        </BannerCard>
      </Container>
    </div>
  );
};

export default Aside;
