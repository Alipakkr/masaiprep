import BottomMainRight from './BottomMainRight';

function Right({ userName }) {
  return (
    <div className="main-right">
      <h3>Main Right Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

export default Right;