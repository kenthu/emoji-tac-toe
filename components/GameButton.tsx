interface Props {
  text: string;
  isEnabled: boolean;
  onClick: () => void;
}

export const GameButton = ({ text, isEnabled, onClick }: Props): JSX.Element => {
  return (
    <button
      className={`my-2 rounded bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-700 sm:px-3 ${
        isEnabled ? '' : 'cursor-not-allowed opacity-50'
      }`}
      onClick={() => {
        if (isEnabled) {
          onClick();
        }
      }}
    >
      {text}
    </button>
  );
};
