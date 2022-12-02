import React from "react";
import Link from "next/link";

// Components
import UserCard from "../UserCard";

// Utils
import censorBadWords from "~/utils/censorBadWords";
import injectEllipsis from "~/utils/injectEllipsis";
import htmlSubstring from "~/utils/htmlSubstring";

const PostSummary = ({ post: { id, title, description, author, created_at } }) => {
  return (
    <div className='posts'>
      <div className='stats-container fc-black-500'>
        <div className='stats'>
          <div className='vote'>
            <span className='vote-count'>XYZ</span>
            <div className='count-text'>comentarios</div>
          </div>
          <div className='vote'>
            <span className='vote-count'>XYZ</span>
            <div className='count-text'>etiquetas</div>
          </div>
          <div className='vote'>
            <div className='count-text'>XYZ vistas</div>
          </div>
        </div>
      </div>
      <div className='summary'>
        <h3>
          <Link href={`/preguntas/${id}`}>{censorBadWords(title)}</Link>
        </h3>
        <div
          className='brief'
          dangerouslySetInnerHTML={{
            __html: injectEllipsis(
              censorBadWords(htmlSubstring(description, 200))
            ),
          }}
        ></div>
        <UserCard
          created_at={created_at}
          author={author}
          float={"right"}
          backgroundColor={"transparent"}
        />
      </div>
    </div>
  );
};

export default PostSummary;
