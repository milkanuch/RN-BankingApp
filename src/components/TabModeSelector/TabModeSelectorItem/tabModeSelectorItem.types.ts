export interface ITabModeSelectorItemProps {
  currentValue: any;
  changeValue: (newValue: string | number) => void;
  data: ITabModeSelectorItemData;
}

export interface ITabModeSelectorItemData {
  title: string;
  value: string;
}
