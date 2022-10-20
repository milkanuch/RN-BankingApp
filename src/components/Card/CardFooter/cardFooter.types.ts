import { CardProvider } from '../card.types';

export interface ICardFooterProps {
  cardNumber: string;
  expirationDate: Date;
  cardProvider: CardProvider;
}

export interface ICardFooterInnerProps extends ICardFooterProps {
  isSecured: boolean;
}
