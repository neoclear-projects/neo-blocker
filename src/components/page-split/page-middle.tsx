import './page-split.scss';

export default function PageMiddle({
  child
}: {
  child: JSX.Element
}) {
  return (
    <div id='page-middle'>
      { child }
    </div>
  );
};
