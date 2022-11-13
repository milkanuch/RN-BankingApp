export interface IProviderSelectorItemProps {
  provider: string;
  selected: boolean;
  onPress: (value: string) => void;
}
