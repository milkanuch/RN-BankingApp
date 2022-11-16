import { ICardResponseParams } from '../../../services/bankApi.types';

export interface ITransferCardCarouselProps {
  cards?: ICardResponseParams[];
  onChange: (value: number) => void;
}
