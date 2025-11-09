import { createSlice, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchCommentsAction,
  fetchFavoritesAction,
  saveCommentAction,
  logoutAction,
  changeFavoriteOfferStatusAction
} from '../api-actions';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { StatusCodes } from 'http-status-codes';
import { Offer } from '../../types/offer';

const initialState: OffersData = {
  offers: [],
  offerDetailed: undefined,
  offersNearby: [],
  comments: [],
  favorites: [],
  isOfferNotFound: false,
  isDataLoading: false
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    setResourceNotFound: (state, action: PayloadAction<boolean>) => {
      state.isOfferNotFound = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offerDetailed = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state, action) => {
        if (isRejectedWithValue(action) && action.payload === StatusCodes.NOT_FOUND) {
          state.isOfferNotFound = true;
        }
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const favorites = action.payload;
        const favoriteIds = new Set(favorites.map((fav) => fav.id));

        state.offers = state.offers.map((offer) => ({
          ...offer,
          isFavorite: favoriteIds.has(offer.id)
        }));

        if (state.offerDetailed) {
          state.offerDetailed = {
            ...state.offerDetailed,
            isFavorite: favoriteIds.has(state.offerDetailed.id)
          };
        }

        state.offersNearby = state.offersNearby.map((offer) => ({
          ...offer,
          isFavorite: favoriteIds.has(offer.id)
        }));

        state.favorites = favorites;
      })
      .addCase(saveCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offers = state.offers.map((offer) => ({
          ...offer,
          isFavorite: false
        }));

        if (state.offerDetailed) {
          state.offerDetailed = {
            ...state.offerDetailed,
            isFavorite: false
          };
        }

        state.offersNearby = state.offersNearby.map((offer) => ({
          ...offer,
          isFavorite: false
        }));

        state.favorites = [];
      })
      .addCase(changeFavoriteOfferStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;

        if (state.offerDetailed?.id === updatedOffer.id) {
          state.offerDetailed = {
            ...state.offerDetailed,
            isFavorite: updatedOffer.isFavorite
          };
        }

        const offerIndex = state.offers.findIndex((o) => o.id === updatedOffer.id);
        if (offerIndex !== -1) {
          state.offers[offerIndex] = {
            ...state.offers[offerIndex],
            isFavorite: updatedOffer.isFavorite
          } as Offer;
        }

        const nearbyIndex = state.offersNearby.findIndex((o) => o.id === updatedOffer.id);
        if (nearbyIndex !== -1) {
          state.offersNearby[nearbyIndex] = {
            ...state.offersNearby[nearbyIndex],
            isFavorite: updatedOffer.isFavorite
          } as Offer;
        }

        if (updatedOffer.isFavorite) {
          const exists = state.favorites.some((f) => f.id === updatedOffer.id);
          if (!exists) {
            state.favorites.push(updatedOffer as unknown as Offer);
          }
        } else {
          state.favorites = state.favorites.filter((f) => f.id !== updatedOffer.id);
        }
      });
  },
});

export const { setResourceNotFound } = offersData.actions;
