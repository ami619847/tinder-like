import React, { PureComponent } from 'react';

export default class UserStatistics extends PureComponent {

  render() {
    return(
      <div className="userStatisticsForm">

        <form>
          <label>
            Invitations sent:
            <input name="invitationSent"/>
          </label>
          <label>
            Invitations received:
            <input name="invitationReceived"/>
          </label>
          <label>
            Total match:
            <input name="totalMatch"/>
          </label>
        </form>
      </div>
    )
  }
}
