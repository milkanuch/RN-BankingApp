import { CardResponseParams } from '../../../services/bankApi.types';

export interface ITransferCardCarouselProps {
  cards?: CardResponseParams[];
  onChange: (value: number) => void;
}
