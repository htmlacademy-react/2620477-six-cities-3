import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { memo, useCallback } from 'react';

type OffersListProps = {
  offers: Offers;
  onActiveChange: (id: string | undefined) => void;
};

function OffersList({ offers, onActiveChange }: OffersListProps): JSX.Element {
  const handleMouseEnter = useCallback((id: string) => {
    onActiveChange(id);
  }, [onActiveChange]);

  const handleMouseLeave = useCallback(() => {
    onActiveChange(undefined);
  }, [onActiveChange]);

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          variant="horizontal"
          onSetActive={handleMouseEnter}
          onResetActive={handleMouseLeave}
        />
      ))}
    </div>
  );
}

const MemoizedOffersList = memo(OffersList);

export default MemoizedOffersList;
