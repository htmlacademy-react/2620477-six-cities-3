import { Comment } from '../../types/comment';
import Review from '../review/review';
import { memo } from 'react';

type ReviewsListProps = {
  comments: Comment[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  const sorted = [...comments]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  return (
    <ul className="reviews__list">
      {sorted.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

const MemoizedReviewsList = memo(ReviewsList);

export default MemoizedReviewsList;
