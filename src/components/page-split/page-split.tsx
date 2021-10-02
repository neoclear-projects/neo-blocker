import PageLeft from './page-left';
import PageMiddle from './page-middle';
import PageRight from './page-right';
import './page-split.scss';

export default function PageSplit({
  leftChild,
  middleChild,
  rightChild
}: {
  leftChild: JSX.Element,
  middleChild: JSX.Element,
  rightChild: JSX.Element
}) {
  return (
    <div id='page-split'>
      <PageLeft child={leftChild} />
      <PageMiddle child={middleChild} />
      <PageRight child={rightChild} />
    </div>
  );
};
