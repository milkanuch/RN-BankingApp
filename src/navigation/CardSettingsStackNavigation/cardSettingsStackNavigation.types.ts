export enum CardSettingsStackScreenTypes {
  CardSettings = 'CardSettings',
  NewCard = 'NewCard',
}

export type CardSettingsStackParamList = {
  [CardSettingsStackScreenTypes.CardSettings]: undefined;
  [CardSettingsStackScreenTypes.NewCard]: undefined;
};
