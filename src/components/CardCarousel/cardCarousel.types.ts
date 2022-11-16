import { ICardResponseParams } from '../../services/bankApi.types';

export interface ICardCarouselProps {
  cards: ICardResponseParams[];
  onChange?: (index: number) => void;
  showIndicator?: boolean;
}
