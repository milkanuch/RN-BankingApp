export interface ICardTypeSelectorItemProps {
  cardType: string;
  selected: boolean;
  onPress: (value: string) => void;
}
