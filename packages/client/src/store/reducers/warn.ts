export type WarnAction = { type: 'SET_WARN'; text: string };

export const setWarn = (text: string) => ({
  type: 'SET_WARN',
  text,
});

export function warnReducer(state = '', action: WarnAction): string {
  switch (action.type) {
    case 'SET_WARN':
      return action.text;
    default:
      return state;
  }
}