import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate, Link } from "react-router-dom";
import { RecommendedFollows } from "Const";
import Logo from "Element/Logo";
import FollowListBase from "Element/FollowListBase";
import { useMemo } from "react";

import messages from "./messages";

export default function DiscoverFollows() {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const sortedReccomends = useMemo(() => {
    return RecommendedFollows.sort(() => (Math.random() >= 0.5 ? -1 : 1));
  }, []);

  return (
    <div className="main-content new-user" dir="auto">
      <Logo />
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <h1>
        <FormattedMessage {...messages.Ready} />
      </h1>
      <p>
        <FormattedMessage {...messages.Share} values={{ link: <Link to="/">{formatMessage(messages.World)}</Link> }} />
      </p>
      <div className="next-actions continue-actions">
        <button type="button" onClick={() => navigate("/")}>
          <FormattedMessage {...messages.Done} />{" "}
        </button>
      </div>
      <h3>
        <FormattedMessage {...messages.PopularAccounts} />
      </h3>
      <div dir="ltr">{sortedReccomends.length > 0 && <FollowListBase pubkeys={sortedReccomends} />}</div>
    </div>
  );
}
