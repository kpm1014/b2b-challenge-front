import React, { Fragment } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const UserCard = ({
  created_at,
  user_id,
  gravatar,
  dateType,
  float,
  backgroundColor,
}) => {
  return (
    <Fragment>
      <div
        className='owner'
        style={{ float: float, backgroundColor: backgroundColor }}
      >
        <div className='user-block fc-black-500'>
          <div className='action-time'>
            Hace {dateType ? dateType : "asked"}{" "}
            {moment(created_at).fromNow(true)}{" "}
          </div>
          <div className='user-logo'>
            <Link className='user-link' to={`/users/${user_id}`}>
              <div className='logo-wrapper'>
                <Image alt='user_logo' src='/assets/150x150.png' />
              </div>
            </Link>
          </div>
          <div className='user-profile'>
            <Link
              className='user-profile-link fc-blue-600'
              href={`/users/${user_id}`}
            >
              {user_id}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserCard;
