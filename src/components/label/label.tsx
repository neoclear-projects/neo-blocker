import './label.scss';

export default function Label({
  text,
  gridArea = undefined,
  bordered = false
}: {
  text: string | JSX.Element
  gridArea?: string | undefined,
  bordered?: boolean
}) {
  return (
    <div
      className={bordered ? 'room-label-bordered' : 'room-label'}
      style={{ gridArea: gridArea }}
    >
      { text }
    </div>
  );
};
