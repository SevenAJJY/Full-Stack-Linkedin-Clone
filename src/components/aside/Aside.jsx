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
            <img src="/images/feed-icon.svg" alt="" />
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
            <img src="/images/right-icon.svg" alt="" />
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
