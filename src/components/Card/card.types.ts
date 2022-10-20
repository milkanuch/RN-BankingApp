import { ICardFooterProps } from './CardFooter/cardFooter.types';
import { ICardHeaderProps } from './CardHeader/cardHeader.types';
import { IMoneyTextProps } from './MoneyText/moneyText.types';

export interface ICardProps
  extends ICardHeaderProps,
    ICardFooterProps,
    IMoneyTextProps {
  widthScale: number;
}

export enum Currency {
  UAH = 'UAH',
  USD = 'USD',
  EUR = 'EUR',
}

export enum CardProvider {
  Visa = 'Visa',
  Mastercard = 'Mastercard',
}
