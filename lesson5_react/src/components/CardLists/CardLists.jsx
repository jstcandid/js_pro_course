import { CardAuthor } from '../Card/CardAuthor';
import { CardFacebook } from '../Card/CardFacebook';
import { facebookCards, onlinerCards, authorCards } from './constants';

import { CardOnliner } from '../Card/CardOnliner';

export const AuthorList = () => {
  return authorCards.map((card, index) => {
    return (
      <CardAuthor
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        author={card.author}
      />
    );
  });
};

export const FacebookList = ({ onClickLike, onClickReply }) => {
  return facebookCards.map((card, index) => {
    return (
      <CardFacebook
        key={index}
        name={card.name}
        postDescription={card.postDescription}
        timeText={card.timeText}
        location={card.location}
        onClickLike={onClickLike}
        onClickReply={onClickReply}
      />
    );
  });
};

export const OnlinerList = ({ onClick }) => {
  return onlinerCards.map((card, index) => {
    return (
      <CardOnliner
        key={index}
        title={card.title}
        backgroundImageUrl={card.backgroundImageUrl}
        category={card.category}
        commentCount={card.commentCount}
        onClick={onClick}
      />
    );
  });
};
