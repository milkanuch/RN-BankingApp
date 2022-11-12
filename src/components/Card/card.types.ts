import { ICardFooterProps } from './CardFooter/cardFooter.types';
import { ICardHeaderProps } from './CardHeader/cardHeader.types';
import { IMoneyTextProps } from './MoneyText/moneyText.types';

export interface IAbstractCard {}
export interface ICardProps
  extends ICardHeaderProps,
    ICardFooterProps,
    IMoneyTextProps,
    IAbstractCard {
  blocked?: boolean;
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
