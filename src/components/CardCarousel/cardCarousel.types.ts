import { ICardProps } from '../Card/card.types';

export interface ICardCarouselProps {
  cards: ICardProps[];
  onChange?: (index: number) => void;
  showIndicator?: boolean;
}
