import { TypeOffer } from '../../types/offer';
import { useState } from 'react';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  offers: TypeOffer[];
};

function ListOffers({ offers }: ListOffersProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TypeOffer | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={(): void => {
              setActiveOffer(offer);
            }}
            active={activeOffer?.id === offer.id}
          />
        ))
      }
    </div>
  );
}

export default ListOffers;
