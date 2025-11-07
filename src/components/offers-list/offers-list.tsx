import { Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
    offers: Offers;
    onActiveChange: (activeOfferId: number | undefined) => void;
}

function OffersList({offers, onActiveChange}: OffersListProps): JSX.Element {
  return (
    <div
      className="cities__places-list places__list tabs__content"
    >
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          variant="main"
          onSetActive={() => onActiveChange(offer.id)}
          onResetActive={() => onActiveChange(undefined)}
        />
      ))}
    </div>
  );
}

export default OffersList;
