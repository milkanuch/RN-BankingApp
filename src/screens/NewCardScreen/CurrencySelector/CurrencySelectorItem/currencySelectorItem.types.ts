export interface ICurrencySelectorItemProps {
  currency: string;
  selected: boolean;
  onPress: (value: string) => void;
}
