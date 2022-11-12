import { ICardFooterInnerProps } from '../CardFooter/cardFooter.types';
import { ICardHeaderProps } from '../CardHeader/cardHeader.types';
import { IMoneyTextProps } from '../MoneyText/moneyText.types';

export interface ICardContentProps
  extends ICardHeaderProps,
    ICardFooterInnerProps,
    IMoneyTextProps {}
