import { Card } from '../Card/Card_author';
import { Card1 } from '../Card/Card_facebook';
import { facebookCards } from './Constants';
import { authorCards } from './Constants';
import { Card_onliner } from '../Card/Card_onliner';
import { onlinerCards } from './Constants';

export const AuthorList = () => {
  return authorCards.map((card, index) => {
    return (
      <Card
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
      <Card1
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
      <Card_onliner
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
